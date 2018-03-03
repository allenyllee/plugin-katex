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
        math: { // Double dollar signs ($) for math blocks (centered)
            shortcuts: {
              parsers: ['markdown', 'asciidoc', 'restructuredtext'],
              start: '$$',
              end: '$$'
            },
            process: function(blk) {
              var output = ''
              try {
                output = katex.renderToString(blk.body, {
                  displayMode: true
                })
              } catch (e) {
                console.error(e)
                output = e
              }
              return output
            }
        },
        math_inline: { // Single dollar sign for inline math
            shortcuts: {
              parsers: ['markdown', 'asciidoc', 'restructuredtext'],
              start: '$',
              end: '$'
            },
            process: function(blk) {
              var output = ''
              try {
                output = katex.renderToString(blk.body, {
                  displayMode: false
                })
              } catch (e) {
                console.error(e)
                output = e
              }
              return output
            }
        }
    }
};
