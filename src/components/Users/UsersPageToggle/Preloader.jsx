import s from "./Preloader.module.css"

const Preloader = ({state}) => (
   <div className={s.preloader}>
      <img src={state.preloaderGif} alt="preloader gif"></img>
   </div>
)

export default Preloader