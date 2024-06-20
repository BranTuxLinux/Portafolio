import { useTranslation } from "react-i18next";
import Img_black from "../../assets/img/negro.png";
import Img_white from "../../assets/img/blanco.png";
import { useTheme } from "next-themes";
import { capitalizeFirstLetter } from "../../utils/capitalize.tools";
export const AsideBar = () => {
  const [t] = useTranslation("global");
  const { theme } = useTheme();
  return (
    <aside id="AsideBar">
      <div id="LOGO">
        <h1></h1>
        <img
          src={theme == "dark" ? Img_black : Img_white}
          alt="Logo"
          className=""
        />
      </div>
      <div className="text-primary-600 flex flex-col dark:text-primary-500 text-3xl font-bold mb-4">
        <a href="#" className="nav-items">
          <div className="p-3">
            <h2>{capitalizeFirstLetter(t("navbar.home"))}</h2>
          </div>
        </a>
        <a href="#" className="nav-items">
          <div className="p-3 ">
            <h2>{capitalizeFirstLetter(t("navbar.projects"))}</h2>
          </div>
        </a>
        <a href="#" className="nav-items">
          <div className="p-3">
            <h2>{capitalizeFirstLetter(t("navbar.skills"))}</h2>
          </div>
        </a>
        <a href="#" className="nav-items">
          <div className="p-3">
            <h2>{capitalizeFirstLetter(t("navbar.about"))}</h2>
          </div>
        </a>
        <a href="#" className="nav-items">
          <div className="p-3">
            <h2>{capitalizeFirstLetter(t("navbar.contact"))}</h2>
          </div>
        </a>
      </div>
    </aside>
  );
};
