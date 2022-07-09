import { createSlice } from "@reduxjs/toolkit";
import { PROFILE } from './../../data/review.data';

export const resumeSlice = createSlice({
    name: 'resume',
    initialState: {
        resume: PROFILE,
        template: 'review1_template',
        dimension: { width: 0, height: 0}
    },
    reducers: {
        changeTemplate: (state, action) => {
            state.template = action.payload;
        },
        updateResume: (state, action) => {
            state.resume = {
                ...state.resume,
                ...action.payload
            }
        },
        updateOptions: (state, action) => {
            state.options = {
                ...state.options,
                ...action.payload
            }
        },
        updateDimension: (state, action) => {
            state.dimension = {
                ...state.dimension,
                ...action.payload
            }
        }
    },
})

export const { changeTemplate, updateResume, updateOptions, updateDimension } = resumeSlice.actions;
export default resumeSlice.reducer;