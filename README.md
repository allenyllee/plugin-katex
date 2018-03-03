Math typesetting using KaTex
==============

Use it for your book, by adding to your book.json:

```
{
    "plugins": ["katex@git+https://github.com/allenyllee/plugin-katex.git"]
}
```

Block math sample:

```
\\[\sin(\frac{\pi}{2}) = 1\\]
```

```
$$\sin(\frac{\pi}{2}) = 1$$
```

Inline math sample:

```
\\(\sin(\frac{\pi}{2}) = 1\\)
```

```
$\sin(\frac{\pi}{2}) = 1$
```


What I have tried:

- [Support using '\$' for inline math and '\$$' for display math, same as … · qinix/plugin-katex@5004f2c](https://github.com/qinix/plugin-katex/commit/5004f2c80e54f6a2543dd73c64ed946b2618bdb5)

    - build fail: Template render error: (/tmp/book/AI__硬體介紹與環境設定.md)  ParseError: KaTeX parse error: Expected group after '_' at position 6: 46400_̲_)  [time=Oct 0…
    - I have some documents using single dollar sign $ as product prices, it may cause this issue

- [use \\(, \\), \\[ and \\] replace $$ · erictt/plugin-katex@67f7ae5](https://github.com/erictt/plugin-katex/commit/67f7ae560210860f3fcadade0901e2f92c3dafe3)

    - OK, but can't support \$

- [Render katex using JS instead of blocks · SamLau95/gitbook-plugin-katex-plus@7889258](https://github.com/SamLau95/gitbook-plugin-katex-plus/commit/78892588d6142adf1fbe02a320aeeba9c6cede5e)

    - OK, but still have some bug

- [using master branch for katex · qinix/plugin-katex@ebd41c3](https://github.com/qinix/plugin-katex/commit/ebd41c31d36496cdf1820b3d19065277a17aa7fb)

    - build fail: PluginError: Error with plugin "katex": Cannot find module 'katex'
    - use fixed version
