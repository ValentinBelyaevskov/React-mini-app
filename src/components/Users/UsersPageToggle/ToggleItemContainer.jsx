import { connect } from "react-redux";
import { setCurrentPageNumber, setUserPageIsFetching, setLastPageNumber, setNewFirstPageNumber } from "../../../redux/actionCreators/usersActionCreators";
import ToggleItemDOM from "./ToggleItemDOM";

const mapStateToProps = (state, ownProps) => {
   const totalCount = state.app.userPages.totalCount;
   const pageSize = state.app.userPages.pageSize;
   const lastPageNumber = Math.ceil(totalCount / pageSize);
   const currentPageNumber = state.app.userPages.currentPageNumber;
   const activeClassName = currentPageNumber === ownProps.pageNumber ? "active" : "non-active";
   return {
      activeClassName: activeClassName,
      pageParameters: {
         pageNumber: ownProps.pageNumber,
         firstPageNumber: state.app.userPages.firstPageNumber,
         lastPageNumber: lastPageNumber,
         pagesCount: state.app.userPages.pagesCount,
      }
   }
}

export default connect(mapStateToProps, { setCurrentPageNumber, setNewFirstPageNumber, setLastPageNumber, setUserPageIsFetching })(ToggleItemDOM)