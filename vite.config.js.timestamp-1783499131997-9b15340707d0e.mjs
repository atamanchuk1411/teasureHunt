// vite.config.js
import { defineConfig } from "file:///E:/project/misocial/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import { mkdirSync } from "fs";
import tailwindcss from "file:///E:/project/misocial/node_modules/@tailwindcss/vite/dist/index.mjs";
import pugPlugin from "file:///E:/project/misocial/node_modules/@macropygia/vite-plugin-pug-static/dist/index.js";
import { viteStaticCopy } from "file:///E:/project/misocial/node_modules/vite-plugin-static-copy/dist/index.js";
var __vite_injected_original_dirname = "E:\\project\\misocial";
var createStructure = () => ({
  name: "create-structure",
  buildStart() {
    const dirs = [
      "src/components",
      "src/scripts",
      "src/data",
      "src/styles/components",
      "src/assets/images",
      "src/assets/fonts",
      "src/assets/icons"
    ];
    dirs.forEach((dir) => mkdirSync(dir, { recursive: true }));
  },
  writeBundle() {
    const outDirs = [
      "docs/assets/images",
      "docs/assets/fonts",
      "docs/assets/icons",
      "docs/assets/js"
    ];
    outDirs.forEach((dir) => mkdirSync(dir, { recursive: true }));
  }
});
var vite_config_default = defineConfig({
  root: "src",
  base: "./",
  plugins: [
    createStructure(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        { src: "assets/images/*", dest: "assets/images" }
      ]
    }),
    pugPlugin({
      buildLocals: {
        siteName: "site name",
        currentYear: (/* @__PURE__ */ new Date()).getFullYear()
      },
      buildOptions: {
        basedir: resolve(process.cwd(), "src"),
        pretty: true
      }
    })
  ],
  resolve: {
    alias: {
      "@": resolve(process.cwd(), "src"),
      "@components": resolve(process.cwd(), "src/components"),
      "@styles": resolve(process.cwd(), "src/styles"),
      "@assets": resolve(process.cwd(), "src/assets"),
      "@scripts": resolve(process.cwd(), "src/scripts"),
      "@fonts": resolve(process.cwd(), "src/fonts")
    }
  },
  build: {
    outDir: "../docs",
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        main: resolve(__vite_injected_original_dirname, "src/index.pug"),
        app: resolve(__vite_injected_original_dirname, "src/main.js")
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "assets/styles.css";
          }
          if (assetInfo.name && /\.(woff2?|ttf|otf|eot)$/.test(assetInfo.name)) {
            return "assets/fonts/[name][extname]";
          }
          if (assetInfo.name && /\.(png|jpe?g|gif|svg|webp)$/.test(assetInfo.name)) {
            return "assets/images/[name][extname]";
          }
          return "assets/[name][extname]";
        },
        chunkFileNames: "assets/js/[name].js",
        entryFileNames: "assets/js/[name].js"
      }
    }
  },
  server: {
    port: 3e3,
    host: true,
    open: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxwcm9qZWN0XFxcXG1pc29jaWFsXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxwcm9qZWN0XFxcXG1pc29jaWFsXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9wcm9qZWN0L21pc29jaWFsL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXHJcbmltcG9ydCB7IG1rZGlyU3luYyB9IGZyb20gJ2ZzJ1xyXG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSAnQHRhaWx3aW5kY3NzL3ZpdGUnXHJcbmltcG9ydCBwdWdQbHVnaW4gZnJvbSAnQG1hY3JvcHlnaWEvdml0ZS1wbHVnaW4tcHVnLXN0YXRpYydcclxuaW1wb3J0IHsgdml0ZVN0YXRpY0NvcHkgfSBmcm9tICd2aXRlLXBsdWdpbi1zdGF0aWMtY29weSdcclxuXHJcbmNvbnN0IGNyZWF0ZVN0cnVjdHVyZSA9ICgpID0+ICh7XHJcbiAgbmFtZTogJ2NyZWF0ZS1zdHJ1Y3R1cmUnLFxyXG4gIGJ1aWxkU3RhcnQoKSB7XHJcbiAgICBjb25zdCBkaXJzID0gW1xyXG4gICAgICAnc3JjL2NvbXBvbmVudHMnLFxyXG4gICAgICAnc3JjL3NjcmlwdHMnLFxyXG4gICAgICAnc3JjL2RhdGEnLFxyXG4gICAgICAnc3JjL3N0eWxlcy9jb21wb25lbnRzJyxcclxuICAgICAgJ3NyYy9hc3NldHMvaW1hZ2VzJyxcclxuICAgICAgJ3NyYy9hc3NldHMvZm9udHMnLFxyXG4gICAgICAnc3JjL2Fzc2V0cy9pY29ucycsXHJcbiAgICBdXHJcbiAgICBkaXJzLmZvckVhY2goZGlyID0+IG1rZGlyU3luYyhkaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pKVxyXG4gIH0sXHJcbiAgd3JpdGVCdW5kbGUoKSB7XHJcbiAgICBjb25zdCBvdXREaXJzID0gW1xyXG4gICAgICAnZG9jcy9hc3NldHMvaW1hZ2VzJyxcclxuICAgICAgJ2RvY3MvYXNzZXRzL2ZvbnRzJyxcclxuICAgICAgJ2RvY3MvYXNzZXRzL2ljb25zJyxcclxuICAgICAgJ2RvY3MvYXNzZXRzL2pzJyxcclxuICAgIF1cclxuICAgIG91dERpcnMuZm9yRWFjaChkaXIgPT4gbWtkaXJTeW5jKGRpciwgeyByZWN1cnNpdmU6IHRydWUgfSkpXHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICByb290OiAnc3JjJyxcclxuICBiYXNlOiAnLi8nLFxyXG5cclxuICBwbHVnaW5zOiBbXHJcbiAgICBjcmVhdGVTdHJ1Y3R1cmUoKSxcclxuICAgIHRhaWx3aW5kY3NzKCksXHJcbiAgICB2aXRlU3RhdGljQ29weSh7XHJcbiAgICAgIHRhcmdldHM6IFtcclxuICAgICAgICB7IHNyYzogJ2Fzc2V0cy9pbWFnZXMvKicsIGRlc3Q6ICdhc3NldHMvaW1hZ2VzJyB9LFxyXG4gICAgICBdLFxyXG4gICAgfSksXHJcbiAgICBwdWdQbHVnaW4oe1xyXG4gICAgICBidWlsZExvY2Fsczoge1xyXG4gICAgICAgIHNpdGVOYW1lOiAnc2l0ZSBuYW1lJyxcclxuICAgICAgICBjdXJyZW50WWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxyXG4gICAgICB9LFxyXG4gICAgICBidWlsZE9wdGlvbnM6IHtcclxuICAgICAgICBiYXNlZGlyOiByZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMnKSxcclxuICAgICAgICBwcmV0dHk6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG5cclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IHJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYycpLFxyXG4gICAgICAnQGNvbXBvbmVudHMnOiByZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvY29tcG9uZW50cycpLFxyXG4gICAgICAnQHN0eWxlcyc6IHJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYy9zdHlsZXMnKSxcclxuICAgICAgJ0Bhc3NldHMnOiByZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXNzZXRzJyksXHJcbiAgICAgICdAc2NyaXB0cyc6IHJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYy9zY3JpcHRzJyksXHJcbiAgICAgICdAZm9udHMnOiByZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvZm9udHMnKSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgYnVpbGQ6IHtcclxuICAgIG91dERpcjogJy4uL2RvY3MnLFxyXG4gICAgZW1wdHlPdXREaXI6IHRydWUsXHJcbiAgICBjc3NDb2RlU3BsaXQ6IGZhbHNlLFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBpbnB1dDoge1xyXG4gICAgICAgIG1haW46IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2luZGV4LnB1ZycpLFxyXG4gICAgICAgIGFwcDogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvbWFpbi5qcycpLFxyXG4gICAgICB9LFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xyXG4gICAgICAgICAgaWYgKGFzc2V0SW5mby5uYW1lICYmIGFzc2V0SW5mby5uYW1lLmVuZHNXaXRoKCcuY3NzJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdhc3NldHMvc3R5bGVzLmNzcydcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChhc3NldEluZm8ubmFtZSAmJiAvXFwuKHdvZmYyP3x0dGZ8b3RmfGVvdCkkLy50ZXN0KGFzc2V0SW5mby5uYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2Fzc2V0cy9mb250cy9bbmFtZV1bZXh0bmFtZV0nXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoYXNzZXRJbmZvLm5hbWUgJiYgL1xcLihwbmd8anBlP2d8Z2lmfHN2Z3x3ZWJwKSQvLnRlc3QoYXNzZXRJbmZvLm5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnYXNzZXRzL2ltYWdlcy9bbmFtZV1bZXh0bmFtZV0nXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gJ2Fzc2V0cy9bbmFtZV1bZXh0bmFtZV0nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaHVua0ZpbGVOYW1lczogJ2Fzc2V0cy9qcy9bbmFtZV0uanMnLFxyXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnYXNzZXRzL2pzL1tuYW1lXS5qcycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIHNlcnZlcjoge1xyXG4gICAgcG9ydDogMzAwMCxcclxuICAgIGhvc3Q6IHRydWUsXHJcbiAgICBvcGVuOiB0cnVlLFxyXG4gIH0sXHJcblxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlQLFNBQVMsb0JBQW9CO0FBQzlRLFNBQVMsZUFBZTtBQUN4QixTQUFTLGlCQUFpQjtBQUMxQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGVBQWU7QUFDdEIsU0FBUyxzQkFBc0I7QUFML0IsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTSxrQkFBa0IsT0FBTztBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUNOLGFBQWE7QUFDWCxVQUFNLE9BQU87QUFBQSxNQUNYO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUNBLFNBQUssUUFBUSxTQUFPLFVBQVUsS0FBSyxFQUFFLFdBQVcsS0FBSyxDQUFDLENBQUM7QUFBQSxFQUN6RDtBQUFBLEVBQ0EsY0FBYztBQUNaLFVBQU0sVUFBVTtBQUFBLE1BQ2Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQ0EsWUFBUSxRQUFRLFNBQU8sVUFBVSxLQUFLLEVBQUUsV0FBVyxLQUFLLENBQUMsQ0FBQztBQUFBLEVBQzVEO0FBQ0Y7QUFFQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFFTixTQUFTO0FBQUEsSUFDUCxnQkFBZ0I7QUFBQSxJQUNoQixZQUFZO0FBQUEsSUFDWixlQUFlO0FBQUEsTUFDYixTQUFTO0FBQUEsUUFDUCxFQUFFLEtBQUssbUJBQW1CLE1BQU0sZ0JBQWdCO0FBQUEsTUFDbEQ7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFVBQVU7QUFBQSxNQUNSLGFBQWE7QUFBQSxRQUNYLFVBQVU7QUFBQSxRQUNWLGNBQWEsb0JBQUksS0FBSyxHQUFFLFlBQVk7QUFBQSxNQUN0QztBQUFBLE1BQ0EsY0FBYztBQUFBLFFBQ1osU0FBUyxRQUFRLFFBQVEsSUFBSSxHQUFHLEtBQUs7QUFBQSxRQUNyQyxRQUFRO0FBQUEsTUFDVjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssUUFBUSxRQUFRLElBQUksR0FBRyxLQUFLO0FBQUEsTUFDakMsZUFBZSxRQUFRLFFBQVEsSUFBSSxHQUFHLGdCQUFnQjtBQUFBLE1BQ3RELFdBQVcsUUFBUSxRQUFRLElBQUksR0FBRyxZQUFZO0FBQUEsTUFDOUMsV0FBVyxRQUFRLFFBQVEsSUFBSSxHQUFHLFlBQVk7QUFBQSxNQUM5QyxZQUFZLFFBQVEsUUFBUSxJQUFJLEdBQUcsYUFBYTtBQUFBLE1BQ2hELFVBQVUsUUFBUSxRQUFRLElBQUksR0FBRyxXQUFXO0FBQUEsSUFDOUM7QUFBQSxFQUNGO0FBQUEsRUFFQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixjQUFjO0FBQUEsSUFDZCxlQUFlO0FBQUEsTUFDYixPQUFPO0FBQUEsUUFDTCxNQUFNLFFBQVEsa0NBQVcsZUFBZTtBQUFBLFFBQ3hDLEtBQUssUUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFDdkM7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLGdCQUFnQixDQUFDLGNBQWM7QUFDN0IsY0FBSSxVQUFVLFFBQVEsVUFBVSxLQUFLLFNBQVMsTUFBTSxHQUFHO0FBQ3JELG1CQUFPO0FBQUEsVUFDVDtBQUNBLGNBQUksVUFBVSxRQUFRLDBCQUEwQixLQUFLLFVBQVUsSUFBSSxHQUFHO0FBQ3BFLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGNBQUksVUFBVSxRQUFRLDhCQUE4QixLQUFLLFVBQVUsSUFBSSxHQUFHO0FBQ3hFLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGlCQUFPO0FBQUEsUUFDVDtBQUFBLFFBQ0EsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBRUEsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFFRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
