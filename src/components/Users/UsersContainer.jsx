import { connect } from "react-redux"
import { setUserPageIsFetching, setTotalCount, setUsers, setWasNotLoaded, setFirstPageNumber, setCurrentPageNumber, setAllFollowValues } from "../../redux/actionCreators/usersActionCreators"
import { setUsersInfoThunk, setAllFollowValuesThunk } from "../../redux/thunkCreators/thunkCreators"
import Users from "./Users"

const mapStateToProps = (state, ownProps) => {
   return {
      users: state.app.usersInfo.users,
      currentPageNumber: state.app.userPages.currentPageNumber,
      wasNotLoaded: state.app.userPages.wasNotLoaded,
      pageSize: state.app.userPages.pageSize,
      APIUrl: state.app.APIUrl,
      myProfile: state.app.myProfile,
   }
}

export default connect(mapStateToProps, {
   setUsers,
   setTotalCount,
   setUserPageIsFetching,
   setWasNotLoaded,
   setFirstPageNumber,
   setCurrentPageNumber,
   setAllFollowValues,
   setUsersInfoThunk,
   setAllFollowValuesThunk
})(Users);