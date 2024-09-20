

import { palettes } from "./palettes";

// -----------------

type Color = {
	blue: number;
	green: number;
	name: string;
	red: number;
}  
type CMYKColor = {
	cyan: number;
	key: number;
	magenta: number;
	yellow: number;
}

type IndexState = {
	blockSize: () => number;
	matchToPalette: () => boolean;
	maximumColors: () => number;
	minimumThreshold: () => number;
	algorithm: () => 'RGB' | 'XYZ' | 'CMYK' | 'HSL' | 'DELTA_E';
	colorOrGreyscale: () => 'greyscale' | 'color';
	palettes: () => ({
		basePaints:         boolean;
		quarterWhites:      boolean;
		thirdWhites:        boolean;
		halfWhites:         boolean;
		twoThirdWhites:     boolean;
		threeQuarterWhites: boolean;
	});
	dither: () => boolean;
}

type PixelateStats = {
	colorCounts: { [key: string]: number },
	colors: Color[],
	map: Color[][],
};

// -----------------

export const cmykModel = Object.freeze({
	cyan: 0,
	key: 0,
	magenta: 0,
	yellow: 0,
})

export const rgbModel = Object.freeze({
	blue: 0,
	green: 0,
	name: '',
	red: 0,
});

// -----------------

export default async function ( indexState: IndexState, context: CanvasRenderingContext2D ) {

	let closestColors = {};
	let palette: Color[] = [];

	const getClosestColorInThePalette = (referenceColor: Color = rgbModel): Color => {
		const key = `${referenceColor.red},${referenceColor.green},${referenceColor.blue}`;
		// use the existing calculation if we already determined the closest color
		// for this given referenceColor
		if (closestColors[key])
			return closestColors[key];
		let closestColor: Color = {
			blue: -1,
			green: -1,
			name: '',
			red: -1,
		};
		let shortestDistance = Number.MAX_SAFE_INTEGER;
		// loop through every paint color - this was already loaded inside loadPalettes()
		palette.forEach(paletteColor => {
			// if we already found an exact match, then short-circuit the comparisons
			if (shortestDistance === 0)
				return;
			// calculate the "distance" between referenceColor and this particular paint color
			const distance = Math.abs(paletteColor.red - referenceColor.red)
			+ Math.abs(paletteColor.green - referenceColor.green)
			+ Math.abs(paletteColor.blue - referenceColor.blue);
			// if this paint color is "closer" than any of the others we examined, save it
			// as the paint that is currently the "closest"
			if (distance < shortestDistance) {
				shortestDistance = distance;
				closestColor = paletteColor;
				closestColors[key] = paletteColor;
			}
		});
		return closestColor;
	};

	const getPixelFromImageData = (imageData: ImageData, x = -1, y = -1) => {
		const index = getPixelIndex(imageData, x, y);
		return {
			blue: [imageData.data[index + 2], index + 2],
			green: [imageData.data[index + 1], index + 1],
			red: [imageData.data[index], index],
			x,
			y,
		};
	};

	const getPixelIndex = (imageData: ImageData, x = -1, y = -1) => {
		return ((imageData.width * y) + x) * 4;
	};

	const getRgbFromImageData = (imageData: ImageData, x = -1, y = -1) => {
		const pixelObject = getPixelFromImageData(imageData, x, y);
		const [red] = pixelObject.red;
		const [green] = pixelObject.green;
		const [blue] = pixelObject.blue;
		return {
			red,
			green,
			blue,
			name: '',
		}
	}

	const calculateAverageColor = (imageData: ImageData) => {
		let redSum = 0;
		let redCounter = 0;
		let greenSum = 0;
		let greenCounter = 0;
		let blueSum = 0;
		let blueCounter = 0;
		for (let x = 0; x < imageData.width; x++) {
			for (let y = 0; y < imageData.height; y++) {
				const {red, green, blue} = getRgbFromImageData(imageData, x, y);
				redSum += red;
				redCounter++;
				greenSum += green;
				greenCounter++;
				blueSum += blue;
				blueCounter++;
			}
		}
		return {
			red: Math.round(redSum / redCounter),
			green: Math.round(greenSum / greenCounter),
			blue: Math.round(blueSum / blueCounter),
		} as Color;
	};



	const loadPalettes = () => {
		
		const { colorOrGreyscale, palettes: chosenPalettes } = indexState;
		
		let { basePaints: paints } = palettes;
		if (colorOrGreyscale() === 'greyscale')
			paints = paints.filter(paint => [
			'Golden: Graphite Gray',
			'Golden: Neutral Gray N2',
			'Golden: Neutral Gray N3',
			'Golden: Neutral Gray N4',
			'Golden: Neutral Gray N5',
			'Golden: Neutral Gray N6',
			'Golden: Neutral Gray N7',
			'Golden: Neutral Gray N8',
			'Golden: Raw Umber',
			'Liquitex: Irisdescent Bright Silver',
			'Liquitex: Irisdescent Rich Silver',
			'Liquitex: Irisdescent White',
			'Liquitex: Ivory Black',
			'Liquitex: Muted Grey',
			'Liquitex: Neutral Gray 5',
			'Liquitex: Parchment',
			'Liquitex: Payne\'s Gray',
			'Liquitex: Raw Umber',
			'Liquitex: Titanium White'
		].includes(paint.name));
		
		const white = {
			red: 255,
			green: 255,
			blue: 255,
			name: 'generic white',
		};
		
		Object.entries(chosenPalettes()).forEach(entry => {
			const [name, shouldLoad] = entry;
			
			if (!shouldLoad)
				return;
			
			switch (name) {
				case 'quarterWhites':
				paints.forEach(paint => {
					const mixed = mixRgbColorsSubtractively([paint, paint, paint, white]);
					mixed.name = `${paint.name} (1/4 White)`;
					palette.push(mixed);
				});
				break;
				case 'thirdWhites':
				paints.forEach(paint => {
					const mixed = mixRgbColorsSubtractively([paint, paint, white]);
					mixed.name = `${paint.name} (1/3 White)`;
					palette.push(mixed);
				});
				break;
				case 'halfWhites':
				paints.forEach(paint => {
					const mixed = mixRgbColorsSubtractively([paint, white]);
					mixed.name = `${paint.name} (1/2 White)`;
					palette.push(mixed);
				});
				break;
				case 'twoThirdWhites':
				paints.forEach(paint => {
					const mixed = mixRgbColorsSubtractively([paint, white, white]);
					mixed.name = `${paint.name} (2/3 White)`;
					palette.push(mixed);
				});
				break;
				case 'threeQuarterWhites':
				paints.forEach(paint => {
					const mixed = mixRgbColorsSubtractively([paint, white, white, white]);
					mixed.name = `${paint.name} (3/4 White)`;
					palette.push(mixed);
				});
				break;
				default:
				palette = [...palette, ...paints];
			}
		});
	};

	const convertCmykToRgb = (cmykColor: CMYKColor = cmykModel): Color => {
		let {cyan, magenta, yellow, key} = cmykColor;
		cyan /= 100;
		magenta /= 100;
		yellow /= 100;
		key /= 100;
		let red = cyan * (1.0 - key) + key;
		let green = magenta * (1.0 - key) + key;
		let blue = yellow * (1.0 - key) + key;
		red = Math.round((1.0 - red) * 255.0 + 0.5);
		green = Math.round((1.0 - green) * 255.0 + 0.5);
		blue = Math.round((1.0 - blue) * 255.0 + 0.5);
		return {
			red,
			green,
			blue,
		} as Color;
	};

	const convertRgbToCmyk = (rgbColor: Color = rgbModel): CMYKColor => {
		const {red, green, blue} = rgbColor;
		let cyan = 255 - red;
		let magenta = 255 - green;
		let yellow = 255 - blue;
		let key = Math.min(cyan, magenta, yellow);
		const divider = key === 255 ? 1 : 255 - key;
		cyan = Math.round(((cyan - key) / divider) * 100);
		magenta = Math.round(((magenta - key) / divider) * 100);
		yellow = Math.round(((yellow - key) / divider) * 100);
		key = Math.round((key / 255) * 100);
		return {
			cyan,
			magenta,
			yellow,
			key,
		};
	};


	const mixRgbColorsSubtractively = (rgbColors: Color[] = [rgbModel]): Color => {
		
		let cmykColors = rgbColors.map(rgbColor => convertRgbToCmyk( rgbColor ));
		let cyan = 0;
		let magenta = 0;
		let yellow = 0;
		let key = 0;
		cmykColors.forEach(cmykColor => {
			cyan += cmykColor.cyan;
			magenta += cmykColor.magenta;
			yellow += cmykColor.yellow;
			key += cmykColor.key;
		});
		const cmykColor = {
			cyan: Math.round(cyan / cmykColors.length),
			magenta: Math.round(magenta / cmykColors.length),
			yellow: Math.round(yellow / cmykColors.length),
			key: Math.round(key / cmykColors.length),
		};
		return convertCmykToRgb(cmykColor);
	};


	const pixelate = async ( context: CanvasRenderingContext2D ): Promise<PixelateStats> => {
		const { height, width } = context.canvas;

		const stats: PixelateStats = {
			colorCounts: {},
			colors: [],
			map: []
		};

		const { algorithm: algorithmFn, blockSize: blockSizeFn, matchToPalette: matchToPaletteFn } = indexState; 

		const blockSize = blockSizeFn();

		loadPalettes();
		for (let y = 0; y < height; y += blockSize) {
			const row: Color[] = [];
			for (let x = 0; x < width; x += blockSize) {
				const remainingX = width - x;
				const remainingY = height - y;
				const blockX = remainingX > blockSize ? blockSize : remainingX;
				const blockY = remainingY > blockSize ? blockSize : remainingY;
				const referenceColor = calculateAverageColor(context.getImageData(x, y, blockX, blockY));
				referenceColor.name = '';
				const closestColor = getClosestColorInThePalette(referenceColor);
				row.push(closestColor);
				if (stats.colorCounts[closestColor.name] >= 0)
					stats.colorCounts[closestColor.name]++;
				else {
					stats.colorCounts[closestColor.name] = 1;
					stats.colors.push(closestColor);
				}
				context.fillStyle = `rgb(${closestColor.red}, ${closestColor.green}, ${closestColor.blue})`;
				context.fillRect(x, y, blockX, blockY);
			}
			stats.map.push(row);
		}
		return stats;
	};

	/******************/



	const sortPalette = (stats: PixelateStats) => {
  
		const sort = (a, b) => {
		   const [, aCount] = a;
		   const [, bCount] = b;
		   if (aCount > bCount)
			  return -1;
		   else if (aCount < bCount)
			  return 1;
		   else
			  return 0;
		};
		const { maximumColors, minimumThreshold } = indexState;
		const colorCounts = Object.entries(stats.colorCounts).filter(colorCount => {
		   const [, count] = colorCount;
		   return count >= minimumThreshold();
		})
		colorCounts.sort(sort);
		return maximumColors() ? colorCounts.slice(0, maximumColors()) : colorCounts;
	 };

	const filterPalette = (stats: PixelateStats) => {
		const sortedColorCounts = sortPalette(stats);
		const filteredPalette = [];
		sortedColorCounts.forEach(colorCount => {
		   const [colorName] = colorCount;
		   const filteredColor = stats.colors.find(color => color.name === colorName);
		   filteredPalette.push(filteredColor);
		});
		return filteredPalette;
	 };
  
	const adjustColorDepth = async (stats: PixelateStats ) => {
		const imageData = context.getImageData(0, 0, context.canvas.width, context.canvas.height);
		const adjustedStats = {
		   colorCounts: {},
		   colors: [],
		   map: [],
		};
		const { algorithm, blockSize } = indexState;
		palette = filterPalette(stats);
		let noise = {};
		for (let y = 0; y < imageData.height; y += blockSize()) {
		   const row = [];
		   for (let x = 0; x < imageData.width; x += blockSize()) {
			  const remainingX = imageData.width - x;
			  const remainingY = imageData.height - y;
			  const blockX = remainingX > blockSize() ? blockSize() : remainingX;
			  const blockY = remainingY > blockSize() ? blockSize() : remainingY;
			  let originalColor = getRgbFromImageData(imageData, x, y);
			  
			  //originalColor = applyDithering(noise, originalColor, x, y);

			  const {red, green, blue} = originalColor;
			  const referenceColor = {
				 blue,
				 green,
				 red,
				 name: '',
			  };
			  const color = getClosestColorInThePalette(referenceColor);
			  row.push(color);
			  
			  //noise = recordNoise(noise, originalColor, color, x, y);

			  /* if (Object.hasOwn(adjustedStats.colorCounts, color.name)) */
				if (adjustedStats.colorCounts[color.name] >= 0)
				 adjustedStats.colorCounts[color.name]++;
			  else {
				 adjustedStats.colorCounts[color.name] = 1;
				 adjustedStats.colors.push(color);
			  }
			  context.fillStyle = `rgb(${color.red}, ${color.green}, ${color.blue})`;
			  context.fillRect(x, y, blockX, blockY);
		   }
		   adjustedStats.map.push(row);
		}
		//indexState.setShowProcessing(false);
		console.log(`${algorithm()} color depth adjustment finished at ${window.performance.now()}`);
		return adjustedStats;
	 };



	/******************/

	console.time("pixelate");
	console.log("pixelate()", {
		blockSize:        indexState.blockSize(),
		matchToPalette:   indexState.matchToPalette(),
		maximumColors:    indexState.maximumColors(),
		minimumThreshold: indexState.minimumThreshold(),
		algorithm:        indexState.algorithm(),
		colorOrGreyscale: indexState.colorOrGreyscale(),
		palettes:         indexState.palettes(),
		dither:           indexState.dither(),
	});

	let stats = await pixelate( context );

	console.log(stats);

	stats = await adjustColorDepth(stats);

	console.log(stats);
	console.timeEnd("pixelate");

	return stats;
}