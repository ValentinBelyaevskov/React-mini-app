import { connect } from "react-redux"
import Preloader from "./Preloader"

const mapStateToProps = (state, ownProps) => {
   return {
      preloaderGif: state.app.preloaderGif,
   }
}

export default connect(mapStateToProps)(Preloader)