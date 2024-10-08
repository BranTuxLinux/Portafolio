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
        <div style={{ width: "100%", height: "100%" }} onClick={changeLanguage}>
          <h1> {t("bento-language.language")}</h1>
        </div>
      </CardComponent>

      <CardComponent classN={"bento-section bento-cv"} isPressable>
        <NewPage url={"/cv.pdf"}>
          <h1>CV</h1>
          <p>PDF 📁</p>
        </NewPage>
      </CardComponent>

      <CardComponent classN={"bento-section bento-experience"} isPressable>
        <ArrowBox />
        <FaJs size={"40%"} className="icon-js" />
        <h1>{t('experience.ex')} </h1>
        <p>{t('experience.data')} </p>
      </CardComponent>

      <CardComponent classN={"bento-section bento-proyects"} isPressable={true}>
        <NewPage url={'https://github.com/BranTuxLinux?tab=repositories'}>

        <div className="recover">
          <h1>Mis Proyectos</h1>
          <p>Como son los proyectos</p>
          <div>
            <FaAngleRight />
          </div>
        </div>
        </NewPage>
      </CardComponent>

      <CardComponent classN={"bento-section bento-github"} isPressable={true}>
        {/* <div className="bento-link"> */}
        <NewPage url={"https://github.com/BranTuxLinux"}>
          <h1>GitHub</h1>
          <ArrowBox />
        </NewPage>
        {/* </div> */}
      </CardComponent>

      <CardComponent
        classN={"bento-section bento-music"}
        style={{ height: "100%" }}
      >
        <CardMusic />
      </CardComponent>
      <CardComponent classN={"bento-section bento-x"} isPressable>
        <NewPage url={"https://github.com/BranTuxLinux"}>
          <ArrowBox />
          <FaXTwitter size={"40%"} />
        </NewPage>
      </CardComponent>

      <CardComponent classN={"bento-section levelEnglish"}>
        <h1>B2</h1>
        <p>level</p>
      </CardComponent>

      <CardComponent classN={"bento-section bento-linux "}>
        <FaLinux size={"40%"} />
      </CardComponent>

      <CardComponent
        classN={"bento-section bento-linkeding"}
        isPressable={true}
      >
        <NewPage url={"https://www.linkedin.com/in/brantux/"}>
          <FaLinkedinIn />
          <ArrowBox />
        </NewPage>
      </CardComponent>

      <CardComponent classN={"bento-section bento-contact"} isPressable>
        <div>
          <FaEnvelope />
        </div>
        <p>{t("bento-contact.title")}</p>
      </CardComponent>
      <CardComponent classN={"bento-section bento-discord"}>
        {/* <NewPage url={"https://github.com/BranTuxLinux"}> */}
        {/* <ArrowBox /> */}
        <FaDiscord size={"40%"} />
        <strong>belveth#4706</strong>
        {/* </NewPage> */}
      </CardComponent>

      <CardComponent classN={"bento-section bento-Technologies "}>
        <Technologies />
      </CardComponent>

      <CardComponent classN={"bento-section clima"}>
        <Weather />
      </CardComponent>
    </section>
  );
};
