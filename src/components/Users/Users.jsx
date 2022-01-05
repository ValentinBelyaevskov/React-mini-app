import { useEffect } from "react";
import UserContainer from "./User/UserContainer";
import s from "./Users.module.css";
import UsersPageToggleContainer from "./UsersPageToggle/UsersPageToggleContainer";
import WasNotLoaded from "./WasNotLoaded";

const Users = (props) => {
   // * Обновление props, map массива users, задание статуса загрузки данных (isFetching) true и false
   useEffect(() => {
      return () => {
         props.setUserPageIsFetching(false)
         props.setFirstPageNumber(1);
         props.setCurrentPageNumber(1);
         props.setUsers([]);
      };
   }, [])

   useEffect(() => {
      props.setUserPageIsFetching(true);
      props.setUsersInfoThunk(props.pageSize, props.currentPageNumber);
   }, [props.currentPageNumber]);

   useEffect(() => {
      if (props.users.length > 0 && props.myProfile) {
         props.setAllFollowValuesThunk(props.users)
      }
   }, [props.users.length])

   return (
      <div className={s.users}>
         <h3 className={s.usersTitle}>Users list</h3>
         <UsersPageToggleContainer />
         {
            props.wasNotLoaded ?
               <WasNotLoaded />
               : (
                  <div className={s.aListOfUsers}>
                     {
                        props.users.map(user =>
                           <UserContainer key={user.name} user={user} />
                        )
                     }
                  </div>
               )
         }
      </div>
   )
}

export default Users