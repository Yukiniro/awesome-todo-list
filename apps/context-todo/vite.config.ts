import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";
import { presetUno, presetIcons } from "unocss";

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    target: "ESNext",
  },
  plugins: [
    react(),
    Unocss({
      rules: [
        [
          "list-shadow",
          {
            "box-shadow":
              "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;",
          },
        ],
      ],
      presets: [presetUno(), presetIcons()],
    }),
  ],
});
