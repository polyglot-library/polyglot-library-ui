import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'translation',
  initialState: {
    baseLanguage: 'pt-br',
    selectedLanguage: 'en-us',
    supportedLanguages: ['pt-br', 'en-us', 'es-ar'],
    keys: {
      'pt-br': {
        'general.name': {
          label: 'Nome',
          lastUpdated: new Date()
        },
        'general.gender': {
          label: 'Genêro',
          revised: ['Wally'],
          lastUpdated: new Date()
        },
        'general.age': {
          label: 'Idade',
          lastUpdated: new Date()
        }
      },
      'en-us': {
        'general.name': {
          label: 'Name',
          lastUpdated: new Date()
        },
        'general.gender': {
          label: 'Gender',
          lastUpdated: new Date()
        }
      },
      'es-ar': {
      }
    },
    selectedTransatedKey: {}
  },
  reducers: {
    setBaseLanguage: (state, action) => {
      state.baseLanguage = action.payload;
    },
    setSelectedLanguage: (state, action) => {
      state.baseLanguage = action.payload;
    },
    setSupportedLanguages: (state, action) => {
      state.supportedLanguages = action.payload;
    },
    setKeys: (state, action) => {
      state.keys[action.payload.language] = action.payload.keys;
    },
    setSelectedTransatedKey: (state, action) => {
      state.selectedTransatedKey = action.payload
    }
  },
});

export const { setScreenSize } = slice.actions;
export default slice.reducer;
