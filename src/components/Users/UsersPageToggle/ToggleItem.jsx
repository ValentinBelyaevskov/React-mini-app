import { useEffect } from "react"
import s from "./ToggleItem.module.css"

const ToggleItem = ({props}) => {
   // * Отмена события select на элементах,
   // * Изменение значений currentPageNumber, firstPageNumber
   const clickHandler = () => {
      props.addOrRemoveSelect("remove", `toggleItem-${props.pageParameters.pageNumber}`)
      props.setCurrentPageNumber(props.pageParameters.pageNumber)
      props.setNewFirstPageNumber(props.pageParameters)
   }

   useEffect(() => {
      props.addOrRemoveSelect("add", `toggleItem-${props.pageParameters.pageNumber}`);
   }, [])

   useEffect(() => {
      if (props.activeClassName === "active") props.setLastPageNumber(props.pageParameters.lastPageNumber)
   }, [props.pageParameters.lastPageNumber])

   return (
      <span
         onClick={clickHandler}
         className={`${s.togleItem}
         ${s[props.activeClassName]} toggleItem-${props.pageParameters.pageNumber}`}
      >
         {props.pageParameters.pageNumber}
      </span>
   )
}

export default ToggleItem