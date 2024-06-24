import Img_black from "../../assets/img/negro.png";
import Img_white from "../../assets/img/blanco.png";
export const LogoHead = (theme) => {
  return (
    <div id="LOGO">
      <img src={theme == "dark" ? Img_black : Img_white} alt="Logo" />
    </div>
  );
};
