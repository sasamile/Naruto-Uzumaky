

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
        "Russo":['Russo One' ],
        "Klee":['Klee One']
    },
    
    extend: {
    
       borderRadius:{
         "4xl":"20%",
         "5xl":"22%"
       },
    },
  },
  plugins: [],
}

