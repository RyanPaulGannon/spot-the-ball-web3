import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetWind from '@unocss/preset-wind'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [presetUno(), presetWind(), presetIcons()],
  shortcuts: {
    btn: 'rounded bg-white !important w-5/12 md:w-2/12 lg:w-1/12',
  },
})
