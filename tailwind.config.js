/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '440px',
        'xxl': '1440px',
      },
      fontSize: {
        '28px': '28px',
      },
      boxShadow: {
        '3xl': '2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)',
      },
      spacing: {
        '18px': '18px',
        '26px': '26px',
        '30px': '30px',
        '86px': '86px',
      },
      maxWidth: {
        '85': '85px',
        '209': '209px',
        '800': '800px',
        '720': '720px',
        '1400': '1400px',
      },
      width: {
        '273': '273px',
        '402': '402px',
        '800': '800px',
      },
      height: {
        '85': '85px',
        '115': '115px',
        '273': '273px',
      },
      colors: {
        'mobile-bg': '#EFF0F5',
        'gray-cust': '#878D9D',
        'dark-blue': '#384564',
        'info-back-blue': 'rgba(161, 177, 219, 0.317343)',
        'info-blue': '#55699E',
        'blue-outline': 'rgba(85, 105, 158, 0.3)',
        'info-back-yellow': 'rgba(255, 207, 0, 0.15)',
        'info-yellow': '#988B49',
        'yellow-outline': '#FFCF00',
        'back-grey': 'rgb(56, 69, 100, 0.14)',
        'back-contact': '#2A3047',
        'contact-cirkle': '#202336',
        'contacts-text': '#E8EBF3',
        'contacts-title': '#E7EAF0',
      },
    },
  },
  plugins: [],
}
