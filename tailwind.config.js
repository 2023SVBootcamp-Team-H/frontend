/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dontworrybg: '#1D1136',
        mainbutton: '#885BD6',
        pageOutline: '#AF9ECC',
        pageBackgroud: '#E9E4DA',
        frameColor: '#727272',
        textTitle: '#4E157A',
        textCategory: '#2C2C2C',
        satisfactionTop: '#C5A7EC',
        satisfactionBack: '#F2F1F3',
        satisfactionButton: '#E3D8F0',
        likeBackgroud: '#F4F1EC',
      },
      fontFamily: {
        sans: ['NanumGothic', 'Arial', 'sans-serif'],
        ham: ['HahmletRegular', 'sans-serif'],
        'ham-b': ['HahmletBold', 'sans-serif'],
        'ham-l': ['HahmletLight', 'sans-serif'],
        'ham-m': ['HahmletMedium', 'sans-serif'],
        'ham-sb': ['HahmletSemiBold', 'sans-serif'],
      },
      backgroundImage: {
        bgmain: "url('@/assets/images/backgroundMain.png')",
        bgsub: "url('@/assets/images/backgroundSub.png')",
        bookframe: "url('@/assets/images/frame.png')",
      },
    },
  },

  plugins: [],
};
