
const getTheme = () => {
  let theme = "";
  if(!localStorage.getItem("theme")){
    localStorage.setItem("theme","")
  }
  theme = localStorage.getItem("theme");
  console.log(theme);
  return theme;
}

export default getTheme;