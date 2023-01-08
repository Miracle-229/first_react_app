let SEND_MESSAGE = "SEND-MESSAGE";
let UPDATE_MESSAGE = "UPDATE-MESSAGE";

let initialState = {
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
    { id: 7, name: "САНЁЧЕК" },
    { id: 8, name: "хз какой-то ноунейм" },
    { id: 9, name: "хз какой-то ноунейм" },
  ],
  newMessageBody: "",
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        MessagesData: [...state.MessagesData, { id: 3, message: body }],
      };
    }
    case UPDATE_MESSAGE: {
      return {
        ...state,
        newMessageBody: action.body,
      };
    }
    default:
      return state;
  }
};

export let addMessageActionCreaotor = () => ({
  type: SEND_MESSAGE,
});
export let updateNewMessageBodyActionCreator = (body) => ({
  type: UPDATE_MESSAGE,
  body: body,
});

export default messagesReducer;
