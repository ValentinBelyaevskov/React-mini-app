import UsersPageToggle from "./UsersPageToggle";

const UsersPageToggleLibs = (props) => {
   const getCurrentToggleItems = (count, firstNumber) => {
      let currentToggleItems = [];
      for (let i = firstNumber; i <= (count + firstNumber - 1); i++) {
         currentToggleItems[i] = i;
      }
      return currentToggleItems;
   }

   const setPagesCount = (totalCount) => {
      if (totalCount === 0) props.setPagesCount(1);
      if (totalCount < 5 * props.pageSize) props.setPagesCount(
         Math.ceil(totalCount / props.pageSize)
      );
      if (totalCount > 5 * props.pageSize) props.setPagesCount(5);
   }

   return <UsersPageToggle props={{...props, getCurrentToggleItems, setPagesCount}} />
}

export default UsersPageToggleLibs