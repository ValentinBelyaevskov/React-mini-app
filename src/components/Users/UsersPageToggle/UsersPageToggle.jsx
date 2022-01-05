import { useEffect } from "react";
import { useState } from "react";
import Button from "../../generic/Button/Button";
import PreloaderContainer from "./PreloaderContainer";
import ToggleItemContainer from "./ToggleItemContainer";
import s from "./UsersPageToggle.module.css";

const UsersPageToggle = ({ props }) => {
   // * Создание и map массива currentToggleItems
   const [currentToggleItems, setCurrentToggleItems] = useState(props.getCurrentToggleItems(props.pagesCount, props.firstPageNumber));

   useEffect(() => {
      setCurrentToggleItems(props.getCurrentToggleItems(props.pagesCount, props.firstPageNumber));
   }, [props.firstPageNumber])

   useEffect(() => {
      props.setPagesCount(props.totalCount)
   }, [props.totalCount])

   const goToTheFirstPage = () => {
      props.setFirstPageNumber(1);
      props.setCurrentPageNumber(1);
   }

   const goToTheLastPage = () => {
      props.setFirstPageNumber(props.lastPageNumber - (props.pagesCount - 1));
      props.setCurrentPageNumber(props.lastPageNumber);
   }

   return (
      <div className={s.toggle}>
         <div className={s.toggleFlex}>
            <Button text={"First page"} clickHandler={goToTheFirstPage} />
            <div className={s.toggleItemsWrapper}>
               {currentToggleItems.map((toggleItem, i) => (
                  <ToggleItemContainer key={i} pageNumber={toggleItem} />
               ))}
            </div>
            <Button text={"Last page"} clickHandler={goToTheLastPage} />
         </div>
         {props.isFetching ? <PreloaderContainer /> : null}
      </div>
   )
}

export default UsersPageToggle