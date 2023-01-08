import { connect } from "react-redux";
import { addMessageActionCreaotor, updateNewMessageBodyActionCreator } from "../../redux/messages-reducer";
import Message from "./Message";
import "./Message.scss"


// const MessageContainer=(props)=>{
//     return(
//         <StoreContext.Consumer>
//         {
//             (store)=>{
//                 let state=store.getState();

//                 let onSendMessage=()=>{
//                  store.dispatch(addMessageActionCreaotor())
//                 }
            
//                 let onChangeMessage=(body)=>{
//                   store.dispatch(updateNewMessageBodyActionCreator(body))
//                 }
                 
//                 return(
//                     <Message onChangeMessage={onChangeMessage} onSendMessage={onSendMessage} newMessageBody={state.MessagesPage.newMessageBody} MessagesData={state.MessagesPage.MessagesData}></Message>
//                 );
//             }
//         }
//         </StoreContext.Consumer>
//     )

// }

let mapStateToProps=(state)=>{
    return{
        newMessageBody:state.MessagesPage.newMessageBody,
        MessagesData:state.MessagesPage.MessagesData
    }   
}

let mapDispatchToProps=(dispatch)=>{
    return{
        onChangeMessage:(body)=>{
            dispatch(updateNewMessageBodyActionCreator(body))
        },
        onSendMessage:()=>{
            dispatch(addMessageActionCreaotor())
        }
    }
}

const MessageContainer=connect(mapStateToProps,mapDispatchToProps)(Message)



export default MessageContainer