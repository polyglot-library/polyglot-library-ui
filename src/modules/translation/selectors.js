export const baseLanguageSelector = (state) => (
  state.translation.baseLanguage
);

export const selectedLanguageSelector = (state) => (
  state.translation.selectedLanguage
);

export const supportedLanguagesSelector = (state) => (
  state.translation.selectedLanguage
);

export const baseKeysSelector = (state) => {
  const language = baseLanguageSelector(state);
  console.info(state.translation.keys)
  return state.translation.keys[language];
};

export const selectedKeysSelector = (state) => {
  const language = selectedLanguageSelector(state);
  return state.translation.keys[language];
};

export const selectedTranslateKeySelector = (state) => (
  state.translation.selectedTranslateKey
);
