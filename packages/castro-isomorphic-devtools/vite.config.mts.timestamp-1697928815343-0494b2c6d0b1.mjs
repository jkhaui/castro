// vite.config.mts
import { resolve } from "path";
import { defineConfig as defineConfig2 } from "file:///C:/Users/jorda/OneDrive/Desktop/projects/2023-PROJ/pnpm-workspace/node_modules/.pnpm/vite@4.5.0_@types+node@20.8.7_terser@5.22.0/node_modules/vite/dist/node/index.js";

// package.json
var package_default = {
  name: "@castro/isomorphic-devtools",
  version: "0.0.1",
  sideEffects: false,
  source: "src/index.mts",
  types: "dist/index.d.ts",
  main: "dist/index.js",
  module: "dist/index.js",
  type: "module",
  exports: {
    "./package.json": "./package.json",
    ".": {
      types: "./dist/index.d.ts",
      import: "./src/index.mts"
    }
  },
  files: [
    "src",
    "dist"
  ],
  keywords: [
    "astro-integration",
    "react"
  ],
  scripts: {
    dev: "vite",
    build: "tsc && vite build",
    preview: "vite preview"
  },
  peerDependencies: {
    astro: "*",
    react: "*"
  },
  devDependencies: {
    "asset-require-hook": "^1.2.0",
    astro: "*",
    react: "*",
    vite: "latest",
    vitest: "*"
  },
  engines: {
    node: ">=18.14.1"
  },
  publishConfig: {
    access: "public"
  }
};

// ../../vite.config.base.mts
import { defineConfig } from "file:///C:/Users/jorda/OneDrive/Desktop/projects/2023-PROJ/pnpm-workspace/node_modules/.pnpm/vite@4.5.0_@types+node@20.8.7_terser@5.22.0/node_modules/vite/dist/node/index.js";
import dts from "file:///C:/Users/jorda/OneDrive/Desktop/projects/2023-PROJ/pnpm-workspace/node_modules/.pnpm/vite-plugin-dts@3.6.0_@types+node@20.8.7_rollup@2.79.1_typescript@5.2.2_vite@4.5.0/node_modules/vite-plugin-dts/dist/index.mjs";
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
var __vite_injected_original_dirname = "C:\\Users\\jorda\\OneDrive\\Desktop\\projects\\2023-PROJ\\pnpm-workspace\\packages\\castro-isomorphic-devtools";
var vite_config_default = defineConfig2({
  ...vite_config_base_default,
  build: {
    lib: {
      ...vite_config_base_default.build.lib,
      entry: resolve(__vite_injected_original_dirname, "src/index.ts")
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        ...Object.keys(package_default.dependencies ?? {}),
        ...Object.keys(package_default.peerDependencies ?? {}),
        "react/jsx-runtime"
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIiwgInBhY2thZ2UuanNvbiIsICIuLi8uLi92aXRlLmNvbmZpZy5iYXNlLm10cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGpvcmRhXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxccHJvamVjdHNcXFxcMjAyMy1QUk9KXFxcXHBucG0td29ya3NwYWNlXFxcXHBhY2thZ2VzXFxcXGNhc3Ryby1pc29tb3JwaGljLWRldnRvb2xzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxqb3JkYVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXHByb2plY3RzXFxcXDIwMjMtUFJPSlxcXFxwbnBtLXdvcmtzcGFjZVxcXFxwYWNrYWdlc1xcXFxjYXN0cm8taXNvbW9ycGhpYy1kZXZ0b29sc1xcXFx2aXRlLmNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2pvcmRhL09uZURyaXZlL0Rlc2t0b3AvcHJvamVjdHMvMjAyMy1QUk9KL3BucG0td29ya3NwYWNlL3BhY2thZ2VzL2Nhc3Ryby1pc29tb3JwaGljLWRldnRvb2xzL3ZpdGUuY29uZmlnLm10c1wiO2ltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBwa2cgZnJvbSAnLi9wYWNrYWdlLmpzb24nO1xyXG5pbXBvcnQgYmFzZUNvbmZpZyBmcm9tICcuLi8uLi92aXRlLmNvbmZpZy5iYXNlLm1qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gICAgLi4uYmFzZUNvbmZpZyxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgICAgbGliOiB7XHJcbiAgICAgICAgICAgIC4uLmJhc2VDb25maWcuYnVpbGQubGliLFxyXG4gICAgICAgICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXgudHMnKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGV4dGVybmFsaXplIGRlcHMgdGhhdCBzaG91bGRuJ3QgYmUgYnVuZGxlZFxyXG4gICAgICAgICAgICAvLyBpbnRvIHlvdXIgbGlicmFyeVxyXG4gICAgICAgICAgICBleHRlcm5hbDogW1xyXG4gICAgICAgICAgICAgICAgLi4uT2JqZWN0LmtleXMocGtnLmRlcGVuZGVuY2llcyA/PyB7fSksXHJcbiAgICAgICAgICAgICAgICAuLi5PYmplY3Qua2V5cyhwa2cucGVlckRlcGVuZGVuY2llcyA/PyB7fSksXHJcbiAgICAgICAgICAgICAgICAncmVhY3QvanN4LXJ1bnRpbWUnLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KTtcclxuIiwgIntcbiAgXCJuYW1lXCI6IFwiQGNhc3Ryby9pc29tb3JwaGljLWRldnRvb2xzXCIsXG4gIFwidmVyc2lvblwiOiBcIjAuMC4xXCIsXG4gIFwic2lkZUVmZmVjdHNcIjogZmFsc2UsXG4gIFwic291cmNlXCI6IFwic3JjL2luZGV4Lm10c1wiLFxuICBcInR5cGVzXCI6IFwiZGlzdC9pbmRleC5kLnRzXCIsXG4gIFwibWFpblwiOiBcImRpc3QvaW5kZXguanNcIixcbiAgXCJtb2R1bGVcIjogXCJkaXN0L2luZGV4LmpzXCIsXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcImV4cG9ydHNcIjoge1xuICAgIFwiLi9wYWNrYWdlLmpzb25cIjogXCIuL3BhY2thZ2UuanNvblwiLFxuICAgIFwiLlwiOiB7XG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L2luZGV4LmQudHNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9zcmMvaW5kZXgubXRzXCJcbiAgICB9XG4gIH0sXG4gIFwiZmlsZXNcIjogW1xuICAgIFwic3JjXCIsXG4gICAgXCJkaXN0XCJcbiAgXSxcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJhc3Ryby1pbnRlZ3JhdGlvblwiLFxuICAgIFwicmVhY3RcIlxuICBdLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiZGV2XCI6IFwidml0ZVwiLFxuICAgIFwiYnVpbGRcIjogXCJ0c2MgJiYgdml0ZSBidWlsZFwiLFxuICAgIFwicHJldmlld1wiOiBcInZpdGUgcHJldmlld1wiXG4gIH0sXG4gIFwicGVlckRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJhc3Ryb1wiOiBcIipcIixcbiAgICBcInJlYWN0XCI6IFwiKlwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImFzc2V0LXJlcXVpcmUtaG9va1wiOiBcIl4xLjIuMFwiLFxuICAgIFwiYXN0cm9cIjogXCIqXCIsXG4gICAgXCJyZWFjdFwiOiBcIipcIixcbiAgICBcInZpdGVcIjogXCJsYXRlc3RcIixcbiAgICBcInZpdGVzdFwiOiBcIipcIlxuICB9LFxuICBcImVuZ2luZXNcIjoge1xuICAgIFwibm9kZVwiOiBcIj49MTguMTQuMVwiXG4gIH0sXG4gIFwicHVibGlzaENvbmZpZ1wiOiB7XG4gICAgXCJhY2Nlc3NcIjogXCJwdWJsaWNcIlxuICB9XG59IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxqb3JkYVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXHByb2plY3RzXFxcXDIwMjMtUFJPSlxcXFxwbnBtLXdvcmtzcGFjZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcam9yZGFcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxwcm9qZWN0c1xcXFwyMDIzLVBST0pcXFxccG5wbS13b3Jrc3BhY2VcXFxcdml0ZS5jb25maWcuYmFzZS5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2pvcmRhL09uZURyaXZlL0Rlc2t0b3AvcHJvamVjdHMvMjAyMy1QUk9KL3BucG0td29ya3NwYWNlL3ZpdGUuY29uZmlnLmJhc2UubXRzXCI7Ly8gY29tbW9uIHNoYXJlZCBjb25maWdcclxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlL2NsaWVudFwiIC8+XHJcblxyXG5pbXBvcnQge2RlZmluZUNvbmZpZ30gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgICBidWlsZDoge1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBsaWI6IHtcclxuICAgICAgICAgICAgZmlsZU5hbWU6ICdpbmRleCcsXHJcbiAgICAgICAgICAgIGZvcm1hdHM6IFsnZXMnXVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICAgIGR0cyh7XHJcbiAgICAgICAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXHJcbiAgICAgICAgfSksXHJcbiAgICBdLFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1ZixTQUFTLGVBQWU7QUFDL2dCLFNBQVMsZ0JBQUFBLHFCQUFvQjs7O0FDRDdCO0FBQUEsRUFDRSxNQUFRO0FBQUEsRUFDUixTQUFXO0FBQUEsRUFDWCxhQUFlO0FBQUEsRUFDZixRQUFVO0FBQUEsRUFDVixPQUFTO0FBQUEsRUFDVCxNQUFRO0FBQUEsRUFDUixRQUFVO0FBQUEsRUFDVixNQUFRO0FBQUEsRUFDUixTQUFXO0FBQUEsSUFDVCxrQkFBa0I7QUFBQSxJQUNsQixLQUFLO0FBQUEsTUFDSCxPQUFTO0FBQUEsTUFDVCxRQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQVM7QUFBQSxJQUNQO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFVBQVk7QUFBQSxJQUNWO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVc7QUFBQSxJQUNULEtBQU87QUFBQSxJQUNQLE9BQVM7QUFBQSxJQUNULFNBQVc7QUFBQSxFQUNiO0FBQUEsRUFDQSxrQkFBb0I7QUFBQSxJQUNsQixPQUFTO0FBQUEsSUFDVCxPQUFTO0FBQUEsRUFDWDtBQUFBLEVBQ0EsaUJBQW1CO0FBQUEsSUFDakIsc0JBQXNCO0FBQUEsSUFDdEIsT0FBUztBQUFBLElBQ1QsT0FBUztBQUFBLElBQ1QsTUFBUTtBQUFBLElBQ1IsUUFBVTtBQUFBLEVBQ1o7QUFBQSxFQUNBLFNBQVc7QUFBQSxJQUNULE1BQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxlQUFpQjtBQUFBLElBQ2YsUUFBVTtBQUFBLEVBQ1o7QUFDRjs7O0FDM0NBLFNBQVEsb0JBQW1CO0FBQzNCLE9BQU8sU0FBUztBQUVoQixJQUFPLDJCQUFRLGFBQWE7QUFBQSxFQUN4QixPQUFPO0FBQUE7QUFBQSxJQUVILEtBQUs7QUFBQSxNQUNELFVBQVU7QUFBQSxNQUNWLFNBQVMsQ0FBQyxJQUFJO0FBQUEsSUFDbEI7QUFBQSxFQUNKO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxJQUFJO0FBQUEsTUFDQSxrQkFBa0I7QUFBQSxJQUN0QixDQUFDO0FBQUEsRUFDTDtBQUNKLENBQUM7OztBRm5CRCxJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRQyxjQUFhO0FBQUEsRUFDeEIsR0FBRztBQUFBLEVBQ0gsT0FBTztBQUFBLElBQ0gsS0FBSztBQUFBLE1BQ0QsR0FBRyx5QkFBVyxNQUFNO0FBQUEsTUFDcEIsT0FBTyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxJQUM1QztBQUFBLElBQ0EsZUFBZTtBQUFBO0FBQUE7QUFBQSxNQUdYLFVBQVU7QUFBQSxRQUNOLEdBQUcsT0FBTyxLQUFLLGdCQUFJLGdCQUFnQixDQUFDLENBQUM7QUFBQSxRQUNyQyxHQUFHLE9BQU8sS0FBSyxnQkFBSSxvQkFBb0IsQ0FBQyxDQUFDO0FBQUEsUUFDekM7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogWyJkZWZpbmVDb25maWciLCAiZGVmaW5lQ29uZmlnIl0KfQo=
