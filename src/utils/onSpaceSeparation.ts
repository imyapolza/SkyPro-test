const onSpaceSeparation = (price: number) =>
  `${price}`
    .split("")
    .reverse()
    .map((el, index) => (index % 3 !== 2 ? el : ` ${el}`))
    .reverse()
    .join("");

export default onSpaceSeparation;
