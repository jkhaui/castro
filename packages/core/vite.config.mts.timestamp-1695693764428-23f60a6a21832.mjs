// vite.config.mts
import { resolve } from "path";
import { defineConfig as defineConfig2 } from "file:///C:/Users/jorda/OneDrive/Desktop/projects/2023-PROJ/pnpm-workspace/node_modules/.pnpm/vite@4.4.9_@types+node@20.7.0_terser@5.20.0/node_modules/vite/dist/node/index.js";

// package.json
var package_default = {
  name: "@castro/core",
  version: "0.0.1",
  sideEffects: false,
  source: "src/index.ts",
  types: "dist/index.d.ts",
  main: "dist/index.js",
  module: "dist/index.js",
  type: "module",
  exports: {
    "./package.json": "./package.json",
    ".": {
      types: "./dist/index.d.ts",
      import: "./src/index.ts"
    }
  },
  files: [
    "src",
    "dist"
  ],
  keywords: [
    "react"
  ],
  scripts: {
    dev: "vite dev",
    build: "vite build",
    preview: "vite preview",
    start: "node src/index.ts"
  },
  peerDependencies: {
    "@react-navigation/native": "7.0.0-alpha.4",
    react: "*",
    "react-native": "npm:react-native-web-lite"
  },
  devDependencies: {
    "@babel/core": "^7.23.0",
    "@babel/preset-typescript": "^7.23.0",
    "@react-navigation/native": "7.0.0-alpha.4",
    "@storybook/addon-actions": "^7.4.5",
    "@storybook/addon-docs": "^7.4.5",
    "@storybook/addon-essentials": "^7.4.5",
    "@storybook/react": "^7.4.5",
    "@vitejs/plugin-react-swc": "^3.4.0",
    astro: "*",
    konsta: "^3.1.0",
    react: "*",
    "react-native": "npm:react-native-web-lite",
    "ts-node": "^10.9.1",
    vite: "latest",
    vitest: "*"
  },
  publishConfig: {
    access: "public"
  }
};

// ../../vite.config.base.mts
import { defineConfig } from "file:///C:/Users/jorda/OneDrive/Desktop/projects/2023-PROJ/pnpm-workspace/node_modules/.pnpm/vite@4.4.9_@types+node@20.7.0_terser@5.20.0/node_modules/vite/dist/node/index.js";
import dts from "file:///C:/Users/jorda/OneDrive/Desktop/projects/2023-PROJ/pnpm-workspace/node_modules/.pnpm/vite-plugin-dts@3.5.4_@types+node@20.7.0_rollup@2.79.1_typescript@5.2.2_vite@4.4.9/node_modules/vite-plugin-dts/dist/index.mjs";
var vite_config_base_default = defineConfig({
  build: {
    // @ts-ignore
    lib: {
      fileName: "index",
      formats: ["es"]
    }
  },
  plugins: [
    dts({
      insertTypesEntry: true
    })
  ]
});

// vite.config.mts
var __vite_injected_original_dirname = "C:\\Users\\jorda\\OneDrive\\Desktop\\projects\\2023-PROJ\\pnpm-workspace\\packages\\core";
var vite_config_default = defineConfig2({
  ...vite_config_base_default,
  build: {
    lib: {
      ...vite_config_base_default.build.lib,
      entry: resolve(__vite_injected_original_dirname, "src/index.ts")
    },
    minify: "terser",
    terserOptions: {
      mangle: {
        properties: {
          regex: /^_/,
          reserved: ["h", "Fragment"]
        }
      }
    },
    rollupOptions: {
      external: [
        // ...baseConfig.rollupOptions.external,
        ...Object.keys(package_default.devDependencies ?? {}),
        ...Object.keys(package_default.peerDependencies ?? {})
      ]
    }
  },
  optimizeDeps: {
    include: ["src"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIiwgInBhY2thZ2UuanNvbiIsICIuLi8uLi92aXRlLmNvbmZpZy5iYXNlLm10cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGpvcmRhXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxccHJvamVjdHNcXFxcMjAyMy1QUk9KXFxcXHBucG0td29ya3NwYWNlXFxcXHBhY2thZ2VzXFxcXGNvcmVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGpvcmRhXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxccHJvamVjdHNcXFxcMjAyMy1QUk9KXFxcXHBucG0td29ya3NwYWNlXFxcXHBhY2thZ2VzXFxcXGNvcmVcXFxcdml0ZS5jb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9qb3JkYS9PbmVEcml2ZS9EZXNrdG9wL3Byb2plY3RzLzIwMjMtUFJPSi9wbnBtLXdvcmtzcGFjZS9wYWNrYWdlcy9jb3JlL3ZpdGUuY29uZmlnLm10c1wiO2ltcG9ydCB7cmVzb2x2ZX0gZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7ZGVmaW5lQ29uZmlnfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHBrZyBmcm9tICcuL3BhY2thZ2UuanNvbic7XHJcbmltcG9ydCBiYXNlQ29uZmlnIGZyb20gJy4uLy4uL3ZpdGUuY29uZmlnLmJhc2UubWpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgICAuLi5iYXNlQ29uZmlnLFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgICBsaWI6IHtcclxuICAgICAgICAgICAgLi4uYmFzZUNvbmZpZy5idWlsZC5saWIsXHJcbiAgICAgICAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC5tdHMnKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1pbmlmeTogJ3RlcnNlcicsXHJcbiAgICAgICAgdGVyc2VyT3B0aW9uczoge1xyXG4gICAgICAgICAgICBtYW5nbGU6IHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICByZWdleDogL15fLyxcclxuICAgICAgICAgICAgICAgICAgICByZXNlcnZlZDogWydoJywgJ0ZyYWdtZW50J11cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAgICAgICBleHRlcm5hbDogW1xyXG4gICAgICAgICAgICAgICAgLy8gLi4uYmFzZUNvbmZpZy5yb2xsdXBPcHRpb25zLmV4dGVybmFsLFxyXG4gICAgICAgICAgICAgICAgLi4uT2JqZWN0LmtleXMocGtnLmRldkRlcGVuZGVuY2llcyA/PyB7fSksXHJcbiAgICAgICAgICAgICAgICAuLi5PYmplY3Qua2V5cyhwa2cucGVlckRlcGVuZGVuY2llcyA/PyB7fSksXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBvcHRpbWl6ZURlcHM6IHtcclxuICAgICAgICBpbmNsdWRlOiBbXCJzcmNcIl1cclxuICAgIH1cclxufSk7XHJcbiIsICJ7XG4gIFwibmFtZVwiOiBcIkBjYXN0cm8vY29yZVwiLFxuICBcInZlcnNpb25cIjogXCIwLjAuMVwiLFxuICBcInNpZGVFZmZlY3RzXCI6IGZhbHNlLFxuICBcInNvdXJjZVwiOiBcInNyYy9pbmRleC5tdHNcIixcbiAgXCJ0eXBlc1wiOiBcImRpc3QvaW5kZXguZC50c1wiLFxuICBcIm1haW5cIjogXCJkaXN0L2luZGV4LmpzXCIsXG4gIFwibW9kdWxlXCI6IFwiZGlzdC9pbmRleC5qc1wiLFxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcbiAgXCJleHBvcnRzXCI6IHtcbiAgICBcIi4vcGFja2FnZS5qc29uXCI6IFwiLi9wYWNrYWdlLmpzb25cIixcbiAgICBcIi5cIjoge1xuICAgICAgXCJ0eXBlc1wiOiBcIi4vZGlzdC9pbmRleC5kLnRzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vc3JjL2luZGV4Lm10c1wiXG4gICAgfVxuICB9LFxuICBcImZpbGVzXCI6IFtcbiAgICBcInNyY1wiLFxuICAgIFwiZGlzdFwiXG4gIF0sXG4gIFwia2V5d29yZHNcIjogW1xuICAgIFwicmVhY3RcIlxuICBdLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiZGV2XCI6IFwidml0ZSBkZXZcIixcbiAgICBcImJ1aWxkXCI6IFwidml0ZSBidWlsZFwiLFxuICAgIFwicHJldmlld1wiOiBcInZpdGUgcHJldmlld1wiLFxuICAgIFwic3RhcnRcIjogXCJub2RlIHNyYy9pbmRleC5tdHNcIlxuICB9LFxuICBcInBlZXJEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHJlYWN0LW5hdmlnYXRpb24vbmF0aXZlXCI6IFwibmV4dFwiLFxuICAgIFwicmVhY3RcIjogXCIqXCIsXG4gICAgXCJyZWFjdC1uYXRpdmVcIjogXCJucG06cmVhY3QtbmF0aXZlLXdlYi1saXRlXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGJhYmVsL2NvcmVcIjogXCJeNy4yMy4wXCIsXG4gICAgXCJAYmFiZWwvcHJlc2V0LXR5cGVzY3JpcHRcIjogXCJeNy4yMy4wXCIsXG4gICAgXCJAcmVhY3QtbmF2aWdhdGlvbi9uYXRpdmVcIjogXCJuZXh0XCIsXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLWFjdGlvbnNcIjogXCJeNy40LjVcIixcbiAgICBcIkBzdG9yeWJvb2svYWRkb24tZG9jc1wiOiBcIl43LjQuNVwiLFxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1lc3NlbnRpYWxzXCI6IFwiXjcuNC41XCIsXG4gICAgXCJAc3Rvcnlib29rL3JlYWN0XCI6IFwiXjcuNC41XCIsXG4gICAgXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjogXCJeMy40LjBcIixcbiAgICBcImFzdHJvXCI6IFwiKlwiLFxuICAgIFwia29uc3RhXCI6IFwiXjMuMS4wXCIsXG4gICAgXCJyZWFjdFwiOiBcIipcIixcbiAgICBcInJlYWN0LW5hdGl2ZVwiOiBcIm5wbTpyZWFjdC1uYXRpdmUtd2ViLWxpdGVcIixcbiAgICBcInRzLW5vZGVcIjogXCJeMTAuOS4xXCIsXG4gICAgXCJ2aXRlXCI6IFwibGF0ZXN0XCIsXG4gICAgXCJ2aXRlc3RcIjogXCIqXCJcbiAgfSxcbiAgXCJwdWJsaXNoQ29uZmlnXCI6IHtcbiAgICBcImFjY2Vzc1wiOiBcInB1YmxpY1wiXG4gIH1cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcam9yZGFcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxwcm9qZWN0c1xcXFwyMDIzLVBST0pcXFxccG5wbS13b3Jrc3BhY2VcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGpvcmRhXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxccHJvamVjdHNcXFxcMjAyMy1QUk9KXFxcXHBucG0td29ya3NwYWNlXFxcXHZpdGUuY29uZmlnLmJhc2UubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9qb3JkYS9PbmVEcml2ZS9EZXNrdG9wL3Byb2plY3RzLzIwMjMtUFJPSi9wbnBtLXdvcmtzcGFjZS92aXRlLmNvbmZpZy5iYXNlLm10c1wiOy8vIGNvbW1vbiBzaGFyZWQgY29uZmlnXHJcbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwidml0ZS9jbGllbnRcIiAvPlxyXG5cclxuaW1wb3J0IHtkZWZpbmVDb25maWd9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgbGliOiB7XHJcbiAgICAgICAgICAgIGZpbGVOYW1lOiAnaW5kZXgnLFxyXG4gICAgICAgICAgICBmb3JtYXRzOiBbJ2VzJ11cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgICBkdHMoe1xyXG4gICAgICAgICAgICBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgXSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcWIsU0FBUSxlQUFjO0FBQzNjLFNBQVEsZ0JBQUFBLHFCQUFtQjs7O0FDRDNCO0FBQUEsRUFDRSxNQUFRO0FBQUEsRUFDUixTQUFXO0FBQUEsRUFDWCxhQUFlO0FBQUEsRUFDZixRQUFVO0FBQUEsRUFDVixPQUFTO0FBQUEsRUFDVCxNQUFRO0FBQUEsRUFDUixRQUFVO0FBQUEsRUFDVixNQUFRO0FBQUEsRUFDUixTQUFXO0FBQUEsSUFDVCxrQkFBa0I7QUFBQSxJQUNsQixLQUFLO0FBQUEsTUFDSCxPQUFTO0FBQUEsTUFDVCxRQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQVM7QUFBQSxJQUNQO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFVBQVk7QUFBQSxJQUNWO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBVztBQUFBLElBQ1QsS0FBTztBQUFBLElBQ1AsT0FBUztBQUFBLElBQ1QsU0FBVztBQUFBLElBQ1gsT0FBUztBQUFBLEVBQ1g7QUFBQSxFQUNBLGtCQUFvQjtBQUFBLElBQ2xCLDRCQUE0QjtBQUFBLElBQzVCLE9BQVM7QUFBQSxJQUNULGdCQUFnQjtBQUFBLEVBQ2xCO0FBQUEsRUFDQSxpQkFBbUI7QUFBQSxJQUNqQixlQUFlO0FBQUEsSUFDZiw0QkFBNEI7QUFBQSxJQUM1Qiw0QkFBNEI7QUFBQSxJQUM1Qiw0QkFBNEI7QUFBQSxJQUM1Qix5QkFBeUI7QUFBQSxJQUN6QiwrQkFBK0I7QUFBQSxJQUMvQixvQkFBb0I7QUFBQSxJQUNwQiw0QkFBNEI7QUFBQSxJQUM1QixPQUFTO0FBQUEsSUFDVCxRQUFVO0FBQUEsSUFDVixPQUFTO0FBQUEsSUFDVCxnQkFBZ0I7QUFBQSxJQUNoQixXQUFXO0FBQUEsSUFDWCxNQUFRO0FBQUEsSUFDUixRQUFVO0FBQUEsRUFDWjtBQUFBLEVBQ0EsZUFBaUI7QUFBQSxJQUNmLFFBQVU7QUFBQSxFQUNaO0FBQ0Y7OztBQ25EQSxTQUFRLG9CQUFtQjtBQUMzQixPQUFPLFNBQVM7QUFFaEIsSUFBTywyQkFBUSxhQUFhO0FBQUEsRUFDeEIsT0FBTztBQUFBO0FBQUEsSUFFSCxLQUFLO0FBQUEsTUFDRCxVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsSUFBSTtBQUFBLElBQ2xCO0FBQUEsRUFDSjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsSUFBSTtBQUFBLE1BQ0Esa0JBQWtCO0FBQUEsSUFDdEIsQ0FBQztBQUFBLEVBQ0w7QUFDSixDQUFDOzs7QUZuQkQsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTyxzQkFBUUMsY0FBYTtBQUFBLEVBQ3hCLEdBQUc7QUFBQSxFQUNILE9BQU87QUFBQSxJQUNILEtBQUs7QUFBQSxNQUNELEdBQUcseUJBQVcsTUFBTTtBQUFBLE1BQ3BCLE9BQU8sUUFBUSxrQ0FBVyxlQUFlO0FBQUEsSUFDN0M7QUFBQSxJQUNBLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNYLFFBQVE7QUFBQSxRQUNKLFlBQVk7QUFBQSxVQUNSLE9BQU87QUFBQSxVQUNQLFVBQVUsQ0FBQyxLQUFLLFVBQVU7QUFBQSxRQUM5QjtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDWCxVQUFVO0FBQUE7QUFBQSxRQUVOLEdBQUcsT0FBTyxLQUFLLGdCQUFJLG1CQUFtQixDQUFDLENBQUM7QUFBQSxRQUN4QyxHQUFHLE9BQU8sS0FBSyxnQkFBSSxvQkFBb0IsQ0FBQyxDQUFDO0FBQUEsTUFDN0M7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1YsU0FBUyxDQUFDLEtBQUs7QUFBQSxFQUNuQjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbImRlZmluZUNvbmZpZyIsICJkZWZpbmVDb25maWciXQp9Cg==
