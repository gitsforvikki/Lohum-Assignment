import {combineReducers} from 'redux';
import * as eventReducer from '../redux/events/event.reducer';

export const rootReducer  = combineReducers({
  [eventReducer.eventFeaturesKey]:eventReducer.reducer
  
});