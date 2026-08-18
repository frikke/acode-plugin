# Acode JavaScript template

Official JavaScript template for Acode plugins.

Read the [plugin docs](https://docs.acode.app/) before you start.

## Features

- JavaScript with `acode-plugin-types`
- esbuild bundling, watch + local serve
- `plugin.zip` packaging from the repo root

For a plugin UI example with Preact, see [acode-plugin-preact](https://github.com/Acode-Foundation/acode-plugin-preact).

## Scripts

```sh
npm install
npm run dev        # watch, serve on :3000, rebuild plugin.zip
npm run build      # bundle and write plugin.zip
```

In Acode, install from **Plugins → + → Remote** using:

```
http://<your-ip>:3000/plugin.zip
```
