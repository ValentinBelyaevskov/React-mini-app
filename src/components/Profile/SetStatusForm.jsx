import Button from "../generic/Button/Button"
import s from "./SetStatusForm.module.scss"

const SetStatusForm = ({ onInputHandler, value, statusInputValue, buttonClickHandler }) => (
   <div className={s.setStatusForm} >
      <input onInput={onInputHandler} value={value} className={s.input} type="text" ref={statusInputValue} />
      <Button text={"Set status"} clickHandler={buttonClickHandler} />
   </div>
)

export default SetStatusForm