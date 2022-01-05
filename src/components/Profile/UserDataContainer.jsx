import { logoutThunk, getStatusValueThunk, updateStatusValueThunk } from "../../redux/thunkCreators/thunkCreators";
import { setStatusValue } from "../../redux/actionCreators/usersActionCreators";
import { connect } from "react-redux";
import UserData from "./UserData";

const mapStateToProps = (state, ownProps) => {
   const currentProfile = state.app.profile.currentProfile;
   return {
      myProfile: state.app.myProfile,
      profileStatus: state.app.profileStatus,
      currentProfile: currentProfile,
      avatar: currentProfile.photos.large ? currentProfile.photos.large: state.app.defaultAvatar
   }
}

export default connect(mapStateToProps , { logoutThunk, getStatusValueThunk, updateStatusValueThunk, setStatusValue })(UserData);