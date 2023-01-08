let ADD_POST = "ADD-POST";
let UPDATE_POST = "UPDATE-POST";

let initialState = {
  NewsData: [
    { post: "всё гуд" },
    { post: "всё супер гуд" },
    { post: "всё мега класс" },
    { post: "всё мега класс" },
  ],
  newPostText: "",
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        post: state.newPostText,
      };
      return {
        ...state,
        newPostText: "",
        NewsData: [...state.NewsData, newPost],
      };
    }
    case UPDATE_POST: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    default:
      return state;
  }
};

export let addPostActionCreaotor = () => ({
  type: ADD_POST,
});
export let updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_POST,
  newText: text,
});

export default newsReducer;
