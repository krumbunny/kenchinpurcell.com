import { execSync } from "child_process";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);

  eleventyConfig.addPassthroughCopy({ "src/static": "." });
  // eleventyConfig.addPassthroughCopy("src/**/*.{jpg,png,gif,svg,webp}");

  eleventyConfig.addWatchTarget("src/static/site.css");

  return {
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "md", "njk"],
    dir: {
      input: "src",
      output: "_site",
      layouts: "_layouts",
      includes: "_includes",
    },
  };
}
