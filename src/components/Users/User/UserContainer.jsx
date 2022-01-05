import { connect } from "react-redux"
import { setFollowValue } from "../../../redux/actionCreators/usersActionCreators"
import { followThunk, unfollowThunk } from "../../../redux/thunkCreators/thunkCreators"
import User from "./User"

const mapStateToProps = (state, ownProps) => {
   return {
      user: ownProps.user,
      followed: ownProps.user.followed,
      defaultAvatar: state.app.defaultAvatar,
      APIUrl: state.app.APIUrl,
      myProfile: state.app.myProfile,
   }
}

export default connect(mapStateToProps, { setFollowValue, followThunk, unfollowThunk })(User);