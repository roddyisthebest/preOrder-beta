import {configureStore} from '@reduxjs/toolkit';
import reducer from './slice';
import Reactotron from '../reactoron.config';
export default configureStore({
  reducer,
  enhancers: [(Reactotron as any).createEnhancer()],
});
