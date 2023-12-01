const defaultTheme = require("tailwindcss/defaultTheme");
const konstaConfig = require("konsta/config");

/** @type {import("tailwindcss").Config} */
module.exports = konstaConfig({
    content: [
        "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
        "../../packages/ui-components/src/**/*.{astro,html,js,jsx,md,mdx,svelte,mts,ts,tsx,vue}",
        "../../packages/ui-components/tailwind.config.cjs",
    ],
    konsta: {
        colors: {
            primary: "#4c49fd",
            // "brand-link": "#1D9BF0FF"
        }
    },
    theme: {
        extend: {
            colors: {
                link: "rgb(29, 155, 240)",
                "icon-button": "rgba(255,255,255,.08)",
                focus: "rgba(239,243,244,0.1)"
            },
            screens: {
                standalone: {raw: "(display-mode: standalone)"},
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                ios: ["Poppins", ...defaultTheme.fontFamily.sans],
                material: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
            animation: {
                progress: "progress 1s infinite linear",
            },
            keyframes: {
                progress: {
                    "0%": {transform: " translateX(0) scaleX(0)"},
                    "40%": {transform: "translateX(0) scaleX(0.4)"},
                    "100%": {transform: "translateX(100%) scaleX(0.5)"},
                },
            },
            transformOrigin: {
                "left-right": "0% 50%",
            },
        },
    },
    darkMode: "class",
    plugins: [],
});
