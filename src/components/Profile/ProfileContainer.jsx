import { connect } from "react-redux"
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { setStatusIsFetching, setCurrentProfile, setProfileIsFetching, setMyProfile } from "../../redux/actionCreators/usersActionCreators";
import { getStatusValueThunk, setCurrentProfileThunk, setMyProfileThunk } from "../../redux/thunkCreators/thunkCreators";
import Profile from "./Profile";

const mapStateToProps = (state, ownProps) => {
   return {
      APIUrl: state.app.APIUrl,
      currentProfile: state.app.profile.currentProfile,
      myProfile: state.app.myProfile,
      isFetching: state.app.profile.isFetching,
      profileStatus: state.app.profileStatus,
      statusIsFetching: state.app.statusIsFetching,
      login: state.app.login,
   }
}

export default compose(
   connect(mapStateToProps, {setStatusIsFetching, getStatusValueThunk, setCurrentProfile, setCurrentProfileThunk, setMyProfileThunk, setProfileIsFetching, setMyProfile}),
   withRouter,
)(Profile)
