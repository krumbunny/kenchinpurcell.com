import { execSync } from "child_process";

export default function (eleventyConfig) {
  // eleventyConfig.addPassthroughCopy({ "src/static": "." });

  return {
    templateFormats: ["html", "md", "njk"],
    dir: {
      input: "src",
      output: "_site",
    },
  };
}
