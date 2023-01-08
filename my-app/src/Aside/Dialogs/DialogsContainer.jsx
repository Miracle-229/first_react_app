import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import "./Dialogs.scss"


let mapStateToProps=(state)=>{
    return{
        DialogsData:state.MessagesPage.DialogsData
    }   
}

const DialogsContainer=connect(mapStateToProps)(Dialogs)

export default DialogsContainer
