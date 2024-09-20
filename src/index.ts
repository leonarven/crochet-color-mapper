import pixelate from "./pixelate/pixelate";
import { cloneImageToCanvas, imageDataToPixelArray, pixelArrayToImageData } from "./utils";
import { imagethingToSVG } from "./canvasToSvg";

window.imageDataToPixelArray  = imageDataToPixelArray;
window.cloneImageToCanvas     = cloneImageToCanvas;
window.imagethingToSVG = imagethingToSVG;

setTimeout( async ( run ) => {
    console.debug("init()");

    const rows = [ ...document.querySelectorAll( ".row" ) ];

    for (let row of rows) {

        const originalImage = row.querySelector( ".source" ) as HTMLImageElement;
        const targetCanvas  = row.querySelector( ".target" ) as HTMLCanvasElement;

        if (!originalImage.complete) {
            await (new Promise( ( resolve ) => {
                originalImage.onload = resolve;
            }));
        }

        if (!originalImage.complete) throw new Error("originalImage.complete");

        await run( originalImage, targetCanvas );
    }

}, 120, async function run( sourceImage: HTMLImageElement, targetCanvas: HTMLCanvasElement) {

    const modifiedContext = cloneImageToCanvas( sourceImage, targetCanvas );

    /**
     * one-dimensional array containing the data in the RGBA order, [0,255]
     * The order goes by rows from the top-left pixel to the bottom-right.
     */
    /*
    const data = modifiedContext.getImageData( 0, 0, modifiedContext.canvas.width, modifiedContext.canvas.height ).data;

    const pixels = imageDataToPixelArray( data );

    { // Datan eheyden tarkastus
        const ndata = pixelArrayToImageData( pixels );
        if (data.length !== ndata.length) throw new Error("data.length !== ndata.length");
        for (let i = 0; i < data.length; i++) if (data[i] !== ndata[i]) throw new Error("data[i] !== ndata[i]");  
    }
    */

    let blockSize        = parseInt(sourceImage.attributes.getNamedItem( "data-block-size" )?.value) || 3;
    let maximumColors    = parseInt(sourceImage.attributes.getNamedItem( "data-maximum-colors" )?.value) || 10;
    let minimumThreshold = parseInt(sourceImage.attributes.getNamedItem( "data-minimum-threshold" )?.value) || 10;

    await pixelate({
        blockSize:        () => blockSize,
        matchToPalette:   () => true,
        maximumColors:    () => maximumColors,
        minimumThreshold: () => minimumThreshold,
        algorithm:        () => 'RGB',
        colorOrGreyscale: () => 'color',
        palettes: () => ({
            basePaints:         true,
            quarterWhites:      true,
            thirdWhites:        !true,
            halfWhites:         !true,
            twoThirdWhites:     !true,
            threeQuarterWhites: !true,
        }),
	    dither: () => false
    }, modifiedContext );


    /* console.log(`

        Käsiala:          1.5 solmua per. 1cm = (1.5 * 2.54 in) = 3.81 solmu-per-inch
        Tulostustarkkuus: 300PPI

        Dots-per-solmu:   300PPI / 3.81 solmu-per-inch = 78,74 px-per-solmu

        185cm
        185cm * 1.5(solmua-per-cm)          == 277.5(solmua)
        277.5(solmua) * 78.74(px-per-solmu) == 21850.35px

    `); */
});