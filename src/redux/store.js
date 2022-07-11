import { configureStore } from '@reduxjs/toolkit';
import resumeReducer from './resume/resume.reducer';
import {createLogger} from 'redux-logger';

let middlewares = [];
let NODE_ENV = 'production';

if(NODE_ENV === 'developemnt') {
    middlewares.push(createLogger());
}

const store = configureStore({
    reducer: {
        resume: resumeReducer
    },
    middleware: (middleware) => middleware().concat(...middlewares)
});

export default store;