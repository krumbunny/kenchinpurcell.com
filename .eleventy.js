import { execSync } from "child_process";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);

  eleventyConfig.addPassthroughCopy({ "src/static": "." });
  // eleventyConfig.addPassthroughCopy("src/**/*.{jpg,png,gif,svg,webp}");

  eleventyConfig.addWatchTarget("src/static/site.css");

  // create a new collection called trips by iterating over collections.all and filtering by data.tags for travel
  eleventyConfig.addCollection("trips", (collection) => {
    // create a list on unique trips with the data triptag, triptitle, and tripdate
    const trips = new Map();
    collection.getFilteredByTag("travel").forEach((item) => {
      if ("triptag" in item.data) {
        trips.set(item.data.triptag, {
          tag: item.data.triptag,
          title: item.data.triptitle,
          date: item.data.tripdate,
        });
      }
    });

    return trips.values();
  });

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
