import { configureStore } from '@reduxjs/toolkit';
import resumeReducer from './resume/resume.reducer';
import {createLogger} from 'redux-logger';

let middlewares = [];
middlewares.push(createLogger());

const store = configureStore({
    reducer: {
        resume: resumeReducer
    },
    middleware: (middleware) => middleware().concat(...middlewares)
});

export default store;