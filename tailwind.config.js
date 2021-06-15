module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        basefont: ['Quicksand', 'sans-serif'],
        contentfont: ['Open Sans', 'Quicksand', 'sans-serif'],
      },
      spacing: {
        headerht: '140px',
        gridgap: '3.75rem', // 60px
        gridgapv: '7.5rem', // 60px
        sidebarWidth: '20vw',
        leftspace: `calc(20vw + 80px)`,
        crossgap: '80px',
        logosize: '80px',
        contentgap: '15px',
      },
      borderWidth: { 5: `5px`, 1: `1px` },
      colors: {
        '000': '#000000',
        black: '#0f1010',
        gray: '#808080',
        fff: '#ffffff',
        pageborder: `#031d44`,
        lblue: `#dae5f2`,
        dblue: `#212529`,
        whitesmoke: 'whitesmoke',
        bodytext: '#4c4c4c',
        cardborder: 'rgba(0,0,0,0.25)',
      },
      screens: {
        widephone: '660px',
        tablet: '890px',
        med: '1090px',
        large: '1615px',
      },
      transitionTimingFunction: {
        customtf: 'cubic-bezier(0.22, 0.82, 0.3, 0.99)',
      },
      keyframes: {
        fadeInLeftKeyframes: {
          '0%': { opacity: '0', transform: 'translateX(-15px)' },
          '100%': { opacity: '1', transform: 'none' },
        },
        fadeInRightKeyframes: {
          '0%': { opacity: '0', transform: 'translateX(15px)' },
          '100%': { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        fadeInLeft1: 'fadeInLeftKeyframes forwards 1s ease',
        fadeInLeft2: 'fadeInRightKeyframes forwards 1s ease 0.5s',
        fadeInLeft3: 'fadeInLeftKeyframes forwards 1s ease 1s',
        fadeInLeft4: 'fadeInRightKeyframes forwards 1s ease 1.5s',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
