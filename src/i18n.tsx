import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enJson from "./locales/en.json"
import jaJson from "./locales/ja.json"


i18n
  .use(initReactI18next)
  .init({
  resources: { // 自分の用意した翻訳ファイルを任意の場所から読み込む
    en: {
      translation: enJson
    },
    ja: {
      translation: jaJson
    }
  },
  debug: process.env.NODE_ENV === "development",
  fallbackLng: 'en', // デフォルトの言語を設定する
  interpolation: {
    escapeValue: false,
  },
})

export default i18n