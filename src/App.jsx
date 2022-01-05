import UsersContainer from "./components/Users/UsersContainer";
import s from "./AppWrapper.module.css"
import { Redirect, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => (
   <div className={`wrapper ${s.appWrapper}`}>
      <Sidebar />
      <Switch>
         <Route exact path="/Users">
            <UsersContainer />
         </Route>
         <Route exact path="/Profile">
            <ProfileContainer />
         </Route>
         <Route exact path="/Profile/:userId?">
            <ProfileContainer />
         </Route>
         <Route exact path="/">
            <Redirect to="Profile" />
         </Route>
      </Switch>
   </div>
)

export default App