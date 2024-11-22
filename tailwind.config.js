/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-text-blue': '#0E7EE4',
        'primary-text-green': '#14B8B4',
        'primary-text-greensky': '#50F2EE',
        'primary-text-red': '#EF4337',
        'primary-text-gray': '#D1D1D1',
        'primary-text-gray-dark': '#788796',
        'primary-bg': '#F9FAFB',
        'primary-bg-green-light': '#14B8B4',
        'primary-bg-green-dark': '#2E8285',
        'primary-bg-blue-dark': '#065BA9',
        'primary-bg-gray-dark': '#212529',
        'primary-bg-blue-light': '#C3DFF8',
        'primary-bg-orange': '#FF7A00',
        'primary-bg-orange-light': '#F5A623',
        'primary-bg-linear-white': '#FFFFFF',
        'primary-bg-linear-blue': '#0E7EE4',
        'primary-bg-linear-sky': '#55A6F2',
        'primary-bg-linear-greed': '#14B8B4',
        'primary-bg-linear-light': '#EFF2F7',
        'primary-bg-linear-lightgray': '#EDEFF9',
      },
      boxShadow: {
        "btn-off": 'box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;'
      },
    },
  },
  plugins: [],
};
