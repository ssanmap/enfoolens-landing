module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Paleta principal ENFOOLENS (tus colores actuales)
        'enfoolens': {
          dark: '#3c3c3b',       // Textos principales
          light: '#f8f9fa',      // Fondos claros
          primary: '#3cebb0',    // Verde-azul claro
          secondary: '#83e2fe',  // Azul claro
          accent: '#ff6b6b',     // Nuevo: Para énfasis (opcional)
          
          // Variantes oscuras/light para hover
          'primary-dark': '#2bc89d',
          'secondary-dark': '#6dcdf5',
        },
        
        // Colores adicionales para gradientes (basados en tu propuesta)
        'cyan': {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
        }
      },
      // Extender gradientes personalizados
      backgroundImage: {
        'enfoolens-gradient': 'linear-gradient(135deg, #3cebb0 0%, #83e2fe 100%)',
        'enfoolens-light': 'linear-gradient(to bottom right, #f8f9fa 0%, #ecfeff 100%)',
      }
    },
  },
  plugins: [],
};