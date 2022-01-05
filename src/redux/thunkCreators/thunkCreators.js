import { profileAPI, userAPI, usersAPI } from "../../API/API";
import { setAllFollowValues, setCaptcha, setCurrentProfile, setFollowValue, setLogin, setLoginError, setMyProfile, setProfileIsFetching, setStatusIsFetching, setStatusValue, setTotalCount, setUserPageIsFetching, setUsers, setWasNotLoaded } from "../actionCreators/usersActionCreators";

export const setCurrentProfileThunk = userId => dispatch => {
   profileAPI.getProfilePromise(userId)
      .then(response => {
         dispatch(setCurrentProfile(response.data));
         dispatch(setProfileIsFetching(false));
      })
      .catch(error => {
         console.log(`setCurrentProfileThunk error: ${error.message}`);
         dispatch(setProfileIsFetching(false));
      })
}

export const setMyProfileThunk = myProfile => dispatch => {

   if (myProfile) {
      dispatch(setProfileIsFetching(false));
      return
   } else {
      profileAPI.setMyProfile()
         .then(myProfile => {
            if (myProfile) {
               setCurrentProfileThunk(myProfile.data.id)(dispatch);
               dispatch(setMyProfile(myProfile));
               dispatch(setLogin(true));
            } else {
               dispatch(setMyProfile(myProfile));
               dispatch(setProfileIsFetching(false));
               dispatch(setLogin(false));
            };
         })
   }
}

export const setUsersInfoThunk = (pageSize, currentPageNumber) => dispatch => {
   usersAPI.getUsersPromise(pageSize, currentPageNumber)
      .then(response => {
         dispatch(setUsers(response.data.items));
         dispatch(setTotalCount(response.data.totalCount));
         dispatch(setUserPageIsFetching(false));
         dispatch(setWasNotLoaded(false));
      })
      .catch(error => {
         console.log(`setUsersInfoThunk error: ${error.message}`)
         dispatch(setUserPageIsFetching(false));
         dispatch(setWasNotLoaded(true));
      })
}

export const setAllFollowValuesThunk = (users) => dispatch => {
   Promise.all(usersAPI.getAllFollowPromises(users))
      .then(responseArr => setAllFollowValues(responseArr.map(responseItem => responseItem.data)))
}

export const getUsersInfoThunk = (userId, setFollowIsFetching) => dispatch => {
   userAPI.getFollow(userId)
      .then(response => {
         dispatch(setFollowValue(userId, response.data));
         setFollowIsFetching(false);
      })
      .catch(error => {
         console.log(`getUsersInfoThunk error: ${error.message}`);
         setFollowIsFetching(false);
      })
};

export const followThunk = (userId, setFollowIsFetching) => dispatch => {
   userAPI.follow(userId)
      .then((response) => {
         if (response.data.resultCode === 0) getUsersInfoThunk(userId, setFollowIsFetching)(dispatch)
      })
      .catch(error => {
         console.log(`followThunk error: ${error.message}`);
         setFollowIsFetching(false);
      })
};

export const unfollowThunk = (userId, setFollowIsFetching) => dispatch => {
   userAPI.unfollow(userId)
      .then((response) => {
         if (response.data.resultCode === 0) getUsersInfoThunk(userId, setFollowIsFetching)(dispatch)
      })
      .catch(error => {
         console.log(`unfollowThunk error: ${error.message}`);
         setFollowIsFetching(false);
      })
};

export const getStatusValueThunk = userId => dispatch => {
   profileAPI.getProfileStatus(userId)
      .then(response => {
         dispatch(setStatusValue(response.data));
         dispatch(setStatusIsFetching(false));
      })
      .catch(error => {
         dispatch(setStatusIsFetching(false));
         console.log(`setStatusValueThunk error: ${error.message}`);
      })
}

export const updateStatusValueThunk = (status, userId) => dispatch => {
   profileAPI.updateProfileStatus(status)
      .then(response => {
         if (response.data.resultCode === 0) {
            getStatusValueThunk(userId)(dispatch)
         }
      })
}

export const loginThunk = ({login, password, rememberMe, captcha}) => dispatch => {
   profileAPI.login(login, password, rememberMe, captcha)
      .then(response => {
         if (response.data.resultCode === 1) {
            dispatch(setLoginError("Incorrect login or password"))
         } else if (response.data.resultCode === 10) {
            profileAPI.getCaptcha()
               .then(response => {
                  dispatch(setCaptcha(response.data.url))
               })
               .catch(error => {
                  console.log(`loginThunk error: ${error.message}`);
               })
            dispatch(setLoginError("The number of input attempts has been exceeded. Please enter a captcha."))
         } else if (response.data.resultCode === 0) {
            dispatch(setLoginError(false))
            dispatch(setLogin(true))
            dispatch(setCaptcha(null))
            dispatch(setLoginError(null))
         }
      })
      .catch(error => {
         dispatch(setLogin(false))
         console.log(`loginThunk error: ${error.message}`);
      })
}

export const logoutThunk = () => dispatch => {
   profileAPI.logout()
      .then(response => {
         dispatch(setMyProfile(null))
         dispatch(setCurrentProfile(null))
         dispatch(setLogin(false))
      })
      .catch(error => {
         dispatch(setLogin(false))
         console.log(`loginThunk error: ${error.message}`);
      })
}