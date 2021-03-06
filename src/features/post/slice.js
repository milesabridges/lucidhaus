import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    post: [],
    posts: [],
    error: false
}

export const slice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {
        getPostSuccess: (state, action) => {
            state.post = action.payload
        },
        getPostsSuccess: (state, action) => {
            state.posts = action.payload
        },
        getPostsFailure: (state, action) => {
            state.error = action.payload
        },
        updatePostFailure: (state, action) => {
            state.error = action.payload
        },
        updatePostSuccess: (state, action) => {
            state.post = action.payload
        },
        destroyPostSuccess: (state, action) => {
            state.posts = state.posts.filter(item => item.objectID !== action.payload.objectID)
        },
    },
})


export default slice.reducer
