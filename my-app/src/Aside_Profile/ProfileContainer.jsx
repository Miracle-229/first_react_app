import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { ProfileApi } from "../api/Api";
import { setUserProfile } from "../redux/profile-reducer";
import "./Aside_Profile.scss";
import ProfileAbove from "./ProfileAbove";

let mapStateToProps = (state) => ({
  profile: state.ProfilePage.profile,
});
export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userID;
    ProfileApi(userID).then((response) => {
      this.props.setUserProfile(response.data);
    });
  }

  render() {
    return (
      <ProfileAbove {...this.props} profile={this.props.profile}></ProfileAbove>
    );
  }
}
let ProfileUrlContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  ProfileUrlContainer
);
