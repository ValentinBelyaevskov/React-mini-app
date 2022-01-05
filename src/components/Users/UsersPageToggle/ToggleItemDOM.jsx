import ToggleItem from "./ToggleItem"
import addOrRemoveSelectEventListener from "../../../libs/addOrRemoveSelectEventListener";

const ToggleItemDOM = (props) => {
   const addOrRemoveSelect = (addOrRemove, elementClassName) => {
      addOrRemoveSelectEventListener(addOrRemove, elementClassName)
   }

   return <ToggleItem props={{ ...props, addOrRemoveSelect }} />
}

export default ToggleItemDOM