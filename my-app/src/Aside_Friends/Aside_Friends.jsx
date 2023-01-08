import styles from "./Aside_Friends.module.scss";
import React from "react";
import { NavLink } from "react-router-dom";

const AsideFriends = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={styles.CurrentPageWrap}>
        {pages.map((p) => {
          return (
            <span
              onClick={(e) => {
                props.onpageNumber(p);
              }}
              className={props.currentPage === p && styles.CurrentPage}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.FriendsData.map((u) => (
        <div key={u.id} className={styles.Aside_Friends}>
          <div className={styles.friends_button}>
            <NavLink to={"/profile/" + u.id}>
              <img src={u.avatar} alt="" />
            </NavLink>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {    
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              )}
            </div>
          </div>
          <div className={styles.friends_content}>
            <div className={styles.friends_content_column}>
              <p>Имя:{u.first_name}</p>
              <p>Фамилия:{u.last_name}</p>
            </div>
            <div className={styles.friends_content_column}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AsideFriends;
