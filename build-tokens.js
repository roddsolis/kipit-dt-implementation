import { register } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

// will register them on StyleDictionary object
// that is installed as a dependency of this package.
register(StyleDictionary);

const sd = new StyleDictionary({
  source: ["src/tokens/global.json", "src/tokens/Semantic.json"],
  log: {
    verbosity: "default",
  },
  preprocessors: ["tokens-studio"],
  platforms: {
    css: {
      buildPath: "src/styles/css/",
      transformGroup: "tokens-studio",
      transforms: ["shadow/css/shorthand", "name/kebab"],
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
          filter: (token) => token.filePath.includes("Semantic.json"), // Filtrar tokens de Semantic.json
        },
      ],
    },
    scss: {
      buildPath: "src/styles/scss/",
      transformGroup: "tokens-studio",
      transforms: ["shadow/css/shorthand", "name/kebab"],
      files: [
        {
          destination: "variables.scss",
          format: "scss/variables",
          filter: (token) => token.filePath.includes("Semantic.json"), // Filtrar tokens de Semantic.json
        },
      ],
    },
  },
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
