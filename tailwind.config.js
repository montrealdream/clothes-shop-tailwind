tailwind.config = {
    theme: {
        /** Customizing Screens */
        screens: {
            'sm': '575.98px',
            // => @media (min-width: 575.98px) { ... }

            'md': '767.98px',
            // => @media (min-width: 767.98) { ... }

            'lg': '991.98px',
            // => @media (min-width: 991.98) { ... }

            'xl': '1239.98px',
            // => @media (min-width: 1239.98) { ... }

            '2xl': '1239.98px',
            // => @media (min-width: 1536px) { ... }
        },
        
        /** Adding additional colors */ 
        extend: {
            colors: {
                primary: '#000000',
                secondary: '#00000099'
            },
        }
    },
  }