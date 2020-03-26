import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './modules/ui/slice';
import userReducer from './modules/user/slice';
import translationReducer from './modules/translation/slice';

export default configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
    translation: translationReducer,
  },
});
