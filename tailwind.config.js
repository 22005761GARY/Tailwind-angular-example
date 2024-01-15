/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      //自訂顏色選項，若有改動需要rebuild css，請在終端機輸入: ng build
      //結束完後Tailwind CSS IntelliSense就可以看到你所定義的新顏色了
      //(想看怎麼客製化可以在終端機輸入: npx tailwindcss init --full，裡面有tailwind所有預設資訊)
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontFamily: {
        //看@import的family={}放的名稱
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}
