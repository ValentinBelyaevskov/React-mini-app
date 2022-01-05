import { NavLink } from "react-router-dom"
import s from "./SidebarButton.module.scss"

const SidebarButton = ({text}) => (
   <div className={s.sidebarButton} >
      <NavLink to={`/${text}`} activeClassName={s.activeLink} >{text}</NavLink>
   </div>
)

export default SidebarButton