# nax crosscode typescript mod template

This mod template is designed for those who want to use both TypeScript and CrossCode's modules (John Resig's prototype based class inheritence).

Mods using this template require [`nax-module-cache`](https://github.com/naxane/nax-module-cache) or should use the code from its [`plugin.ts`](https://github.com/naxane/nax-module-cache/blob/main/src/plugin.ts) to rectify issues with loading impact modules at runtime.

Included here is the `esbuild.mjs` for building the mod to a .ccmod file. `esbuild-post.mjs` is used as a post-build step to copy the .ccmod file to a specified directory.

The directory structure is copied into the .ccmod verbatim after being compiled to JS, the module pathing is based on that structure with your mod's name as the root.

The `assets` folder is also copied verbatim, put it under src and it will be copied as-is.