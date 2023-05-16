
const firstMayusc = (string) => {
  let result = "";
  if (string)
    result = string[0].toUpperCase() + string.substring(1);
  return result;
}

export default firstMayusc;