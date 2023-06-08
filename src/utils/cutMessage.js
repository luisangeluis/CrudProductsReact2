const cutMessage = (message) => {
  let result = message;
  if (message.length > 30) {
    result = message.slice(0, 30) + "...";
  }
  

  console.log(result);
  return result;
}

export default cutMessage