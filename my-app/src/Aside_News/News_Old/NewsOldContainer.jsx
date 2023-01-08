import { addPostActionCreaotor, updateNewPostTextActionCreator } from '../../redux/news-reducer';
import NewsOld from './NewsOld';
import { connect } from 'react-redux';


let mapStateToProps=(state)=>{
    return{
        NewsData:state.NewsPage.NewsData,
        newPostText:state.NewsPage.newPostText
    }   
}

let mapDispatchToProps=(dispatch)=>{
    return{
        updateNewPostTextActionCreator:(text)=>{
            let action=updateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addPost:()=>{
            dispatch(addPostActionCreaotor())
        }
    }
}

const NewsOldContainer=connect(mapStateToProps,mapDispatchToProps)(NewsOld)

export default NewsOldContainer