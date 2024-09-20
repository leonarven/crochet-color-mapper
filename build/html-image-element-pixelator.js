(() => {
  // src/pixelate/palettes.ts
  var palettes = Object.freeze({
    basePaints: [
      { red: 77, green: 33, blue: 33, name: "Liquitex: Alizarin Crimson Hue Permanent" },
      { red: 63, green: 55, blue: 48, name: "Liquitex: Raw Umber" },
      { red: 220, green: 208, blue: 33, name: "Liquitex: Yellow Light Hansa" },
      { red: 201, green: 31, blue: 27, name: "Liquitex: Cadmium Red Medium" },
      { red: 205, green: 195, blue: 168, name: "Liquitex: Parchment" },
      { red: 16, green: 145, blue: 139, name: "Liquitex: Bright Aqua Green" },
      { red: 10, green: 113, blue: 180, name: "Liquitex: Brilliant Blue" },
      { red: 95, green: 67, blue: 135, name: "Liquitex: Brilliant Purple" },
      { red: 141, green: 190, blue: 49, name: "Liquitex: Brilliant Yellow Green" },
      { red: 141, green: 105, blue: 44, name: "Liquitex: Bronze Yellow" },
      { red: 106, green: 50, blue: 35, name: "Liquitex: Burnt Sienna" },
      { red: 61, green: 44, blue: 38, name: "Liquitex: Burnt Umber" },
      { red: 215, green: 99, blue: 0, name: "Liquitex: Cadmium Orange" },
      { red: 231, green: 119, blue: 0, name: "Liquitex: Cadmium Orange Hue" },
      { red: 124, green: 17, blue: 22, name: "Liquitex: Cadmium Red Deep Hue" },
      { red: 205, green: 61, blue: 36, name: "Liquitex: Cadmium Red Light" },
      { red: 215, green: 59, blue: 38, name: "Liquitex: Cadmium Red Light Hue" },
      { red: 183, green: 33, blue: 32, name: "Liquitex: Cadmium Red Medium Hue" },
      { red: 234, green: 150, blue: 1, name: "Liquitex: Cadmium Yellow Deep Hue" },
      { red: 244, green: 184, blue: 1, name: "Liquitex: Cadmium Yellow Medium" },
      { red: 228, green: 167, blue: 1, name: "Liquitex: Cadmium Yellow Medium Hue" },
      { red: 229, green: 199, blue: 0, name: "Liquitex: Cadmium Yellow Light" },
      { red: 243, green: 213, blue: 0, name: "Liquitex: Cadmium Yellow Light Hue" },
      { red: 28, green: 86, blue: 158, name: "Liquitex: Cerulean Blue Hue" },
      { red: 36, green: 92, blue: 162, name: "Liquitex: Cerulean Blue" },
      { red: 74, green: 105, blue: 54, name: "Liquitex: Chromium Oxide Green" },
      { red: 24, green: 34, blue: 139, name: "Liquitex: Cobalt Blue Hue" },
      { red: 30, green: 50, blue: 131, name: "Liquitex: Cobalt Blue" },
      { red: 30, green: 91, blue: 86, name: "Liquitex: Cobalt Green" },
      { red: 12, green: 143, blue: 165, name: "Liquitex: Cobalt Teal" },
      { red: 12, green: 93, blue: 99, name: "Liquitex: Cobalt Turquiose" },
      { red: 107, green: 22, blue: 39, name: "Liquitex: Deep Magenta" },
      { red: 48, green: 28, blue: 30, name: "Liquitex: Deep Violet" },
      { red: 39, green: 31, blue: 31, name: "Liquitex: Dioxazine Purple" },
      { red: 16, green: 114, blue: 62, name: "Liquitex: Emerald Green" },
      { red: 30, green: 50, blue: 39, name: "Liquitex: Deep Green Permanent" },
      { red: 76, green: 81, blue: 37, name: "Liquitex: Green Gold" },
      { red: 5, green: 30, blue: 11, name: "Liquitex: Hooker's Green Hue Permanent" },
      { red: 33, green: 52, blue: 23, name: "Liquitex: Hooker's Green Deep Hue Permanent" },
      { red: 198, green: 112, blue: 0, name: "Liquitex: Indian Yellow" },
      { red: 46, green: 35, blue: 41, name: "Liquitex: Indanthrene Blue" },
      { red: 163, green: 130, blue: 60, name: "Liquitex: Iridescent Antique Gold" },
      { red: 192, green: 151, blue: 65, name: "Liquitex: Iridescent Bright Gold" },
      { red: 171, green: 166, blue: 159, name: "Liquitex: Iridescent Bright Silver" },
      { red: 117, green: 79, blue: 50, name: "Liquitex: Iridescent Rich Bronze" },
      { red: 136, green: 57, blue: 34, name: "Liquitex: Iridescent Rich Copper" },
      { red: 165, green: 123, blue: 53, name: "Liquitex: Iridescent Rich Gold" },
      { red: 163, green: 158, blue: 159, name: "Liquitex: Iridescent Rich Silver" },
      { red: 216, green: 205, blue: 199, name: "Liquitex: Iridescent White" },
      { red: 0, green: 0, blue: 0, name: "Liquitex: Ivory Black" },
      { red: 73, green: 165, blue: 215, name: "Liquitex: Light Blue Permanent" },
      { red: 105, green: 140, blue: 218, name: "Liquitex: Light Blue Violet" },
      { red: 62, green: 169, blue: 62, name: "Liquitex: Light Emerald Green" },
      { red: 17, green: 137, blue: 38, name: "Liquitex: Light Green Permanent" },
      { red: 233, green: 169, blue: 152, name: "Liquitex: Light Portrait Pink" },
      { red: 45, green: 45, blue: 45, name: "Liquitex: Mars Black" },
      { red: 0, green: 58, blue: 130, name: "Liquitex: Manganese Blue Hue" },
      { red: 172, green: 64, blue: 113, name: "Liquitex: Medium Magenta" },
      { red: 185, green: 33, blue: 40, name: "Liquitex: Naphthol Crimson" },
      { red: 200, green: 46, blue: 30, name: "Liquitex: Naphthol Red Light" },
      { red: 95, green: 95, blue: 95, name: "Liquitex: Neutral Gray 5" },
      { red: 41, green: 39, blue: 37, name: "Liquitex: Payne's Gray" },
      { red: 137, green: 21, blue: 29, name: "Liquitex: Pyrrole Crimson" },
      { red: 130, green: 17, blue: 26, name: "Liquitex: Quinacridone Red Orange" },
      { red: 180, green: 36, blue: 37, name: "Liquitex: Quinacridone Red" },
      { red: 223, green: 169, blue: 73, name: "Liquitex: Naples Yellow Hue" },
      { red: 32, green: 26, blue: 64, name: "Liquitex: Phthalo Blue (Green Shade)" },
      { red: 29, green: 21, blue: 57, name: "Liquitex: Phthalo Blue (Red Shade)" },
      { red: 46, green: 43, blue: 47, name: "Liquitex: Prussian Blue Hue" },
      { red: 35, green: 45, blue: 45, name: "Liquitex: Phthalo Green (Blue Shade)" },
      { red: 17, green: 34, blue: 30, name: "Liquitex: Phthalo Green (Yellow Shade)" },
      { red: 53, green: 36, blue: 42, name: "Liquitex: Prism Violet" },
      { red: 217, green: 69, blue: 34, name: "Liquitex: Pyrrole Orange" },
      { red: 152, green: 16, blue: 14, name: "Liquitex: Pyrrole Red" },
      { red: 49, green: 29, blue: 31, name: "Liquitex: Quinacridone Blue Violet" },
      { red: 58, green: 30, blue: 27, name: "Liquitex: Quinacridone Burnt Orange" },
      { red: 107, green: 18, blue: 29, name: "Liquitex: Quinacridone Magenta" },
      { red: 95, green: 48, blue: 16, name: "Liquitex: Raw Sienna" },
      { red: 130, green: 44, blue: 22, name: "Liquitex: Red Oxide" },
      { red: 50, green: 55, blue: 44, name: "Liquitex: Sap Green Permanent" },
      { red: 255, green: 255, blue: 255, name: "Liquitex: Titanium White" },
      { red: 72, green: 30, blue: 20, name: "Liquitex: Transparent Burnt Sienna" },
      { red: 43, green: 38, blue: 31, name: "Liquitex: Transparent Burnt Umber" },
      { red: 173, green: 101, blue: 0, name: "Liquitex: Transparent Raw Sienna" },
      { red: 68, green: 64, blue: 56, name: "Liquitex: Transparent Raw Umber" },
      { red: 26, green: 42, blue: 45, name: "Liquitex: Transparent Viridian Hue" },
      { red: 205, green: 148, blue: 5, name: "Liquitex: Turner's Yellow" },
      { red: 28, green: 26, blue: 37, name: "Liquitex: Turquoise Deep" },
      { red: 177, green: 155, blue: 123, name: "Liquitex: Unbleached Titanium" },
      { red: 45, green: 41, blue: 73, name: "Liquitex: Ultramarine Blue (Green Shade)" },
      { red: 34, green: 31, blue: 61, name: "Liquitex: Ultramarine Blue (Red Shade)" },
      { red: 53, green: 32, blue: 23, name: "Liquitex: Van Dyke Red" },
      { red: 85, green: 151, blue: 22, name: "Liquitex: Vivid Lime Green" },
      { red: 49, green: 56, blue: 51, name: "Liquitex: Viridian Hue Permanent" },
      { red: 218, green: 163, blue: 1, name: "Liquitex: Yellow Medium Azo" },
      { red: 226, green: 135, blue: 0, name: "Liquitex: Yellow Orange Azo" },
      { red: 172, green: 120, blue: 30, name: "Liquitex: Yellow Oxide" },
      { red: 52, green: 25, blue: 24, name: "Golden: Alizarin Crimson Historic Hue" },
      { red: 37, green: 27, blue: 34, name: "Golden: Anthraquinone Blue" },
      { red: 198, green: 139, blue: 6, name: "Golden: Aureolin Historic Hue" },
      { red: 36, green: 43, blue: 58, name: "Golden: Azurite Historic Hue" },
      { red: 243, green: 216, blue: 2, name: "Golden: Bismuth Vanadate Yellow" },
      { red: 78, green: 38, blue: 30, name: "Golden: Burnt Sienna" },
      { red: 50, green: 37, blue: 31, name: "Golden: Burnt Umber" },
      { red: 61, green: 36, blue: 29, name: "Golden: Burnt Umber Light" },
      { red: 243, green: 107, blue: 4, name: "Golden: Cadmium Orange (CP)" },
      { red: 172, green: 22, blue: 28, name: "Golden: Cadmium Red Dark (CP)" },
      { red: 225, green: 51, blue: 25, name: "Golden: Cadmium Red Light (CP)" },
      { red: 159, green: 20, blue: 22, name: "Golden: Cadmium Red Medium (CP)" },
      { red: 165, green: 23, blue: 22, name: "Golden: Cadmium Red Medium Hue" },
      { red: 254, green: 201, blue: 73, name: "Golden: Cadmium Yellow Dark (CP)" },
      { red: 241, green: 215, blue: 0, name: "Golden: Cadmium Yellow Light (CP)" },
      { red: 237, green: 180, blue: 1, name: "Golden: Cadmium Yellow Medium (CP)" },
      { red: 237, green: 224, blue: 44, name: "Golden: Cadmium Yellow Primrose (CP)" },
      { red: 16, green: 62, blue: 122, name: "Golden: Cerulean Blue Chromium" },
      { red: 18, green: 59, blue: 89, name: "Golden: Cerulean Blue Deep" },
      { red: 64, green: 91, blue: 34, name: "Golden: Chromium Oxide Green" },
      { red: 43, green: 58, blue: 34, name: "Golden: Chromium Oxide Green Dark" },
      { red: 21, green: 41, blue: 134, name: "Golden: Cobalt Blue" },
      { red: 20, green: 44, blue: 139, name: "Golden: Cobalt Blue Hue" },
      { red: 35, green: 68, blue: 55, name: "Golden: Cobalt Green" },
      { red: 10, green: 92, blue: 103, name: "Golden: Cobalt Turquoise" },
      { red: 94, green: 50, blue: 61, name: "Golden: Cobalt Violet Historic Hue" },
      { red: 234, green: 146, blue: 0, name: "Golden: Diarylide Yellow" },
      { red: 37, green: 27, blue: 27, name: "Golden: Dioxazine Purple" },
      { red: 109, green: 102, blue: 96, name: "Golden: Graphite Gray" },
      { red: 61, green: 81, blue: 10, name: "Golden: Green Gold" },
      { red: 236, green: 204, blue: 1, name: "Golden: Hansa Yellow Light" },
      { red: 228, green: 170, blue: 1, name: "Golden: Hansa Yellow Medium" },
      { red: 233, green: 185, blue: 0, name: "Golden: Hansa Yellow Opaque" },
      { red: 43, green: 42, blue: 38, name: "Golden: Hooker's Green Historic Hue" },
      { red: 182, green: 90, blue: 11, name: "Golden: Indian Yellow Historic Hue" },
      { red: 46, green: 46, blue: 41, name: "Golden: Jenkins Green" },
      { red: 33, green: 155, blue: 46, name: "Golden: Light Green (Blue Shade)" },
      { red: 85, green: 167, blue: 41, name: "Golden: Light Green (Yellow Shade)" },
      { red: 208, green: 117, blue: 127, name: "Golden: Light Magenta" },
      { red: 0, green: 124, blue: 115, name: "Golden: Light Turquiose (Phthalo" },
      { red: 80, green: 118, blue: 197, name: "Golden: Light Ultamarine Blue" },
      { red: 85, green: 61, blue: 131, name: "Golden: Light Violet" },
      { red: 1, green: 47, blue: 107, name: "Golden: Manganese Blue Historic Hue" },
      { red: 143, green: 67, blue: 36, name: "Golden: Mars Yellow" },
      { red: 172, green: 49, blue: 104, name: "Golden: Medium Magenta" },
      { red: 91, green: 41, blue: 101, name: "Golden: Medium Violet" },
      { red: 168, green: 26, blue: 18, name: "Golden: Naphthol Red Light" },
      { red: 141, green: 16, blue: 18, name: "Golden: Naphthol Red Medium" },
      { red: 183, green: 144, blue: 69, name: "Golden: Naples Yellow Historic Hue" },
      { red: 47, green: 47, blue: 47, name: "Golden: Neutral Gray N2" },
      { red: 58, green: 58, blue: 58, name: "Golden: Neutral Gray N3" },
      { red: 80, green: 80, blue: 80, name: "Golden: Neutral Gray N4" },
      { red: 90, green: 90, blue: 90, name: "Golden: Neutral Gray N5" },
      { red: 118, green: 118, blue: 118, name: "Golden: Neutral Gray N6" },
      { red: 148, green: 148, blue: 148, name: "Golden: Neutral Gray N7" },
      { red: 199, green: 199, blue: 199, name: "Golden: Neutral Gray N8" },
      { red: 127, green: 83, blue: 5, name: "Golden: Nickel Azo Yellow" },
      { red: 24, green: 24, blue: 24, name: "Golden: Paynes Gray" },
      { red: 0, green: 95, blue: 44, name: "Golden: Permanent Green Light" },
      { red: 40, green: 24, blue: 25, name: "Golden: Permanent Maroon" },
      { red: 41, green: 25, blue: 31, name: "Golden: Permanent Violet Dark" },
      { red: 26, green: 19, blue: 51, name: "Golden: Phthalo Blue (Green Shade)" },
      { red: 21, green: 16, blue: 33, name: "Golden: Phthalo Blue (Red Shade)" },
      { red: 26, green: 36, blue: 38, name: "Golden: Phthalo Green (Blue Shade)" },
      { red: 29, green: 47, blue: 41, name: "Golden: Phthalo Green (Yellow Shade)" },
      { red: 11, green: 40, blue: 97, name: "Golden: Primary Cyan" },
      { red: 151, green: 25, blue: 23, name: "Golden: Primary Magenta" },
      { red: 233, green: 190, blue: 0, name: "Golden: Primary Yellow" },
      { red: 33, green: 29, blue: 34, name: "Golden: Prussian Blue Historic Hue" },
      { red: 212, green: 60, blue: 15, name: "Golden: Pyrrole Orange" },
      { red: 183, green: 19, blue: 23, name: "Golden: Pyrrole Red" },
      { red: 170, green: 18, blue: 29, name: "Golden: Pyrrole Red Dark" },
      { red: 194, green: 38, blue: 27, name: "Golden: Red Light" },
      { red: 52, green: 22, blue: 19, name: "Golden: Quinacridone Burnt Orange" },
      { red: 60, green: 19, blue: 21, name: "Golden: Quinacridone Crimson" },
      { red: 74, green: 17, blue: 23, name: "Golden: Quinacridone Magenta" },
      { red: 139, green: 19, blue: 23, name: "Golden: Quinacridone Red" },
      { red: 148, green: 32, blue: 27, name: "Golden: Quinacridone Red Light" },
      { red: 84, green: 16, blue: 20, name: "Golden: Quinacridone Violet" },
      { red: 86, green: 31, blue: 18, name: "Golden: Quinacridone Nickel Azo Gold" },
      { red: 127, green: 73, blue: 23, name: "Golden: Raw Sienna" },
      { red: 53, green: 47, blue: 40, name: "Golden: Raw Umber" },
      { red: 117, green: 39, blue: 24, name: "Golden: Red Oxide" },
      { red: 49, green: 53, blue: 47, name: "Golden: Sap Green Historic Hue" },
      { red: 38, green: 36, blue: 41, name: "Golden: Smalt Historic Hue" },
      { red: 8, green: 132, blue: 146, name: "Golden: Teal" },
      { red: 42, green: 47, blue: 35, name: "Golden: Terre Verte Historic Hue" },
      { red: 189, green: 173, blue: 148, name: "Golden: Titan Buff" },
      { red: 225, green: 213, blue: 105, name: "Golden: Titanate Yellow" },
      { red: 51, green: 36, blue: 31, name: "Golden: Transparent Brown Iron Oxide" },
      { red: 174, green: 39, blue: 31, name: "Golden: Transparent Pyrrole Orange" },
      { red: 63, green: 23, blue: 15, name: "Golden: Transparent Red Iron Oxide" },
      { red: 95, green: 51, blue: 15, name: "Golden: Transparent Yellow Iron Oxide" },
      { red: 37, green: 38, blue: 47, name: "Golden: Turquois (Phthalo)" },
      { red: 28, green: 24, blue: 64, name: "Golden: Ultramarine Blue" },
      { red: 36, green: 26, blue: 58, name: "Golden: Ultramarine Violet" },
      { red: 31, green: 26, blue: 22, name: "Golden: Van Dyke Brown Historic Hue" },
      { red: 209, green: 62, blue: 7, name: "Golden: Vat Orange" },
      { red: 72, green: 22, blue: 16, name: "Golden: Violet Oxide" },
      { red: 36, green: 58, blue: 51, name: "Golden: Viridian Green Hue" },
      { red: 136, green: 84, blue: 24, name: "Golden: Yellow Ochre" },
      { red: 179, green: 124, blue: 30, name: "Golden: Yellow Oxide" },
      { red: 205, green: 77, blue: 10, name: "Liquitex: Vivid Red Orange" },
      { red: 146, green: 24, blue: 29, name: "Liquitex: Quinacridone Crimson" },
      { red: 234, green: 180, blue: 0, name: "Golden: Cadmium Yellow Medium Hue" },
      { red: 9, green: 19, blue: 19, name: "Liquitex: Muted Green" },
      { red: 15, green: 16, blue: 18, name: "Liquitex: Muted Grey" },
      { red: 59, green: 14, blue: 9, name: "Liquitex: Muted Pink" },
      { red: 22, green: 18, blue: 24, name: "Liquitex: Muted Turquoise" },
      { red: 24, green: 5, blue: 7, name: "Liquitex: Muted Violet" },
      { red: 221, green: 185, blue: 1, name: "Golden: Benzimidazolone Yellow Light" },
      { red: 224, green: 167, blue: 0, name: "Golden: Benzimidazolone Yellow Medium" },
      { red: 18, green: 88, blue: 184, name: "Golden: Fluorescent Blue" },
      { red: 14, green: 157, blue: 15, name: "Golden: Fluorescent Green" },
      { red: 248, green: 56, blue: 9, name: "Golden: Fluorescent Orange" },
      { red: 235, green: 85, blue: 0, name: "Golden: Fluorescent Orange-Yellow" },
      { red: 248, green: 34, blue: 49, name: "Golden: Fluorescent Pink" },
      { red: 245, green: 32, blue: 26, name: "Golden: Fluorescent Red" },
      { red: 213, green: 209, blue: 136, name: "Golden: Light Bismuth Yellow" },
      { red: 228, green: 174, blue: 136, name: "Golden: Light Orange" },
      { red: 134, green: 188, blue: 224, name: "Golden: Light Phthalo Blue" },
      { red: 161, green: 215, blue: 207, name: "Golden: Light Phthalo Green" },
      { red: 232, green: 229, blue: 2, name: "Golden: Fluorescent Chartreuse" },
      { red: 176, green: 18, blue: 41, name: "Golden: Fluorescent Magenta" }
    ]
  });

  // src/pixelate/pixelate.ts
  var cmykModel = Object.freeze({
    cyan: 0,
    key: 0,
    magenta: 0,
    yellow: 0
  });
  var rgbModel = Object.freeze({
    blue: 0,
    green: 0,
    name: "",
    red: 0
  });
  async function pixelate_default(indexState, context) {
    let closestColors = {};
    let palette = [];
    const getClosestColorInThePalette = (referenceColor = rgbModel) => {
      const key = `${referenceColor.red},${referenceColor.green},${referenceColor.blue}`;
      if (closestColors[key])
        return closestColors[key];
      let closestColor = {
        blue: -1,
        green: -1,
        name: "",
        red: -1
      };
      let shortestDistance = Number.MAX_SAFE_INTEGER;
      palette.forEach((paletteColor) => {
        if (shortestDistance === 0)
          return;
        const distance = Math.abs(paletteColor.red - referenceColor.red) + Math.abs(paletteColor.green - referenceColor.green) + Math.abs(paletteColor.blue - referenceColor.blue);
        if (distance < shortestDistance) {
          shortestDistance = distance;
          closestColor = paletteColor;
          closestColors[key] = paletteColor;
        }
      });
      return closestColor;
    };
    const getPixelFromImageData = (imageData, x = -1, y = -1) => {
      const index = getPixelIndex(imageData, x, y);
      return {
        blue: [imageData.data[index + 2], index + 2],
        green: [imageData.data[index + 1], index + 1],
        red: [imageData.data[index], index],
        x,
        y
      };
    };
    const getPixelIndex = (imageData, x = -1, y = -1) => {
      return (imageData.width * y + x) * 4;
    };
    const getRgbFromImageData = (imageData, x = -1, y = -1) => {
      const pixelObject = getPixelFromImageData(imageData, x, y);
      const [red] = pixelObject.red;
      const [green] = pixelObject.green;
      const [blue] = pixelObject.blue;
      return {
        red,
        green,
        blue,
        name: ""
      };
    };
    const calculateAverageColor = (imageData) => {
      let redSum = 0;
      let redCounter = 0;
      let greenSum = 0;
      let greenCounter = 0;
      let blueSum = 0;
      let blueCounter = 0;
      for (let x = 0; x < imageData.width; x++) {
        for (let y = 0; y < imageData.height; y++) {
          const { red, green, blue } = getRgbFromImageData(imageData, x, y);
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
        blue: Math.round(blueSum / blueCounter)
      };
    };
    const loadPalettes = () => {
      const { colorOrGreyscale, palettes: chosenPalettes } = indexState;
      let { basePaints: paints } = palettes;
      if (colorOrGreyscale() === "greyscale")
        paints = paints.filter((paint) => [
          "Golden: Graphite Gray",
          "Golden: Neutral Gray N2",
          "Golden: Neutral Gray N3",
          "Golden: Neutral Gray N4",
          "Golden: Neutral Gray N5",
          "Golden: Neutral Gray N6",
          "Golden: Neutral Gray N7",
          "Golden: Neutral Gray N8",
          "Golden: Raw Umber",
          "Liquitex: Irisdescent Bright Silver",
          "Liquitex: Irisdescent Rich Silver",
          "Liquitex: Irisdescent White",
          "Liquitex: Ivory Black",
          "Liquitex: Muted Grey",
          "Liquitex: Neutral Gray 5",
          "Liquitex: Parchment",
          "Liquitex: Payne's Gray",
          "Liquitex: Raw Umber",
          "Liquitex: Titanium White"
        ].includes(paint.name));
      const white = {
        red: 255,
        green: 255,
        blue: 255,
        name: "generic white"
      };
      Object.entries(chosenPalettes()).forEach((entry) => {
        const [name, shouldLoad] = entry;
        if (!shouldLoad)
          return;
        switch (name) {
          case "quarterWhites":
            paints.forEach((paint) => {
              const mixed = mixRgbColorsSubtractively([paint, paint, paint, white]);
              mixed.name = `${paint.name} (1/4 White)`;
              palette.push(mixed);
            });
            break;
          case "thirdWhites":
            paints.forEach((paint) => {
              const mixed = mixRgbColorsSubtractively([paint, paint, white]);
              mixed.name = `${paint.name} (1/3 White)`;
              palette.push(mixed);
            });
            break;
          case "halfWhites":
            paints.forEach((paint) => {
              const mixed = mixRgbColorsSubtractively([paint, white]);
              mixed.name = `${paint.name} (1/2 White)`;
              palette.push(mixed);
            });
            break;
          case "twoThirdWhites":
            paints.forEach((paint) => {
              const mixed = mixRgbColorsSubtractively([paint, white, white]);
              mixed.name = `${paint.name} (2/3 White)`;
              palette.push(mixed);
            });
            break;
          case "threeQuarterWhites":
            paints.forEach((paint) => {
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
    const convertCmykToRgb = (cmykColor = cmykModel) => {
      let { cyan, magenta, yellow, key } = cmykColor;
      cyan /= 100;
      magenta /= 100;
      yellow /= 100;
      key /= 100;
      let red = cyan * (1 - key) + key;
      let green = magenta * (1 - key) + key;
      let blue = yellow * (1 - key) + key;
      red = Math.round((1 - red) * 255 + 0.5);
      green = Math.round((1 - green) * 255 + 0.5);
      blue = Math.round((1 - blue) * 255 + 0.5);
      return {
        red,
        green,
        blue
      };
    };
    const convertRgbToCmyk = (rgbColor = rgbModel) => {
      const { red, green, blue } = rgbColor;
      let cyan = 255 - red;
      let magenta = 255 - green;
      let yellow = 255 - blue;
      let key = Math.min(cyan, magenta, yellow);
      const divider = key === 255 ? 1 : 255 - key;
      cyan = Math.round((cyan - key) / divider * 100);
      magenta = Math.round((magenta - key) / divider * 100);
      yellow = Math.round((yellow - key) / divider * 100);
      key = Math.round(key / 255 * 100);
      return {
        cyan,
        magenta,
        yellow,
        key
      };
    };
    const mixRgbColorsSubtractively = (rgbColors = [rgbModel]) => {
      let cmykColors = rgbColors.map((rgbColor) => convertRgbToCmyk(rgbColor));
      let cyan = 0;
      let magenta = 0;
      let yellow = 0;
      let key = 0;
      cmykColors.forEach((cmykColor2) => {
        cyan += cmykColor2.cyan;
        magenta += cmykColor2.magenta;
        yellow += cmykColor2.yellow;
        key += cmykColor2.key;
      });
      const cmykColor = {
        cyan: Math.round(cyan / cmykColors.length),
        magenta: Math.round(magenta / cmykColors.length),
        yellow: Math.round(yellow / cmykColors.length),
        key: Math.round(key / cmykColors.length)
      };
      return convertCmykToRgb(cmykColor);
    };
    const pixelate = async (context2) => {
      const { height, width } = context2.canvas;
      const stats2 = {
        colorCounts: {},
        colors: [],
        map: []
      };
      const { algorithm: algorithmFn, blockSize: blockSizeFn, matchToPalette: matchToPaletteFn } = indexState;
      const blockSize = blockSizeFn();
      loadPalettes();
      for (let y = 0; y < height; y += blockSize) {
        const row = [];
        for (let x = 0; x < width; x += blockSize) {
          const remainingX = width - x;
          const remainingY = height - y;
          const blockX = remainingX > blockSize ? blockSize : remainingX;
          const blockY = remainingY > blockSize ? blockSize : remainingY;
          const referenceColor = calculateAverageColor(context2.getImageData(x, y, blockX, blockY));
          referenceColor.name = "";
          const closestColor = getClosestColorInThePalette(referenceColor);
          row.push(closestColor);
          if (stats2.colorCounts[closestColor.name] >= 0)
            stats2.colorCounts[closestColor.name]++;
          else {
            stats2.colorCounts[closestColor.name] = 1;
            stats2.colors.push(closestColor);
          }
          context2.fillStyle = `rgb(${closestColor.red}, ${closestColor.green}, ${closestColor.blue})`;
          context2.fillRect(x, y, blockX, blockY);
        }
        stats2.map.push(row);
      }
      return stats2;
    };
    const sortPalette = (stats2) => {
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
      const colorCounts = Object.entries(stats2.colorCounts).filter((colorCount) => {
        const [, count] = colorCount;
        return count >= minimumThreshold();
      });
      colorCounts.sort(sort);
      return maximumColors() ? colorCounts.slice(0, maximumColors()) : colorCounts;
    };
    const filterPalette = (stats2) => {
      const sortedColorCounts = sortPalette(stats2);
      const filteredPalette = [];
      sortedColorCounts.forEach((colorCount) => {
        const [colorName] = colorCount;
        const filteredColor = stats2.colors.find((color) => color.name === colorName);
        filteredPalette.push(filteredColor);
      });
      return filteredPalette;
    };
    const adjustColorDepth = async (stats2) => {
      const imageData = context.getImageData(0, 0, context.canvas.width, context.canvas.height);
      const adjustedStats = {
        colorCounts: {},
        colors: [],
        map: []
      };
      const { algorithm, blockSize } = indexState;
      palette = filterPalette(stats2);
      let noise = {};
      for (let y = 0; y < imageData.height; y += blockSize()) {
        const row = [];
        for (let x = 0; x < imageData.width; x += blockSize()) {
          const remainingX = imageData.width - x;
          const remainingY = imageData.height - y;
          const blockX = remainingX > blockSize() ? blockSize() : remainingX;
          const blockY = remainingY > blockSize() ? blockSize() : remainingY;
          let originalColor = getRgbFromImageData(imageData, x, y);
          const { red, green, blue } = originalColor;
          const referenceColor = {
            blue,
            green,
            red,
            name: ""
          };
          const color = getClosestColorInThePalette(referenceColor);
          row.push(color);
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
      console.log(`${algorithm()} color depth adjustment finished at ${window.performance.now()}`);
      return adjustedStats;
    };
    console.time("pixelate");
    console.log("pixelate()", {
      blockSize: indexState.blockSize(),
      matchToPalette: indexState.matchToPalette(),
      maximumColors: indexState.maximumColors(),
      minimumThreshold: indexState.minimumThreshold(),
      algorithm: indexState.algorithm(),
      colorOrGreyscale: indexState.colorOrGreyscale(),
      palettes: indexState.palettes(),
      dither: indexState.dither()
    });
    let stats = await pixelate(context);
    console.log(stats);
    stats = await adjustColorDepth(stats);
    console.log(stats);
    console.timeEnd("pixelate");
    return stats;
  }

  // src/utils.ts
  function cloneImageToCanvas(originalImage, modifiedCanvas) {
    console.time("cloneImageToCanvas");
    const { width, height } = originalImage;
    const originalCanvas = document.createElement("canvas");
    originalCanvas.width = modifiedCanvas.width = width;
    originalCanvas.height = modifiedCanvas.height = height;
    const originalContext = originalCanvas.getContext("2d");
    const modifiedContext = modifiedCanvas.getContext("2d");
    if (!originalContext || !modifiedContext) throw new Error("Could not create canvas context");
    modifiedContext.drawImage(originalImage, 0, 0);
    console.timeEnd("cloneImageToCanvas");
    return modifiedContext;
  }

  // src/html-image-element-pixelator.ts
  async function HTMLImageElementPixelator(sourceImage, { blockSize = 5, maximumColors = 10, minimumThreshold = 10 } = { blockSize: 5, maximumColors: 10, minimumThreshold: 10 }) {
    if (!sourceImage.complete) {
      await new Promise((resolve) => {
        sourceImage.onload = resolve;
      });
    }
    sourceImage.crossOrigin = "Anonymous";
    const targetCanvas = document.createElement("canvas");
    const targetContext = cloneImageToCanvas(sourceImage, targetCanvas);
    await pixelate_default({
      blockSize: () => blockSize,
      matchToPalette: () => true,
      maximumColors: () => maximumColors,
      minimumThreshold: () => minimumThreshold,
      algorithm: () => "RGB",
      colorOrGreyscale: () => "color",
      palettes: () => ({
        basePaints: false,
        quarterWhites: true,
        thirdWhites: false,
        halfWhites: false,
        twoThirdWhites: false,
        threeQuarterWhites: false
      }),
      dither: () => false
    }, targetContext);
    return targetContext;
  }
  async function HTMLImageElementReplacerPixelator(sourceImage, { blockSize = 5, maximumColors = 10, minimumThreshold = 10 } = { blockSize: 5, maximumColors: 10, minimumThreshold: 10 }) {
    let context = await HTMLImageElementPixelator(sourceImage, { blockSize, maximumColors, minimumThreshold });
    context.canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      sourceImage.src = url;
    }, "image/png");
  }
  Object.assign(window, { HTMLImageElementPixelator, HTMLImageElementReplacerPixelator });
})();
