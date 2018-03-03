var katex = require("katex");

module.exports = {
    book: {
        assets: "./static",
        //js: ['katex.min.js', 'auto-render.min.js', 'plugin.js'],
        css: [
            "katex.min.css"
        ]
    },
    ebook: {
        assets: "./static",
        //js: ['katex.min.js', 'auto-render.min.js', 'plugin.js'],
        css: [
            "katex.min.css"
        ]
    },
    blocks: {
        math: {
            shortcuts: {
                parsers: ["markdown", "asciidoc", "restructuredtext"],
                start: "$",
                end: "$"
            },
            process: function(blk) {
                var tex = blk.body;
                var isInline = !(tex[0] === "$" && tex[tex.length-1] === "$");
                try {
                    var output = katex.renderToString(tex, {
                        displayMode: !isInline
                    });
                } catch (e) {
                    console.error(e)
                    output = e
                }
                return output;
            }
        }
    }
//    blocks: {
//        math: { // Double dollar signs ($) for math blocks (centered)
//            shortcuts: {
//              parsers: ['markdown', 'asciidoc', 'restructuredtext'],
//              start: '$$',
//              end: '$$'
//            },
//            process: function(blk) {
//              var output = ''
//              try {
//                output = katex.renderToString(blk.body, {
//                  displayMode: true
//                })
//              } catch (e) {
//                console.error(e)
//                output = e
//              }
//              return output
//            }
//        },
//        math_inline: { // Single dollar sign for inline math
//            shortcuts: {
//              parsers: ['markdown', 'asciidoc', 'restructuredtext'],
//              start: '$',
//              end: '$'
//            },
//            process: function(blk) {
//              var output = ''
//              try {
//                output = katex.renderToString(blk.body, {
//                  displayMode: false
//                })
//              } catch (e) {
//                console.error(e)
//                output = e
//              }
//              return output
//            }
//        }
//    }
};
