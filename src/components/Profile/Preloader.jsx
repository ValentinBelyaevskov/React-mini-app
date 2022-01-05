import s from "./Preloader.module.scss"

const Preloader = (props) => (
   <div className={s.preloader}>
      <img src={props.preloaderGif} alt="preloader gif"></img>
   </div>
)

export default Preloader