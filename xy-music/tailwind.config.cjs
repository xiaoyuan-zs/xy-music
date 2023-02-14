/** @type {import('tailwindcss').Config} */
module.exports = {

    // content 是在生产环境中剔除没有使用的样式
    content: [
        './index.html',
        './src/**/*.{vue,ts,js,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
