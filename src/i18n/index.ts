import { createI18n } from "vue-i18n";
import en from "./en";
import zh from "./zh";

const i18n = createI18n({
  locale: 'zh', //设置本地语言
  messages: {
    zh: zh,
    en: en
  }
})

export default i18n