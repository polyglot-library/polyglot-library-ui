export const baseLanguageSelector = (state) => (
  state.translation.baseLanguage
);

export const selectedLanguageSelector = (state) => (
  state.translation.selectedLanguage
);

export const supportedLanguagesSelector = (state) => (
  state.translation.supportedLanguages
);

export const baseLanguageObjectSelector = (state) => {
  const baseLanguage = baseLanguageSelector(state);
  const supportedLanguages = supportedLanguagesSelector(state);

  return supportedLanguages.find(
      (lang) => lang.key === baseLanguage
  );
};


export const optionsLanguagesSelector = (state) => {
  const baseLanguage = baseLanguageSelector(state);
  const supportedLanguages = supportedLanguagesSelector(state);

  return supportedLanguages.filter(
      (lang) => lang.key !== baseLanguage
  );
};

export const baseKeysSelector = (state) => {
  const language = baseLanguageSelector(state);
  return state.translation.keys[language];
};

export const selectedKeysSelector = (state) => {
  const language = selectedLanguageSelector(state);
  return state.translation.keys[language];
};

export const selectedTranslateKeySelector = (state) => {
  const keys = selectedKeysSelector(state);
  return keys?.find((item) => item.key === state.translation.selectedTranslateKey?.key);
};
