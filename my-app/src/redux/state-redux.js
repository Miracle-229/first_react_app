import { combineReducers, createStore } from "redux";
import newsReducer from "./news-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";
import friendsReducer from "./friends-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
  NewsPage: newsReducer,
  MessagesPage: messagesReducer,
  FriendsPage: friendsReducer,
  sideBar: sidebarReducer,
  ProfilePage: profileReducer,
  auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
