import React, { useEffect, useState } from "react";
import Button from "../generic/Button/Button";
import ParameterItem from "./ParameterItem";
import SetStatusForm from "./SetStatusForm";
import s from "./UserData.module.scss";

const UserData = (props) => {
   const [editStatus, setEditStatus] = useState(false);
   const [localStatusValue, setlocalStatusValue] = useState(props.profileStatus)
   const statusInputValue = React.createRef();

   const doubleClickHandler = () => {
      if (props.myProfile.data.id !== props.currentProfile.userId) {
         setEditStatus(false)
         return
      }
      editStatus ?
         setEditStatus(false)
         : setEditStatus(true)
   }

   const statusButtonClickHandler = () => {
      if (!props.myProfile) return
      props.updateStatusValueThunk(localStatusValue, props.myProfile.data.id)
      setEditStatus(false)
   }

   const logoutButtonClickHandler = () => {
      props.logoutThunk()
   }

   const onInputHandler = () => {
      setlocalStatusValue(statusInputValue.current.value)
   }

   useEffect(() => {
      return () => props.setStatusValue(null)
   }, [])

   useEffect(() => {
      setlocalStatusValue(props.profileStatus)
   }, [props.profileStatus])

   return (
      <div className={s.userData} >
         <div className={s.avatar}>
            <img src={props.avatar} />
         </div>
         <div className={s.parameters}>
            <ParameterItem parameter={"Name"} value={props.currentProfile.fullName} />
            <ParameterItem
               parameter={"Looking for a job description"}
               value={props.currentProfile.lookingForAJobDescription ?
                  props.currentProfile.lookingForAJobDescription
                  : (
                     props.currentProfile.lookingForAJob ?
                        "Any work" : "Not looking for job"
                  )}
            />
            <div onDoubleClick={doubleClickHandler} className={s.status}>
               {
                  editStatus ?
                     <SetStatusForm value={localStatusValue} onInputHandler={onInputHandler} statusInputValue={statusInputValue} buttonClickHandler={statusButtonClickHandler} />
                     : <ParameterItem parameter={"Status"} value={props.profileStatus} />
               }
            </div>
            {
               props.myProfile ?
                  props.currentProfile.userId === props.myProfile.data.id ?
                     <div className={s.logout}>
                        <Button text={"Logout"} clickHandler={logoutButtonClickHandler} />
                     </div>
                     : null
                  : null
            }
         </div>
      </div>
   )
}

export default UserData