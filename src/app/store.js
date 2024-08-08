import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import movieReducer from "../features/movie/movieSlice";
const listnerMiddleware = createListenerMiddleware({
  serializableCheck: false,
});
export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: (getDefultMiddleware) =>
    getDefultMiddleware().concat(listnerMiddleware.middleware),
});
