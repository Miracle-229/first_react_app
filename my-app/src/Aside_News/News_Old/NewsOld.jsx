import React from 'react';
import logo from "../382c5195604ff36d7a369206280a342d.jpg";
import "./NewsOld.scss";

let textarea=React.createRef();
  
let NewsPost=(props)=>{
    return(
        <div className="NewPost">
       <img src={logo} alt="" />
       <p>{props.post}</p>
        </div>
    );
}


const NewsOld=(props)=>{
    let PostElements=props.NewsData.map(post=><NewsPost post={post.post}></NewsPost>)
    let addPost=()=>{
        debugger;
        let text=textarea.current.value
        if(text === ""){
            alert("нельзя")
        }
        else props.addPost();
    }  
    let onPostChange=()=>{
       let text=textarea.current.value;
      props.updateNewPostTextActionCreator(text)
    }
    return(
        <div className="NewsOld">
        <div className="News_Add">
        <h1>Новости</h1>
        <textarea value={props.newPostText} onChange={onPostChange} ref={textarea}></textarea>
        <button onClick={addPost}></button>
        </div>
        {PostElements}
        </div>
    )
}

export default NewsOld