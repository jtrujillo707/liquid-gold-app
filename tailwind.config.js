/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    
  ],
 
  theme: {
    extend: {
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],

  
}