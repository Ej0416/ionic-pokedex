/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                grayishBlack: "hsl(0, 0%, 22%)",
                grayishDarkBlack: "hsl(0, 0%, 15%)",
                normal: "hsl(10, 5%, 89%)",
            },
        },
    },
    plugins: [],
};
