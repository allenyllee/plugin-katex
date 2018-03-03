var katex = require("katex");

module.exports = {
    book: {
        assets: "./static",
        js: [],
        css: [
            "katex.min.css"
        ]
    },
    ebook: {
        assets: "./static",
        css: [
            "katex.min.css"
        ]
    },
    blocks: {
        math: {
            shortcuts: {
                parsers: ["markdown", "asciidoc", "restructuredtext"],
                start: "$$",
                end: "$$"
            },
            process: function(blk) {
                var tex = blk.body.replace(/\\([^a-zA-Z0-9])/g, "$1");
                var isInline = false;
                var output = katex.renderToString(tex, {
                    displayMode: !isInline
                });

                return output;
            }
        },
        inline_math: {
            shortcuts: {
              parsers: ["markdown", "asciidoc", "restructuredtext"],
              start: "$",
              end: "$"
            },
            process: function(blk) {
              //console.log(blk);
              var tex = blk.body.replace(/\\([^a-zA-Z0-9])/g, "$1");
              //console.log(tex);
              var isInline = true;
              var output = katex.renderToString(tex, {
                displayMode: !isInline
              });
              return output;
            }
        }
    }
};
