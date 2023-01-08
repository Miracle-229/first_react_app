import "./Aside_Profile.scss";
import krutilka from "../Aside_Friends/Infinity-2s-223px.gif";
// import kentik from "./TVBp0EfZshg.jpg"

const AsideProfile = (props) => {
  debugger;
  if (!props.profile) {
    return <img alt="" src={krutilka}></img>;
  }
  return (
    <div className="Aside_Profile">
      <div className="Aside_Profile_content">
        <div className="content_column_first">
          <img src={props.profile.avatar} alt="" />
        </div>
        <div className="content_column_second">
          <h3>
            {props.profile.first_name} {props.profile.last_name}
          </h3>
          <p>{props.profile.status}</p>
          <hr />
          <p>Дата рождения:{props.profile.date}</p>
          <p>Город:{props.profile.city}</p>
          <p>Деятельность:{props.profile.activity}</p>
          <p>Хобби:{props.profile.hobby}</p>
        </div>
      </div>
      <div className="Aside_Profile_footer"></div>
    </div>
  );
};

export default AsideProfile;
