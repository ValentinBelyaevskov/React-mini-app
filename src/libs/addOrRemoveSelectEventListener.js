let selectEventListener;

const addOrRemoveSelectEventListener = (addOrRemove, elementClassName) => {
   let element = document.querySelector(`.${elementClassName}`);
   selectEventListener = e => e.preventDefault();
   if (addOrRemove === "add") {
      element.addEventListener('selectstart', selectEventListener)
   } else if (addOrRemove === "remove") {
      element.removeEventListener('selectstart', selectEventListener)
   }
}

export default addOrRemoveSelectEventListener