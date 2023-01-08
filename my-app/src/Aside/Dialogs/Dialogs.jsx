import { NavLink } from "react-router-dom";
import "./Dialogs.scss"

const DialogItem=(props)=>{
  let path="/dialogs/"+props.id;
  return(
    <li> <NavLink activeClassName="activeLinkDialogs" to={path}>{props.name}</NavLink></li>
  );
}

const Dialogs=(props)=>{
    let DialogsElements=props.DialogsData.map(dialog=><DialogItem name={dialog.name} id={dialog.id}></DialogItem>)
    return(
      <div className="Dialogs">
    <h3>Dialogs</h3>
    <ul>
    {DialogsElements}
    </ul>
    </div>
    );
}

export default Dialogs
