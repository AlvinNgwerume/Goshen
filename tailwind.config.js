/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        goshen: {
          canvas: "#FFFFFF",
          "slate-light": "#F9FAFB",
          ice: "#F8FAFC",
          cream: "#FFFBF5",
          charcoal: "#1A1A1A",
          "primary-text": "#1E120A",
          muted: "#4B5563",
          slate: "#64748B",
          harvest: "#E06A26",
          "harvest-hover": "#D05C18",
          wheat: "#EBB328",
          brown: "#5C3317",
          classroom: "#1E8E3E",
          "border-subtle": "#EBE3DA",
          "border-ice": "#E2E8F0"
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Plus Jakarta Sans", "sans-serif"]
      },
      boxShadow: {
        "lift": "0 12px 24px -4px rgba(92, 51, 23, 0.08), 0 4px 8px -2px rgba(92, 51, 23, 0.04)",
        "resting": "0 1px 3px rgba(92, 51, 23, 0.04)"
      }
    }
  },
  plugins: []
};
