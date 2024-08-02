import { useTranslation } from "react-i18next";
import { CardComponent } from "../components/card.component";
import {
  FaAngleRight,
  FaEnvelope,
  FaXTwitter,
  FaDiscord,
  FaJs,
} from "react-icons/fa6";
import { FaLinkedinIn, FaLinux } from "react-icons/fa6";
import { NewPage } from "../components/NewPage.components";
import imgWave from "../assets/img/wave.png";
import CardMusic from "../components/music.component";
import { Weather } from "../components/wheather";
import { ArrowBox } from "../components/arrowbox";
import { Technologies } from "../components/Tecnologies";
export const BentoPage = () => {
  const [t, i18n] = useTranslation("global");
  const changeLanguage = () => {
    i18n.changeLanguage(t("bento-language.language") == "ES" ? "en" : "es");
  };
  return (
    <section className="bento-page">
      <CardComponent
        classN={"bento-presentation bento-section bento-div-control"}
      >
        <img src={imgWave}></img>
        <img className="w2" src={imgWave}></img>

        <div>
          <h1>{t("bento-presentation.header")}</h1>
          <p>{t("bento-presentation.paragraph")}</p>
        </div>
      </CardComponent>
      <CardComponent classN={"bento-section bento-language"} isPressable={true}>
        <div onClick={changeLanguage}>
          <h1> {t("bento-language.language")}</h1>
        </div>
      </CardComponent>
      <CardComponent classN={"bento-section bento-contact"} isPressable={true}>
        <div>
          <FaEnvelope />
        </div>
        <p>{t("bento-contact.title")}</p>
      </CardComponent>
      <CardComponent classN={"bento-section bento-years"}>
        <NewPage url={"https://cssgradient.io/"}>
          <h1>{t("bento-years.years")}</h1>
          <p>{t("bento-years.title")}</p>
        </NewPage>
      </CardComponent>
      <CardComponent classN={"bento-section bento-proyects"} isPressable={true}>
        <div className="recover">
          <h1>Mis Proyectos</h1>
          <p>Como son los proyectos</p>
          <div>
            <FaAngleRight />
          </div>
        </div>
      </CardComponent>
      <CardComponent classN={"bento-section bento-github"} isPressable={true}>
        <div className="bento-link">
          <h1>GitHub</h1>
          <ArrowBox />
        </div>
      </CardComponent>
      <CardComponent classN={"bento-section bento-music"}>
        <CardMusic />
      </CardComponent>
      <CardComponent
        classN={"bento-section bento-linkeding"}
        isPressable={true}
      >
        <FaLinkedinIn />
        <ArrowBox />
      </CardComponent>
      <CardComponent classN={"bento-section levelEnglish"}>
        <h1>B2</h1>
        <p>level</p>
      </CardComponent>
      <CardComponent classN={"bento-section clima"}>
        <Weather />
      </CardComponent>
      <CardComponent classN={"bento-section bento-x"} isPressable>
        <ArrowBox />
        <FaXTwitter size={"20%"} />
      </CardComponent>
      <CardComponent classN={"bento-section bento-discord"} isPressable>
        <ArrowBox />
        <FaDiscord size={"20%"} />
      </CardComponent>
      <CardComponent classN={"bento-section bento-experience"} isPressable>
        <ArrowBox />
        <FaJs size={"20%"} className="icon-js" />
        <h1>Desarrollador fullstack con JavaScript </h1>
        <p>Mi experiencia</p>
      </CardComponent>
      <CardComponent classN={"bento-section bento-Technologies"}>
        <Technologies />
      </CardComponent>
      <CardComponent classN={"bento-section bento-linux "}>
        <FaLinux size={"40%"} />
      </CardComponent>
    </section>
  );
};
