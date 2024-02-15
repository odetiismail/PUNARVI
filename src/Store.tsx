import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Slice/CounterSlice'
// ...

export const store = configureStore({
  reducer: {
   data:counterSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch