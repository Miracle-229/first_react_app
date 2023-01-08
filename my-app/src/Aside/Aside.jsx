import "./Aside.scss" 
import { BrowserRouter} from "react-router-dom";
import MessageContainer from "./Message/MessageContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";



const Aside=(props)=>{
    return(
        <BrowserRouter>
        <div className="Aside">
        <DialogsContainer  ></DialogsContainer>
        <MessageContainer  ></MessageContainer>
        </div>
        </BrowserRouter>
    );
}

export default Aside
