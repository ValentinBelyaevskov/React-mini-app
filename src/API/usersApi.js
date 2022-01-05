import { restAPI } from "./restAPI";

export class usersApi extends restAPI {
   constructor () {
      super();
   }

   getUsersPromise = (pageSize, pageNumber) => (
      this.instance.get(`users?count=${pageSize}&page=${pageNumber}`)
   )

   getAllFollowPromises = users => users.map(user => this.instance(`follow/${user.id}`))
}