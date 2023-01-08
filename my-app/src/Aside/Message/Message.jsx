import "./Message.scss"

const MessageItem=(props)=>{;
  return(
    <li>{props.message}</li>
  );
}

const Message=(props)=>{

    let MessagesElements=props.MessagesData.map(message=><MessageItem message={message.message}></MessageItem>)

    let onSendMessage=()=>{
      props.onSendMessage();
    }

    let onChangeMessage=(e)=>{
      let body=e.target.value;
      props.onChangeMessage(body)
    }
     
    return(
        <div className="Message">
        <ul>
          {MessagesElements}
        </ul>
        <textarea value={props.newMessageBody} onChange={onChangeMessage}></textarea>
        <button onClick={onSendMessage}></button>
        </div>
    );
}

export default Message