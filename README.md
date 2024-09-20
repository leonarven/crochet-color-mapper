# Image -> Pixelation -> Crochet-Color-Map as svg


# Building

Install dependecies (esbuild) and compile the .ts
```
npm install
npm run build
```

# Running
0. Generate target image
1. Copy it to ./images/default/1.png
2. Serve ./ e.g. via `npm run serve`  (Using as file:///.../build/index.html not acceptable due to canvas handling)
3. Open `http://localhost:3009/build/index.html`
4. Profit!

```
npm run serve
```
