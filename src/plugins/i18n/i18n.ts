import { createI18n } from 'vue-i18n'

import en from '@/plugins/i18n/locales/en.json'
import jap from '@/plugins/i18n/locales/jap.json'
enum Locale {
	EN = 'en-US',
	JAP = 'ja',
}

const messages = {
	[Locale.EN]: en,
	[Locale.JAP]: jap,
}

const defaultLocale = Locale.EN

export const i18nPlugin = createI18n({
	messages,
	legacy: false,
	fallbackLocale: defaultLocale,
	locale: defaultLocale,
})
