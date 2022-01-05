import s from "./ParameterItem.module.scss"

const ParameterItem = ({parameter, value}) => (
   <div className={s.parametersItem} >
      <span className={s.parameter}>{`${parameter} :`}</span>
      <span className={s.value}>{value}</span>
   </div>
)

export default ParameterItem