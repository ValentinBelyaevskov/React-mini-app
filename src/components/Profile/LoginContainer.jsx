import { connect } from "react-redux"
import { setMyProfile } from "../../redux/actionCreators/usersActionCreators"
import { loginThunk } from "../../redux/thunkCreators/thunkCreators"
import Login from "./Login"

const mapStateToProps = (state, ownProps) => {
   return {
      loginError: state.app.loginError,
      captcha: state.app.captcha,
   }
}

export default connect(mapStateToProps, { setMyProfile, loginThunk })(Login)