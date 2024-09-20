//import { cloneImageToCanvas } from "./utils";

export function imagethingToSVG( imagething ) {

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
        let error = new Error("imagethingToSVG() imagething is not a canvas, image or context");;
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


    const sheight = width; // 1637; //958;
    const swidth  = height; // 10;//282;

    let cellWidthPx, cellHeightPx = cellWidthPx = 10; //15.243;

    let totalWidthPx = Math.ceil(swidth / 2 * cellWidthPx);
    let totalHeightPx = Math.ceil(sheight / 2 * cellHeightPx);

    let colspan = 2;

    let svg = '';
    let post_svg = '';
    let lines_svg = '';
    let texts_svg = '';

    for (let yy=0; yy < Math.round(height / sheight); yy++) {
        for (let xx=0; xx < Math.round(width / swidth); xx++) {

            let table = ''

            for (let y = 0; y < sheight; y++) {

                let yyy = sheight * yy + y;
                if (yyy % colspan != 0) continue;

                let tr = '';
                let s_lines_svg  = '';
                let s_texts_svg  = '';

                for (let x = 0; x < swidth; x++) {

                    let xxx = swidth * xx + x;
                    if (xxx % colspan != 0) continue;


                    let attrs = ` width="${ cellWidthPx  }" height="${ cellHeightPx }" x="${ xxx / 2 * cellWidthPx }" y="${ yyy / 2 * cellHeightPx }"`;

                    let pixel = matrice?.[yyy]?.[xxx]?.pixel || [255,255,255];

                    if (pixel[0] == 255 && pixel[1] == 255 && pixel[2] == 255) {
                        attrs += ` fill="none"`;
                    } else {
                        let color = pixel.slice(0,3).join("-");
                        if (colors.indexOf(color) == -1) colors.push(color);
                        let rgb = `rgb(${ pixel.slice(0,3).join(",") })`;
                        attrs += ` data-color="${ color }" fill="${ rgb }"`;
                    }

                    tr += `<rect${attrs} />`;

                    s_texts_svg += `<text style="font-size:50%" fill="none" x="${ xxx / 2 * cellWidthPx }" y="${ yyy / 2 * cellHeightPx }"></text>`; 
                    // left
                    //post_svg += `<line x1="${ xxx / 2 * cellWidthPx }" y1="${ yyy / 2 * totalHeightPx }" x2="${ xxx / 2 * cellWidthPx }" y2="${ (yyy+1) / 2 * totalHeightPx }" stroke="rgba(0,0,0,0.5)" stroke-width="1" />`;
                    // top
                    //post_svg += `<line x1="${ xxx / 2 * cellWidthPx }" y1="${ yyy / 2 * totalHeightPx }" x2="${ (xxx+1) / 2 * cellWidthPx }" y2="${ yyy / 2 * totalHeightPx }" stroke="rgba(0,0,0,0.5)" stroke-width="1" />`;
                    // bottom
                    s_lines_svg += `<line class="b" x1="${ xxx / 2 * cellWidthPx }" y1="${ (yyy+2) / 2 * cellHeightPx }" x2="${ (xxx+2) / 2 * cellWidthPx }" y2="${ (yyy+2) / 2 * cellHeightPx }" stroke="rgba(0,0,0,0.5)" stroke-width="0" />`;
                    // right
                    s_lines_svg += `<line class="r" x1="${ (xxx+2) / 2 * cellWidthPx }" y1="${ yyy / 2 * cellHeightPx }" x2="${ (xxx+2) / 2 * cellWidthPx }" y2="${ (yyy+2) / 2 * cellHeightPx }" stroke="rgba(0,0,0,0.5)" stroke-width="0" />`;
                    
                    //tr += `<td${attrs}></td>`;
                }

                lines_svg += `<g>${s_lines_svg}</g>`
                texts_svg += `<g>${s_texts_svg}</g>`

                table += `<g>${tr}</g>`;
                //table += `<tr>${tr}</tr>`;
            }

            svg += table;
            //html += `<tbody>${table}</tbody>`;
        }
        break;
    }

    svg  = `<g class="rects">${svg}</g>`;
    svg += `<g class="lines">${lines_svg}</g>`;
    svg += `<g class="texts">${texts_svg}</g>`;


    let target_tbl = document.getElementById("target_tbl") || document.createElement("div");
    target_tbl.id = "target_tbl";
    document.body.appendChild(target_tbl);

    let rect_container = document.querySelector("g.rects");
    let text_container = document.querySelector("g.texts");
    let line_container = document.querySelector("g.lines");

    target_tbl.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${ totalWidthPx }" height="${ totalHeightPx }">
        ${svg}
        </svg>
    `;


    /* target_tbl.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${ totalWidthPx }" height="${ totalHeightPx }">
        <foreignObject width="${ totalWidthPx }" height="${ totalHeightPx }">
        <body xmlns="http://www.w3.org/1999/xhtml">
        <table width="100%" style="border-spacing: 0px; border: none;" cellpadding="0" cellspacing="0">
        ${html}
        </table>
        </body>
        </foreignObject>
        </svg>
    `; */

    {
        let rects = target_tbl.querySelectorAll("rect[data-color]");
        let rects_length = rects.length;
        rects.forEach(( rect, rect_idx ) => {

            rects_length;
            rect_idx;

            if (rect_idx % 1000 == 0) console.log("Progress:", rect_idx, "/", rects_length, (rect_idx / rects_length * 100).toFixed(2) + "%");
            //

            let tr  = rect.parentNode;
            let tbl = tr.parentNode;
            let x = [...tr.children].indexOf(rect);
            let y = [...tbl.children].indexOf(tr);

            let td_top    = tbl.children[y-1]?.children?.[x];
            let td_bottom = tbl.children[y+1]?.children?.[x];
            let td_left   = tr.children?.[x-1];
            let td_right  = tr.children?.[x+1];

            let color = rect.getAttribute("data-color") || 'none';

            let color_top    = td_top?.getAttribute("data-color")    || 'none';
            let color_bottom = td_bottom?.getAttribute("data-color") || 'none';
            let color_left   = td_left?.getAttribute("data-color")   || 'none';
            let color_right  = td_right?.getAttribute("data-color")  || 'none';

            let hb = false;

            if (color != color_top) {
                hb = true;
                rect.classList.add("dt");
            }
            if (color != color_bottom) try{
                hb = true;
                rect.classList.add("db");
                let x = td_bottom.getAttribute("x");
                let y = td_bottom.getAttribute("y");
                let line = document.querySelector(`line.b[x1="${x}"][y1="${y}"]`);
                if (line) line.setAttribute( "stroke-width", "1" );
            } catch (error) {
                console.error(error);
            }
            if (color != color_left) {
                hb = true;
                rect.classList.add("dl");
            }
            if (color != color_right) try {
                hb = true;
                rect.classList.add("dr");
                let x = td_right.getAttribute("x");
                let y = td_right.getAttribute("y");
                let line = document.querySelector(`line.r[x1="${x}"][y1="${y}"]`);
                if (line) line.setAttribute( "stroke-width", "1" );
            } catch (error) {
                console.error(error);
            }

            if (hb) try {
                let x = rect.getAttribute("x");
                let y = rect.getAttribute("y");
                let text = document.querySelector(`text[x="${ x }"][y="${ y }"]`);
                let idx = colors.indexOf(color);
                let char = chars[idx];
                if (text) {
                    text.setAttribute("x", parseInt(x)+3);
                    text.setAttribute("y", parseInt(y)+8);
                    text.setAttribute("fill", 'rgba(0,0,0,0.5)');
                    text.innerHTML = char || '?';
                }
            } catch (error) {
                console.error(error);
            }
        });
    }

    /** Koko kuva on 967px eli 967silmukkaa eli 190cm korkea.
     * 190 / 967 = 0.196483971 cm / px */
    const pixelAsCm = 0.201654602 * colspan;
    const pixelAsCellSize = `calc( ${pixelAsCm}cm - 2px )`;

    /* target_tbl.querySelectorAll("td").forEach( rect => {
        rect.style.paddingLeft = `${ pixelAsCellSize }`;
        rect.style.paddingTop  = `${ pixelAsCellSize }`;

        rect.style.borderWidth = "1px";
        rect.style.borderStyle = "solid";
        rect.style.borderColor = "transparent";

        rect.style.position = "relative";
    }); */

    colors.forEach(( clr, idx ) => {
        let rgb = `rgb(${clr.replace(/\-/g, ",")})`;
        let char = chars[idx];

        /* target_tbl.querySelectorAll(`rect[data-color="${clr}"]`).forEach( rect => {
            rect.style.borderColor = rgb;
        }); */

        /* target_tbl.querySelectorAll(`rect.dt[data-color="${clr}"], rect.db[data-color="${clr}"], rect.dl[data-color="${clr}"], rect.dr[data-color="${clr}"]`).forEach( rect => {
            rect.innerHTML = `<b style="position:absolute;bottom:-1px;left:-1px;right:-1px;text-align:center;color:rgba(0,0,0,0.5);top:${ pixelAsCm / 8 }cm;font-size:${ pixelAsCm / 2 }cm;">${char}</b>`;
        }); */
    })

    /* target_tbl.querySelectorAll("rect.db").forEach( rect => {
        rect.style.borderBottomColor = "rgba(0,0,0,0.5)";
    }); */

    /* target_tbl.querySelectorAll("rect.dr").forEach( rect => {
        rect.style.borderRightColor = "rgba(0,0,0,0.5)";
    }); */


    document.querySelectorAll(`line[stroke-width="0"]`).forEach(e=>e.remove())
    document.querySelectorAll(`text[fill="none"]`).forEach(e=>e.remove())

    
    console.log("colors", colors);

    return matrice;
}

//imagethingToHtmlTables( document.querySelector("canvas") );
//document.querySelectorAll("#container, script, style, head").forEach(e=>e.remove())