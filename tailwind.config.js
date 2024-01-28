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
      backgroundImage:{
        "fondo":"url('./public/Fondo.png')",
        "logro":"url('./public/246675.jpg')",

        
       },
       borderRadius:{
         "4xl":"20%",
         "5xl":"22%"
       },
    },
  },
  plugins: [],
}

