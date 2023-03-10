import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../redux/auth-reducer";

const mapStetetoProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        debugger;
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
          this.props.setAuthUserData(id, email, login);
        }
      });
  }

  render() {
    return <Header {...this.props}></Header>;
  }
}

export default connect(mapStetetoProps, { setAuthUserData })(HeaderContainer);
