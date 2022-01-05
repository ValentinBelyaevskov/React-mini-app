import axios from "axios";

export class restAPI {
   constructor () {
      this.instance = axios.create({
            baseURL: "https://social-network.samuraijs.com/api/1.0/",
            withCredentials: true,
            headers: {
               "API-KEY": "db18a36b-347c-4ff1-ab28-dc342298977b",
            },
         });
   }
}