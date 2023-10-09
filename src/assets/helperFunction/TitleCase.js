export const titleCase = (str) => {
  if (str === "uae" || str === "UAE") return "UAE";
  if (str === "asap" || str ===  "ASAP") return "As soon as posible.";
  if(!str) return "";
  const splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(" ");
};

export const upperCaseSentence = str => str.charAt(0).toUpperCase() + str.slice(1);
