import { useTranslation } from "react-i18next";
import { CardComponent } from "../components/card.component";
import { FaAngleRight, FaEnvelope, FaUpRightFromSquare } from "react-icons/fa6";
import { NewPage } from "../components/NewPage.components";

export const BentoPage = () => {
  const [t, i18n] = useTranslation("global");

  const changeLanguage = () => {
    i18n.changeLanguage(t("bento-language.language") == "ES" ? "en" : "es");
  };
  return (
    <section className="bento-page">
      <CardComponent classN={"bento-presentation bento-section"}>
        <div>
          <h1>{t("bento-presentation.header")}</h1>
          <p>{t("bento-presentation.paragraph")}</p>
        </div>
      </CardComponent>
      <CardComponent
        classN={"bento-section bento-language bento-center"}
        isPressable={true}
      >
        <div onClick={changeLanguage}>
          <h1> {t("bento-language.language")}</h1>
        </div>
      </CardComponent>
      <CardComponent
        classN={"bento-section bento-contact bento-center"}
        isPressable={true}
      >
        <div>
          <FaEnvelope />
        </div>
        <p>{t("bento-contact.title")}</p>
      </CardComponent>
      <CardComponent classN={"bento-section bento-center bento-years"}>
        <NewPage url={'https://cssgradient.io/'}>
          <h1>{t("bento-years.years")}</h1>
          <p>{t("bento-years.title")}</p>
        </NewPage>
      </CardComponent>
      <CardComponent
        classN={"bento-section bento-proyects bento-center"}
        isPressable={true}
      >
        <div className="recover">
          <h1>Mis Proyectos</h1>
          <p>Como son los proyectos</p>
          <div>
            <FaAngleRight />
          </div>
        </div>
      </CardComponent>
      <CardComponent
        classN={"bento-section bento-github bento-center"}
        isPressable={true}
      >
        <div className="bento-link">
          <h1>GitHub</h1>
          <div className="arrow">
            <FaUpRightFromSquare />
          </div>
        </div>
      </CardComponent>
      <CardComponent classN={"bento-section"}></CardComponent>
      <CardComponent classN={"bento-section"}></CardComponent>
      <CardComponent classN={"bento-section"}></CardComponent>
    </section>
  );
};
