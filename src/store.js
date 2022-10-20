import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/main';
const store=configureStore({
    reducer:rootReducer,
}
)


export default store;