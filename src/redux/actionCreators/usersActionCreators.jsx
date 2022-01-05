export const setUsers = users => (
   {
      type: "SET-USERS",
      users,
   }
)

export const setTotalCount = totalCount => (
   {
      type: "SET-TOTAL-USERS-COUNT",
      totalCount,
   }
)

export const setCurrentPageNumber = currentPageNumber => (
   {
      type: "SET-CURRENT-PAGE-NUMBER",
      currentPageNumber,
   }
)

export const setFirstPageNumber = firstPageNumber => (
   {
      type: "SET-FIRST-PAGE-NUMBER",
      firstPageNumber,
   }
)

export const setNewFirstPageNumber = pageParameters => (
   {
      type: "SET-NEW-FIRST-PAGE-NUMBER",
      pageParameters,
   }
)

export const setUserPageIsFetching = isFetching => (
   {
      type: "SET-USER-PAGE-IS-FETCHING",
      isFetching,
   }
)

export const setLastPageNumber = lastPageNumber => (
   {
      type: "SET-LAST-PAGE-NUMBER",
      lastPageNumber,
   }
)

export const setCurrentProfile = currentProfile => (
   {
      type: "SET-CURRENT-PROFILE",
      currentProfile,
   }
)

export const setWasNotLoaded = wasNotLoaded => (
   {
      type: "SET-WAS-NOT-LOADED",
      wasNotLoaded,
   }
)

export const setProfileIsFetching = isFetching => (
   {
      type: "SET-PROFILE-IS-FETCHING",
      isFetching,
   }
)

export const setMyProfile = myProfile => (
   {
      type: "SET-MY-PROFILE",
      myProfile,
   }
)

export const setFollowValue = (userId, followValue) => (
   {
      type: "SET-FOLLOW-VALUE",
      userId,
      followValue,
   }
)

export const setAllFollowValues = allFollowPromises => (
   {
      type: "SET-ALL-FOLLOW-VALUES",
      allFollowPromises,
   }
)

export const setPagesCount = pagesCount => (
   {
      type: "SET-PAGES-COUNT",
      pagesCount,
   }
)

export const setStatusValue = statusValue => (
   {
      type: "SET-STATUS-VALUE",
      statusValue,
   }
)

export const setStatusIsFetching = statusIsFetching => (
   {
      type: "SET-STATUS-IS-FETCHING",
      statusIsFetching,
   }
)

export const setLogin = login => (
   {
      type: "SET-LOGIN",
      login,
   }
)

export const setLoginError = loginError => (
   {
      type: "SET-LOGIN-ERROR",
      loginError,
   }
)

export const setCaptcha = captcha => (
   {
      type: "SET-CAPTCHA",
      captcha,
   }
)