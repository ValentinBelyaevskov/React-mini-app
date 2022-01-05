import { restAPI } from "./restAPI";

export class userApi extends restAPI {
   constructor () {
      super()
   }

   getFollow = userId => this.instance(`follow/${userId}`)

   follow = userId => this.instance.post(`follow/${userId}`)

   unfollow = userId => this.instance.delete(`follow/${userId}`)
}