import { connect } from "react-redux";
import { setCurrentPageNumber, setFirstPageNumber, setPagesCount } from "../../../redux/actionCreators/usersActionCreators";
import UsersPageToggleLibs from "./UsersPageToggleLibs";

const mapStateToProps = (state, ownProps) => {
   return {
      firstPageNumber: state.app.userPages.firstPageNumber,
      lastPageNumber: state.app.userPages.lastPageNumber,
      pagesCount: state.app.userPages.pagesCount,
      pageSize: state.app.userPages.pageSize,
      isFetching: state.app.userPages.isFetching,
      currentPageNumber: state.app.userPages.currentPageNumber,
      totalCount: state.app.userPages.totalCount,
   }
}

export default connect(mapStateToProps, {setFirstPageNumber, setCurrentPageNumber, setPagesCount})(UsersPageToggleLibs)