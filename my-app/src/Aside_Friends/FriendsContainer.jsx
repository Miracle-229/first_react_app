import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setTooggleIsFatching,
  setUsers,
  setTooggleIsFatchingFollowing,
  setUsersTotalCount,
  unfollow,
} from "../redux/friends-reducer";
import AsideFriends from "./Aside_Friends";
import React from "react";
import loading from "./Infinity-2s-223px.gif";
import { UsersApi } from "../api/Api";

let mapStateToProps = (state) => {
  return {
    FriendsData: state.FriendsPage.FriendsData,
    pageSize: state.FriendsPage.pageSize,
    totalUsersCount: state.FriendsPage.totalUsersCount,
    currentPage: state.FriendsPage.currentPage,
    isFetching: state.FriendsPage.isFetching,
    followingProgress: state.FriendsPage.followingProgress,
  };
};
class FriendsApiContainer extends React.Component {
  componentDidMount() {
    this.props.setTooggleIsFatching(true);
    UsersApi(this.props.pageSize, this.props.currentPage).then((response) => {
      this.props.setTooggleIsFatching(false);
      this.props.setUsers(response.data);
    });
  }
  onpageNumber = (pageNumber) => {
    this.props.setTooggleIsFatching(true);
    this.props.setCurrentPage(pageNumber);
    UsersApi(this.props.pageSize, pageNumber).then((response) => {
      this.props.setTooggleIsFatching(false);
      this.props.setUsers(response.data);
    });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <img alt="" src={loading} /> : null}
        <AsideFriends
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onpageNumber={this.onpageNumber}
          FriendsData={this.props.FriendsData}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          setTooggleIsFatchingFollowing={
            this.props.setTooggleIsFatchingFollowing
          }
        ></AsideFriends>
      </>
    );
  }
}

const FriendsContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  setTooggleIsFatching,
  setTooggleIsFatchingFollowing,
})(FriendsApiContainer);

export default FriendsContainer;
