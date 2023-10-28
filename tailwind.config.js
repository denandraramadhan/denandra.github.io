/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                main: "#0ef",
                bgMain: "#1b1f24",
                other: "#c3cad5",
            },
            keyframes: {
                animate: {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
                animate2: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-200%)" },
                },
            },
        },
    },
    plugins: [],
};
