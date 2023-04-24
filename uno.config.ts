import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'
import presetAttributify from '@unocss/preset-attributify'

export default defineConfig({
  presets: [presetUno(), presetIcons(), presetAttributify()],
  shortcuts: {
    h1: 'text-slate-800 pt-1.5',
    h2: 'text-white text-center pt-2',
    btn: 'rounded bg-white w-5/12 md:w-2/12 lg:w-1/12',
    main: 'bg-black h-screen',
    p: 'text-white text-center',
    sub: 'text-center p-4',
  },
})
