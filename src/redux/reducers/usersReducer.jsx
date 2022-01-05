import { fromJS } from "immutable";
import data from "../data/data";


const setUsers = (stateMap, action) => {
   return stateMap.setIn(["usersInfo", "users"], action.users)
}

const setTotalCount = (stateMap, action) => {
   return stateMap.setIn(["userPages", "totalCount"], action.totalCount)
}

const setCurrentPageNumber = (stateMap, action) => {
   return stateMap.setIn(["userPages", "currentPageNumber"], action.currentPageNumber)
}

const setFirstPageNumber = (stateMap, action) => {
   return stateMap.setIn(["userPages", "firstPageNumber"], action.firstPageNumber)
}

const setNewFirstPageNumber = (stateMap, action) => {
   const pageParameters = action.pageParameters;
   if (
      (pageParameters.pageNumber === pageParameters.firstPageNumber && pageParameters.firstPageNumber === 1)
      || (pageParameters.pageNumber === pageParameters.lastPageNumber
         && pageParameters.firstPageNumber === pageParameters.lastPageNumber - pageParameters.pagesCount + 1)
      || (pageParameters.pageNumber > pageParameters.firstPageNumber && pageParameters.pageNumber < pageParameters.firstPageNumber + (pageParameters.pagesCount - 1))
   ) return stateMap

   if (pageParameters.pageNumber === pageParameters.firstPageNumber + (pageParameters.pagesCount - 1)) {
      return stateMap.setIn(["userPages", "firstPageNumber"], pageParameters.firstPageNumber + 1)
   } else if (pageParameters.pageNumber === pageParameters.firstPageNumber) {
      return stateMap.setIn(["userPages", "firstPageNumber"], pageParameters.firstPageNumber - 1)
   }
}

const setUserPageIsFetching = (stateMap, action) => {
   return stateMap.setIn(["userPages", "isFetching"], action.isFetching)
}

const setLastPageNumber = (stateMap, action) => {
   return stateMap.setIn(["userPages", "lastPageNumber"], action.lastPageNumber)
}

const setCurrentProfile = (stateMap, action) => {
   return stateMap.setIn(["profile", "currentProfile"], action.currentProfile)
}

const setWasNotLoaded = (stateMap, action) => {
   return stateMap.setIn(["userPages", "wasNotLoaded"], action.wasNotLoaded)
}

const setProfileIsFetching = (stateMap, action) => {
   return stateMap.setIn(["profile", "isFetching"], action.isFetching)
}

const setMyProfile = (stateMap, action) => {
   return stateMap.setIn(["myProfile"], action.myProfile)
}

const setFollowValue = (stateMap, action) => {
   let state = stateMap.toJS();
   state.usersInfo.users.forEach(user => {
      if (user.id === action.userId) {
         user.followed = action.followValue;
      }
   })
   return fromJS(state)
}

const setAllFollowValues = (stateMap, action) => {
   const state = stateMap.toJS();
   state.usersInfo.users.forEach((user, i) => {
      user.followed = action.allFollowPromises[i]
   })
   return fromJS(state);
}

const setPagesCount = (stateMap, action) => {
   return stateMap.setIn(["userPages", "pagesCount"], action.pagesCount)
}

const setStatusValue = (stateMap, action) => {
   return stateMap.setIn(["profileStatus"], action.statusValue)
}

const setStatusIsFetching = (stateMap, action) => {
   return stateMap.setIn(["statusIsFetching"], action.statusIsFetching)
}

const setLogin = (stateMap, action) => {
   return stateMap.setIn(["login"], action.login)
}

const setLoginError = (stateMap, action) => {
   return stateMap.setIn(["loginError"], action.loginError)
}

const setCaptcha = (stateMap, action) => {
   return stateMap.setIn(["captcha"], action.captcha)
}


const initialState = data;

const usersReducer = (state = initialState, action) => {
   const stateMap = fromJS(state);

   switch (action.type) {
      case "SET-USERS":
         return setUsers(stateMap, action).toJS();

      case "SET-TOTAL-USERS-COUNT":
         return setTotalCount(stateMap, action).toJS();

      case "SET-CURRENT-PAGE-NUMBER":
         return setCurrentPageNumber(stateMap, action).toJS();

      case "SET-FIRST-PAGE-NUMBER":
         return setFirstPageNumber(stateMap, action).toJS();

      case "SET-NEW-FIRST-PAGE-NUMBER":
         return setNewFirstPageNumber(stateMap, action).toJS();

      case "SET-USER-PAGE-IS-FETCHING":
         return setUserPageIsFetching(stateMap, action).toJS();

      case "SET-LAST-PAGE-NUMBER":
         return setLastPageNumber(stateMap, action).toJS();

      case "SET-CURRENT-PROFILE":
         return setCurrentProfile(stateMap, action).toJS();

      case "SET-WAS-NOT-LOADED":
         return setWasNotLoaded(stateMap, action).toJS();

      case "SET-PROFILE-IS-FETCHING":
         return setProfileIsFetching(stateMap, action).toJS();

      case "SET-MY-PROFILE":
         return setMyProfile(stateMap, action).toJS();

      case "SET-FOLLOW-VALUE":
         return setFollowValue(stateMap, action).toJS();

      case "SET-ALL-FOLLOW-VALUES":
         return setAllFollowValues(stateMap, action).toJS();

      case "SET-PAGES-COUNT":
         return setPagesCount(stateMap, action).toJS();

      case "SET-STATUS-VALUE":
         return setStatusValue(stateMap, action).toJS();

      case "SET-STATUS-IS-FETCHING":
         return setStatusIsFetching(stateMap, action).toJS();

      case "SET-LOGIN":
         return setLogin(stateMap, action).toJS();

      case "SET-LOGIN-ERROR":
         return setLoginError(stateMap, action).toJS();

      case "SET-CAPTCHA":
         return setCaptcha(stateMap, action).toJS();

      default:
         return stateMap.toJS();
   }
}

export default usersReducer