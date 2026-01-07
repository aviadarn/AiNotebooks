/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2563eb', // Trustworthy blue
                secondary: '#0d9488', // Teal
            },
            borderRadius: {
                lg: '16px',
                xl: '20px',
            }
        },
    },
    plugins: [],
}
