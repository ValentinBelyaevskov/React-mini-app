const data = {
   usersInfo: {
      users: [],
   },
   defaultAvatar: "./images/defaultAvatar.png",
   profile: {
      currentProfile: null,
      isFetching: false,
   },
   myProfile: null,
   login: null,
   loginError: null,
   captcha: null,
   profileStatus: null,
   statusIsFetching: false,
   APIUrl: "https://social-network.samuraijs.com/api/1.0",
   userPages: {
      pageSize: 5,
      pagesCount: 5,
      totalCount: 0,
      currentPageNumber: 1,
      firstPageNumber: 1,
      lastPageNumber: 5,
      isFetching: false,
      wasNotLoaded: false,
   },
   preloaderGif: "./gifs/__Iphone-spinner-1.gif",
}

export default data