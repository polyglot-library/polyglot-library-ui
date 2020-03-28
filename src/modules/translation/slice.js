import { createSlice } from '@reduxjs/toolkit';
import {
  selectedKeysSelector
} from './selectors';

export const slice = createSlice({
  name: 'translation',
  initialState: {
    baseLanguage: 'pt-br',
    selectedLanguage: 'en-us',
    supportedLanguages: [{
      key: 'pt-br',
      label: 'Português (Brasil)'
    }, {
      key: 'en-us',
      label: 'Inglês'
    }, {
      key: 'es-ar',
      label: 'Espanhol (Argentina)'
    }],
    keys: {
      'pt-br': [{
        key: 'general.name',
        label: 'Nome',
        lastUpdate: new Date()
      }, {
        key: 'general.gender',
        label: 'Genêro',
        revised: ['Wally'],
        lastUpdate: new Date()
      }, {
        key: 'general.age',
        label: 'Idade',
        lastUpdate: new Date()
      }],
      'en-us': [{
        key: 'general.gender',
        label: 'Gender',
        revised: ['Wally'],
        lastUpdate: new Date()
      }, {
        key: 'general.age',
        label: 'Age',
        lastUpdate: new Date()
      }]
    },
    selectedTransatedKey: {}
  },
  reducers: {
    setBaseLanguage: (state, action) => {
      state.baseLanguage = action.payload;
    },
    setSelectedLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },
    setSupportedLanguages: (state, action) => {
      state.supportedLanguages = action.payload;
    },
    setKeys: (state, action) => {
      state.keys[action.payload.language] = action.payload.keys;
    },
    setSelectedTranslateKey: (state, action) => {
      state.selectedTranslateKey = action.payload;
    },
    updateSelectedTranslateKey: (state, action) => {
    // updateTranslateKey: (state, action) => {
      const baseKeys = state.keys[state.selectedLanguage];
      if (!baseKeys) {
        return state;
      }
      const updateKey = baseKeys.find((item, i) => item.key === action.payload.key);
      console.info(action.payload);

      if (updateKey) {
        console.info('WTFFF');
        updateKey.label = action.payload.label;
        updateKey.lastUpdate = new Date();
        if (typeof updateKey.revised !== 'Array') {
          updateKey.revised = [];
        }
        updateKey.revised.push('wally');
      }
    }
  }
});


// // Thunk async action
// export const updateSelectedTranslateKey = (payload) => async (dispatch, getState) => {
//   const keys = selectedKeysSelector(state);

// }

export const {
  setBaseLanguage,
  setSelectedLanguage,
  setSupportedLanguages,
  setKeys,
  setSelectedTranslateKey,
  updateSelectedTranslateKey
} = slice.actions;

export default slice.reducer;
