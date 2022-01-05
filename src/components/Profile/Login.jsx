import { useFormik } from "formik";
import Button from "../generic/Button/Button";
import s from "./Login.module.scss";

const Login = (props) => {
   const formik = useFormik({
      initialValues: {
         login: "",
         password: "",
         rememberMe: false,
         captcha: "",
      },
      onSubmit: values => {
         props.loginThunk({ ...values })
      }
   })

   return (
      <form className={s.form} onSubmit={formik.handleSubmit} >
         <div>
            <input
               className={s.input}
               id="login"
               name="login"
               type="text"
               placeholder="Login"
               onChange={formik.handleChange}
               value={formik.values.login}
            />
         </div>
         <div>
            <input
               className={s.input}
               id="password"
               name="password"
               type="password"
               placeholder="Password"
               onChange={formik.handleChange}
               value={formik.values.password}
            />
         </div>
         <div className={s.checkboxContainer}>
            <span>Remember me</span>
            <input
               className={s.checkbox}
               type="checkbox"
               name="rememberMe"
               value={formik.values.rememberMe}
               checked={formik.values.rememberMe}
               onChange={formik.handleChange}
            />
         </div>
         <div className={s.buttonContainer}>
            <Button text={"Login"} style={{ marginLeft: "auto" }} type="submit" />
         </div>
         {
            props.loginError ?
               <div className={s.loginError}>
                  {props.loginError}
               </div>
               : null
         }
         {
            props.captcha ?
               (
                  <div className={s.captcha}>
                     <div className={s.image}>
                        <img src={props.captcha} alt={"captcha"} />
                     </div>
                     <div>
                        <input
                           className={s.input}
                           id="captcha"
                           name="captcha"
                           type="captcha"
                           placeholder="Captcha"
                           onChange={formik.handleChange}
                           value={formik.values.captcha}
                        />
                     </div>
                  </div>

               )
               : null
         }
      </form>
   )
}

export default Login;