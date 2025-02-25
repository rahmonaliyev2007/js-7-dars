export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                kok: "#1840A7",
            },
            screens: {
                'max1260': { 'max': '1260px' },
                'max1020': { 'max': '1020px' },
                'max800': { 'max': '800px' },
                'max730': { 'max': '730px' },
                'max600': { 'max': '600px' },
                'max500': { 'max': '500px' },
            },
            backgroundImage: {
                "hero-pattern": "url('src/assets/hero-pattern.png')",
            }
        },

    },
    plugins: [],
};