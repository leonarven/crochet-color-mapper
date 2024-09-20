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
        error = new Error("imagethingToHtmlTables() imagething is not a canvas, image or context");;
        console.error( error, imagething );
        throw error;
    }

    width = ctx.canvas.width;
    height = ctx.canvas.height;
    imagedata = ctx.getImageData( 0, 0, width, height );
    pixels = imageDataToPixelArray( imagedata.data );
    matrice = [];

    for (let y = 0; y < height; y++) {
        let row = new Array( width ).fill( null );
        for (let x = 0; x < width; x++) {
            row[x] = { pixel: pixels[ x + y * width ] };
        }
        matrice.push(row);
    }

    colors=[];

    let sheight = 100;
    let swidth = 100;

    let colspan = 2;

    let html = '';

    for (let yy=0; yy < Math.ceil(height / sheight); yy++) {
        for (let xx=0; xx < Math.ceil(width / swidth); xx++) {

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
                        color = pixel.slice(0,3).join("-");
                        if (colors.indexOf(color) == -1) colors.push(color);
                        attrs += ` color="${ color }"`;
                    }

                    tr += `<td${attrs}></td>`;
                }

                table += `<tr>${tr}</tr>`;
            }

            html += `<tbody>${table}</tbody>`;
        }
    }


    target_tbl = document.getElementById("target_tbl") || document.createElement("table");
    target_tbl.id="target_tbl";
    document.body.appendChild(target_tbl);
    target_tbl.innerHTML = html;


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

    target_tbl_styles = document.getElementById("target_tbl_styles") || document.createElement("style");
    target_tbl_styles.id="target_tbl_styles";
    document.body.appendChild(target_tbl_styles);
    target_tbl_styles.innerHTML = `
    table {
        border-spacing: 0px;
    }
    tbody {
        page-break-before: always;
        border-spacing: 0px;
    }
    td {
        padding-left: ${ pixelAsCellSize };
        padding-top:  ${ pixelAsCellSize };
        border: 1px solid transparent;

        padding-right: 0cm;
        padding-bottom: 0cm;
        /*width: 0.5cm;
        height: 0.5cm;*/

        position: relative;
    }
    /*td.dt { border-top-color:    rgba(0,0,0,0.5) !important; }*/
    td.db { border-bottom-color: rgba(0,0,0,0.5) !important; }
    /*td.dl { border-left-color:   rgba(0,0,0,0.5) !important; }*/
    td.dr { border-right-color:  rgba(0,0,0,0.5) !important; }
    td.dt::before, td.db::before, td.dl::before, td.dr::before {
        content: "";
        position: absolute;
        top:    calc( ${ pixelAsCm / 8 }cm - 1px );
        bottom: -1px;
        left:   -1px;
        right:  -1px;
        text-align: center;
        color: rgba(0,0,0,0.5);
        font-size: ${ pixelAsCm / 2 }cm;
    }
    ` + colors.map( clr => {

        return `td[color="${ clr }"] { background-color: rgb(${clr.replace(/\-/g,",")}); }`;
        
    }).join("\n");

    target_tbl_styles2 = document.getElementById("target_tbl_styles2") || document.createElement("style");
    target_tbl_styles2.id="target_tbl_styles2";
    document.body.appendChild(target_tbl_styles2);
    let chars = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ".split("");
    target_tbl_styles2.innerHTML = colors.map((clr, idx) => {
        let rgb = `rgb(${clr.replace(/\-/g, ",")})`;
    
        let css = `
        td[color="${clr}"] {
            border-color: ${rgb};
        }
            td.dt[color="${clr}"]::before, td.db[color="${clr}"]::before, td.dl[color="${clr}"]::before, td.dr[color="${clr}"]::before {
                content: "${ chars[idx] }";
           }
        `;
        
        return css;
    }).join("\n")

    return matrice;
})(document.querySelector("canvas"));