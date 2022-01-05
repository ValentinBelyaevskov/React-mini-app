import { useEffect, useownProps, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../generic/Button/Button";
import s from "./User.module.css";

const User = (props) => {
   const [avatar, setAvatar] = useState(props.defaultAvatar)
   const [followIsFetching, setFollowIsFetching] = useState(true);

   useEffect(() => {
      setFollowIsFetching(false)
      if (props.user.photos.small) {
         setAvatar(props.user.photos.small)
      }
   }, [])

   return (
      <div className={s.user}>
         <NavLink className={s.link} activeClassName={s.activeLink} to={`/Profile/${props.user.id}`}>
            <div className={s.avatar}>
               <img src={avatar} alt={"avatar"} />
            </div>
            <div className={s.name}>
               {props.user.name}
            </div>
         </NavLink>
         {
            props.myProfile ?
               (props.followed ?
                  <Button
                     clickHandler={() => {
                        if (followIsFetching) return
                        setFollowIsFetching(true);
                        props.unfollowThunk(props.user.id, setFollowIsFetching);
                     }}
                     text={"unfollow"}
                  />
                  : <Button
                     clickHandler={() => {
                        if (followIsFetching) return
                        setFollowIsFetching(true);
                        props.followThunk(props.user.id, setFollowIsFetching);
                     }}
                     text={"follow"}
                  />)
               : null
         }
      </div>
   )
}

export default User