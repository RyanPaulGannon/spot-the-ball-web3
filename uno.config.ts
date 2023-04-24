import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'
import presetAttributify from '@unocss/preset-attributify'

export default defineConfig({
  presets: [presetUno(), presetIcons(), presetAttributify()],
  shortcuts: {
    btn: 'rounded bg-white w-5/12 md:w-2/12 lg:w-1/12',
    p: 'text-white text-center',
  },
})
