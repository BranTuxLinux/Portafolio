import { useTranslation } from "react-i18next";
import { CardComponent } from "../components/card.component";

export const BentoPage = () => {
  const [t, i18n] = useTranslation("global");

  const changeLanguage = ()=>{
    i18n.changeLanguage(
      t("bento-language.language") == "ES" ? "en" : "es"
    );
  }
  return (
    <section className="bento-page">
      <CardComponent classN={"bento-presentation bento-section"}>
        <div>
          <h1>{t("bento-presentation.header")}</h1>
          <p>{t("bento-presentation.paragraph")}</p>
        </div>
      </CardComponent>
      <CardComponent classN={"bento-section bento-language"}>
        <div
          onClick={changeLanguage}
        >
          <h1> {t("bento-language.language")}</h1>
        </div>
      </CardComponent>
    </section>
  );
};
