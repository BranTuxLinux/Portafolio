import { Home } from "./home.routes";
import { AsideBar } from "./templates/AsideBar.template";
import { Content } from "./templates/Content.template";
// import { useTranslation } from "react-i18next";
export const LandingPage = () => {
  // const [t] = useTranslation("global");
  return (
    <main id="main" className="flex flex-row">
      <AsideBar />
      <Content>
        <Home />
        {/* <Projects />
        <About />
        <Skills />
        <Contact /> */}
      </Content>
    </main>
  );
};