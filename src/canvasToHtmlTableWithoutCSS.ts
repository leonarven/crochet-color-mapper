//import { cloneImageToCanvas } from "./utils";

(function imagethingToHtmlTables( imagething ) {

    let ctx, canvas;

    if (imagething.tagName == "CANVAS")  {
        canvas = imagething;
        ctx = imagething.getContext("2d");
    } else if (imagething.tagName == "IMG") {
        canvas = document.createElement("canvas");
        ctx = cloneImageToCanvas( imagething, canvas );
    } else if (imagething.constructor.name == "CanvasRenderingContext2D") {
        canvas = imagething.canvas;
        ctx = imagething;
    } else {
        let error = new Error("imagethingToHtmlTables() imagething is not a canvas, image or context");;
        console.error( error, imagething );
        throw error;
    }

    /** 310 */
    const width = ctx.canvas.width; // 310
    /** 958 */
    const height = ctx.canvas.height; // 958
    let imagedata = ctx.getImageData( 0, 0, width, height );
    let pixels = imageDataToPixelArray( imagedata.data );
    let matrice = [];

    for (let y = 0; y < height; y++) {
        let row = new Array( width ).fill( null );
        for (let x = 0; x < width; x++) {
            row[x] = { pixel: pixels[ x + y * width ] };
        }
        matrice.push(row);
    }

    let colors = [];

    let chars = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ@#$%".split("");


    const sheight = 100; //958;
    const swidth  = 310;

    let colspan = 2;

    let html = '';

    for (let yy=0; yy < Math.round(height / sheight); yy++) {
        for (let xx=0; xx < Math.round(width / swidth); xx++) {

            let table = ''

            for (let y = 0; y < sheight; y++) {

                let yyy = sheight * yy + y;
                if (yyy % colspan != 0) continue;

                let tr = '';

                for (let x = 0; x < swidth; x++) {

                    let xxx = swidth * xx + x;
                    if (xxx % colspan != 0) continue;


                    let attrs = ``;

                    let pixel = matrice?.[yyy]?.[xxx]?.pixel || [255,255,255];

                    if (pixel[0] == 255 && pixel[1] == 255 && pixel[2] == 255) {
                    } else {
                        let color = pixel.slice(0,3).join("-");
                        if (colors.indexOf(color) == -1) colors.push(color);
                        attrs += ` color="${ color }"`;
                    }

                    tr += `<td${attrs}></td>`;
                }

                table += `<tr>${tr}</tr>`;
            }

            html += `<tbody>${table}</tbody>`;
        }
        break;
    }


    let target_tbl = document.getElementById("target_tbl") || document.createElement("div");
    target_tbl.id = "target_tbl";
    document.body.appendChild(target_tbl);

    let cellWidthPx, cellHeightPx = cellWidthPx = 15.243;

    let totalWidthPx = Math.ceil(swidth / 2 * cellWidthPx);
    let totalHeightPx = Math.ceil(sheight / 2 * cellHeightPx);

    target_tbl.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${ totalWidthPx }" height="${ totalHeightPx }">
        <foreignObject width="${ totalWidthPx }" height="${ totalHeightPx }">
        <body xmlns="http://www.w3.org/1999/xhtml">
        <table width="100%" style="border-spacing: 0px; border: none;" cellpadding="0" cellspacing="0">
        ${html}
        </table>
        </body>
        </foreignObject>
        </svg>
    `;

    {
        target_tbl.querySelectorAll("td[color]").forEach( td => {

            let tr  = td.parentNode;
            let tbl = tr.parentNode;
            let x = [...tr.children].indexOf(td);
            let y = [...tbl.children].indexOf(tr);

            let td_top    = tbl.children[y-1]?.children?.[x];
            let td_bottom = tbl.children[y+1]?.children?.[x];
            let td_left   = tr.children?.[x-1];
            let td_right  = tr.children?.[x+1];

            let color = td.getAttribute("color") || 'none';

            let color_top    = td_top?.getAttribute("color")    || 'none';
            let color_bottom = td_bottom?.getAttribute("color") || 'none';
            let color_left   = td_left?.getAttribute("color")   || 'none';
            let color_right  = td_right?.getAttribute("color")  || 'none';

            if (color != color_top) td.classList.add("dt");
            if (color != color_bottom) td.classList.add("db");
            if (color != color_left) td.classList.add("dl");
            if (color != color_right) td.classList.add("dr");
        });
    }

    /** Koko kuva on 967px eli 967silmukkaa eli 190cm korkea.
     * 190 / 967 = 0.196483971 cm / px */
    const pixelAsCm = 0.201654602 * colspan;
    const pixelAsCellSize = `calc( ${pixelAsCm}cm - 2px )`;

    target_tbl.querySelectorAll("td").forEach( td => {
        td.style.paddingLeft = `${ pixelAsCellSize }`;
        td.style.paddingTop  = `${ pixelAsCellSize }`;

        td.style.borderWidth = "1px";
        td.style.borderStyle = "solid";
        td.style.borderColor = "transparent";

        td.style.position = "relative";
    });

    colors.forEach(( clr, idx ) => {
        let rgb = `rgb(${clr.replace(/\-/g, ",")})`;
        let char = chars[idx];

        target_tbl.querySelectorAll(`td[color="${clr}"]`).forEach( td => {
            td.style.backgroundColor = rgb;
            td.style.borderColor = rgb;
        });

        target_tbl.querySelectorAll(`td.dt[color="${clr}"], td.db[color="${clr}"], td.dl[color="${clr}"], td.dr[color="${clr}"]`).forEach( td => {
            td.innerHTML = `<b style="position:absolute;bottom:-1px;left:-1px;right:-1px;text-align:center;color:rgba(0,0,0,0.5);top:${ pixelAsCm / 8 }cm;font-size:${ pixelAsCm / 2 }cm;">${char}</b>`;
        });
    })

    target_tbl.querySelectorAll("td.db").forEach( td => {
        td.style.borderBottomColor = "rgba(0,0,0,0.5)";
    });

    target_tbl.querySelectorAll("td.dr").forEach( td => {
        td.style.borderRightColor = "rgba(0,0,0,0.5)";
    });
    
    console.log("colors", colors);

    return matrice;
})(document.querySelector("canvas"));