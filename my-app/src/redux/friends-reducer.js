let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET_USERS";
let SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
let SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
let TOOGLE_ISFETCHING = "TOOGLE_ISFETCHING";
let TOOGLE_ISFETCHING_FOLLOWING = "TOOGLE_ISFETCHING_FOLLOWING";

let initialState = {
  FriendsData: [],
  pageSize: 5,
  totalUsersCount: 25,
  currentPage: 1,
  isFetching: true,
  followingProgress: false,
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        FriendsData: state.FriendsData.map((u) => {
          if (u.id === action.userid) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        FriendsData: state.FriendsData.map((u) => {
          if (u.id === action.userid) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, FriendsData: [...action.users] };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_USERS_TOTAL_COUNT: {
      return { ...state, totalUsersCount: action.currentTotalUsersCount };
    }
    case TOOGLE_ISFETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOOGLE_ISFETCHING_FOLLOWING: {
      return { ...state, followingProgress: action.isFetching };
    }
    default:
      return state;
  }
};

export let follow = (userid) => ({
  type: FOLLOW,
  userid,
});
export let unfollow = (userid) => ({
  type: UNFOLLOW,
  userid,
});
export let setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export let setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export let setUsersTotalCount = (currentTotalUsersCount) => ({
  type: SET_USERS_TOTAL_COUNT,
  currentTotalUsersCount,
});
export let setTooggleIsFatching = (isFetching) => ({
  type: TOOGLE_ISFETCHING,
  isFetching,
});

export let setTooggleIsFatchingFollowing = (isFetching) => ({
  type: TOOGLE_ISFETCHING_FOLLOWING,
  isFetching,
});

export default friendsReducer;
