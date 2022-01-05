import s from "./Button.module.scss";

const Button = ({ text, clickHandler, style, type }) => {
   return (
      <button
         style={{ ...style }}
         onClick={clickHandler}
         className={s.button}
         type={type}
      >
         {text}
      </button>
   )
}

export default Button