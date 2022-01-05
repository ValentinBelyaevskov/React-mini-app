import PreloaderContainer from './PreloaderContainer';
import s from './Profile.module.scss'
import UserDataContainer from './UserDataContainer';
import UserPageNotFound from './UserPageNotFound';
import { useEffect } from "react";
import LoginContainer from './LoginContainer';

const Profile = (props) => {
   useEffect(() => {
      props.setProfileIsFetching(true);
      if (props.match.params.userId) {
         props.setCurrentProfileThunk(props.match.params.userId);
      } else if (props.myProfile) {
         props.setCurrentProfileThunk(props.myProfile.data.id);
      } else {
         props.setMyProfileThunk(props.myProfile);
      }
      return () => {
         props.setCurrentProfile(null);
      }
   }, [props.match.params.userId, props.login]);

   useEffect(() => {
      if (props.currentProfile) {
         props.setStatusIsFetching(true)
         props.getStatusValueThunk(props.currentProfile.userId)
      }
   }, [Boolean(props.currentProfile)])

   useEffect(() => {
      return () => {
         props.setCurrentProfile(null)
      }
   }, [])

   if (
      props.isFetching
      || (props.statusIsFetching && (props.myProfile || props.currentProfile))
      ||(!props.myProfile && props.currentProfile && !props.match.params.userId)
      ) {
      return (
         <div className={s.profile}>
            <PreloaderContainer />
         </div>
      )
   } else {
      if ((props.currentProfile && props.myProfile) || (props.currentProfile && props.match.params.userId)) {
         return (<div className={s.profile}>
            <UserDataContainer currentProfile={props.currentProfile} />
         </div>)
      } else if (!props.myProfile && !props.currentProfile && !props.match.params.userId) {
         return (<div className={s.profile}>
            <LoginContainer />
         </div>)
      } else if (!props.currentProfile) {
         return (<div className={s.profile}>
            <UserPageNotFound />
         </div>)
      }
   }
}

export default Profile;