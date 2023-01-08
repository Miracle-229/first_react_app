import messagesReducer from "./messages-reducer";
import newsReducer from "./news-reducer";
import sidebarReducer from "./sidebar-reducer";

let ADD_POST = "ADD-POST";
let UPDATE_POST = "UPDATE-POST";

let SEND_MESSAGE = "SEND-MESSAGE";
let UPDATE_MESSAGE = "UPDATE-MESSAGE";

let store = {
  _state: {
    NewsPage: {
      NewsData: [
        { post: "всё гуд" },
        { post: "всё супер гуд" },
        { post: "всё мега класс" },
        { post: "всё мега класс" },
      ],
      newPostText: "",
    },
    MessagesPage: {
      MessagesData: [
        { id: 1, message: "здарова чепушня" },
        { id: 2, message: "здарова качеля" },
      ],
      DialogsData: [
        { id: 1, name: "Андрей" },
        { id: 2, name: "Артём" },
        { id: 3, name: "Егор" },
        { id: 5, name: "Вадим" },
        { id: 6, name: "Ваня" },
        { id: 7, name: "хз какой-то ноунейм" },
        { id: 8, name: "хз какой-то ноунейм" },
      ],
      newMessageBody: "",
    },
    sideBar: {},
  },
  rerernderEntireTree() {
    console.log("hello");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._rerernderEntireTree = observer;
  },
  dispatch(action) {
    this._state.NewsPage = newsReducer(this._state.NewsPage, action);
    this._state.MessagesPage = messagesReducer(
      this._state.MessagesPage,
      action
    );
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);
    this._rerernderEntireTree(this._state);
  },
};
export let addPostActionCreaotor = () => ({
  type: ADD_POST,
});
export let updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_POST,
  newText: text,
});

export let addMessageActionCreaotor = () => ({
  type: SEND_MESSAGE,
});
export let updateNewMessageBodyActionCreator = (body) => ({
  type: UPDATE_MESSAGE,
  body: body,
});

export default store;
