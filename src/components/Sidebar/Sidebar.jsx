import { useState } from "react";
import s from "./Sidebar.module.scss"
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
   const [buttonsList, setButtonsList] = useState(["Users", "Profile"])

   return (
      <div className={s.sidebar} >
         {buttonsList.map(buttonName => <SidebarButton key={buttonName} text={buttonName} />)}
      </div>
   )
}

export default Sidebar