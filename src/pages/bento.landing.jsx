import { useTranslation } from "react-i18next";
import { CardComponent } from "../components/card.component";
import { FaEnvelope } from "react-icons/fa6";

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
      <CardComponent classN={"bento-section bento-language bento-center"}>
        <div onClick={changeLanguage}>
          <h1> {t("bento-language.language")}</h1>
        </div>
      </CardComponent>
      <CardComponent classN={"bento-section bento-contact bento-center"}>
        <div>
          <FaEnvelope />
        </div>
        <p>{t("bento-contact.title")}</p>
      </CardComponent>
      <CardComponent classN={"bento-section bento-center bento-years"}>
        <h1>{t("bento-years.years")}</h1>
        <p>{t("bento-years.title")}</p>
      </CardComponent>
      <CardComponent classN={"bento-section bento-proyects bento-center"} >
        <div className="recover">

        </div>
        
      </CardComponent>
    </section>
  );
};
