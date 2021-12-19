const markdownIt = require("markdown-it");
const markdownItFootnote = require("markdown-it-footnote");

module.exports = function (eleventyConfig) {
  // Markdown footnotes support.
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  }).use(markdownItFootnote);
  eleventyConfig.setLibrary("md", markdownLibrary);

  // Image support.
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.setTemplateFormats(["md", "png", "jpg"]);
};
