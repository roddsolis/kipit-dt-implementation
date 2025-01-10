import { register } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

// will register them on StyleDictionary object
// that is installed as a dependency of this package.
register(StyleDictionary);

const sd = new StyleDictionary({
  source: ["src/tokens/**/*.json"],

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
        },
      ],
    },
  },
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
