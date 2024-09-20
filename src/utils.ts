
export function cloneImageToCanvas( originalImage: HTMLImageElement, modifiedCanvas: HTMLCanvasElement ): CanvasRenderingContext2D {

    console.time("cloneImageToCanvas");

    const { width, height } = originalImage;

    const originalCanvas = document.createElement("canvas");

    originalCanvas.width  = modifiedCanvas.width  = width;
    originalCanvas.height = modifiedCanvas.height = height;

    const originalContext = originalCanvas.getContext("2d");
    const modifiedContext = modifiedCanvas.getContext("2d");

    if (!originalContext || !modifiedContext) throw new Error("Could not create canvas context");

    modifiedContext.drawImage( originalImage, 0, 0 );

    console.timeEnd("cloneImageToCanvas");

    return modifiedContext
}

export function imageDataToPixelArray( data: ImageData["data"] ): [number,number,number,number][] {
    return data.reduce(( acc, value, index ) => {
        
        let pixel_idx = Math.floor( index / 4 );
        let channel_idx = index % 4;
        
        acc[ pixel_idx ] = acc[ pixel_idx ] || [] as unknown as  [number,number,number,number];
        acc[ pixel_idx ][ channel_idx ] = value;

        data;
        return acc;

    }, new Array( data.length / 4 ) as [number,number,number,number][] );
}  

export function pixelArrayToImageData( pixels: [number,number,number,number][] ): ImageData["data"] {
    
    return pixels.reduce(( acc, value, pixel_idx ) => {

        for (let channel_idx = 0; channel_idx < 4; channel_idx++) {
            acc[ pixel_idx * 4 + channel_idx ] = value[ channel_idx ];
        }

        pixels;
        return acc;

    }, new Uint8ClampedArray( pixels.length * 4 ).fill( 0 ) as ImageData["data"] );
}