import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
 optimizeDeps: {
    include: ["prop-types", "@nivo/core"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
       "prop-types": "prop-types"
    },
  },
})
