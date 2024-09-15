import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
  content: [
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'app.{js,ts,vue}',
    'app.{js,ts,vue}',
    'error.{js,ts,vue}',
    'error.{js,ts,vue}',
    'content/**/*.md'
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.green
      }
    }
  }
}
