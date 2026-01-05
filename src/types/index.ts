export type Language = "en" | "ml";

export type Theme = "light" | "dark";

export type TranslationEntry = Record<Language, string>;

export type TranslationSchema = Record<string, TranslationEntry>;
