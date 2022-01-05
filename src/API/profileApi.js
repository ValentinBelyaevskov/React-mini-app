import { restAPI } from "./restAPI";

export class profileApi extends restAPI {
   constructor() {
      super()
   }

   getProfilePromise = userId => this.instance(`profile/${userId}`)

   authMe = () => this.instance("auth/me")

   login = (email, password, rememberMe, captcha) => captcha ?
      this.instance.post("auth/login", { email, password, rememberMe, captcha })
      : this.instance.post("auth/login", { email, password, rememberMe })

   getCaptcha = () => this.instance("security/get-captcha-url")

   logout = () => this.instance.post("auth/logout", {})

   setMyProfile = async () => {
      const myProfileResponse = await this.authMe();
      return myProfileResponse.data.resultCode === 1 ?
         null
         : myProfileResponse.data
   }

   getProfileStatus = userId => this.instance(`profile/status/${userId}`)

   updateProfileStatus = status => this.instance.put(`profile/status`, { status })
}