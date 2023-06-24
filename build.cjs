import { build } from "esbuild";
import dotenv from "dotenv";
dotenv.config();

const options = {
    entryPoints: ["./src/index.ts"],
    outfile: "./www/out.js",
    bundle: true,
    minify: false,
    watch: true,
    sourcemap: true,
};

build(options).catch(() => process.exit(1));
