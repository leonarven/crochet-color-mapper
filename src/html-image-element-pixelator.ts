import pixelate from "./pixelate/pixelate";
import { cloneImageToCanvas } from "./utils";


async function HTMLImageElementPixelator( sourceImage: HTMLImageElement, { blockSize = 5, maximumColors = 10, minimumThreshold = 10 }: { blockSize: number, maximumColors: number, minimumThreshold: number } = { blockSize: 5, maximumColors: 10, minimumThreshold: 10 } ) {

    if (!sourceImage.complete) {
        await (new Promise( ( resolve ) => {
            sourceImage.onload = resolve;
        }));
    }

    sourceImage.crossOrigin = "Anonymous";

    const targetCanvas = document.createElement( "canvas" );

    const targetContext = cloneImageToCanvas( sourceImage, targetCanvas );

    await pixelate({
        blockSize:        () => blockSize,
        matchToPalette:   () => true,
        maximumColors:    () => maximumColors,
        minimumThreshold: () => minimumThreshold,
        algorithm:        () => 'RGB',
        colorOrGreyscale: () => 'color',
        palettes: () => ({
            basePaints:         false,
            quarterWhites:      true,
            thirdWhites:        false,
            halfWhites:         false,
            twoThirdWhites:     false,
            threeQuarterWhites: false,
        }),
	    dither: () => false
    }, targetContext );

    return targetContext;
}

async function HTMLImageElementReplacerPixelator( sourceImage: HTMLImageElement, { blockSize = 5, maximumColors = 10, minimumThreshold = 10 }: { blockSize: number, maximumColors: number, minimumThreshold: number } = { blockSize: 5, maximumColors: 10, minimumThreshold: 10 } ) {
    
    let context = await HTMLImageElementPixelator( sourceImage, { blockSize, maximumColors, minimumThreshold } );
    
    context.canvas.toBlob(( blob ) => { 

        const url = URL.createObjectURL(blob);

        sourceImage.src = url;

    }, "image/png" );
}


Object.assign( window, { HTMLImageElementPixelator, HTMLImageElementReplacerPixelator } );