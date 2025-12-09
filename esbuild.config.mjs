import * as esbuild from "esbuild";
import { copyFileSync } from "fs";

const buildOptions = {
  entryPoints: [
    "src/main.ts",
    "src/calender.ts",
    "src/post.ts",
    "src/json.ts",
  ],
  bundle: false,
  platform: "neutral",
  target: "es2016",
  outdir: "dist",
  format: "esm",
  outExtension: { ".js": ".js" },
  logLevel: "info",
};

async function build() {
  try {
    await esbuild.build(buildOptions);
    // Copy appsscript.json to dist
    copyFileSync("src/appsscript.json", "dist/appsscript.json");
    console.log("Build completed successfully!");
  } catch (error) {
    console.error("Build failed:", error);
    process.exit(1);
  }
}

build();
