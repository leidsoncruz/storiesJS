export const removeChildren = (el) => {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
};

export default 1;
