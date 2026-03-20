/** @type {import('tailwindcss').Config} */
export default {
<<<<<<< HEAD
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        navy: {
          50: "#f0f4ff",
          100: "#e0e9ff",
          200: "#c7d6ff",
          300: "#a4b8ff",
          400: "#7a8fff",
          500: "#4f62ff",
          600: "#3340f5",
          700: "#2730e0",
          800: "#2228b5",
          900: "#1b2080",
          950: "#0f1240",
        },
        cyan: {
          50: "#effcfc",
          100: "#d6f5f5",
          200: "#b2ecec",
          300: "#7ddfdf",
          400: "#3ecece",
          500: "#22b3b3",
          600: "#179090",
          700: "#177474",
          800: "#185c5c",
          900: "#184d4d",
          950: "#082e2e",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
=======
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
         primary: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7', // Brand Deep Blue
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
            950: '#082f49',
         },
         teal: {
            50: '#f0fdfa',
            100: '#ccfbf1',
            200: '#99f6e4',
            300: '#5eead4',
            400: '#2dd4bf',
            500: '#14b8a6', // Secondary Cyan/Teal
            600: '#0d9488',
            700: '#0f766e',
            800: '#115e59',
            900: '#134e4a',
            950: '#042f2e',
         }
       },
       boxShadow: {
         'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
         'premium': '0 10px 30px -5px rgba(2, 132, 199, 0.08), 0 4px 10px -2px rgba(0, 0, 0, 0.04)',
         'glow': '0 0 20px rgba(2, 132, 199, 0.3)',
       },
       fontFamily: {
         sans: ['Inter', 'system-ui', 'sans-serif'],
         display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
       }
>>>>>>> origin/main
    },
  },
  plugins: [],
}
