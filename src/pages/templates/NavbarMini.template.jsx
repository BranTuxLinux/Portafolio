import { useTheme } from "next-themes";
import { FaRegMoon, FaSun } from "react-icons/fa6";
import { Button, Switch } from "@nextui-org/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
export const NavbarMini = () => {
  const { theme, setTheme } = useTheme();
  const { i18n } = useTranslation("global");
  const [isDark, setIsDark] = useState(theme == "dark" ? true : false);
  const changeTheme = (isTheme) => {
    setTheme(isTheme ? "light" : "dark");
    setIsDark(!isTheme);
  };
  return (
    <nav id="NavMini">
      <div className="contentNav dark:bg-primary-200  ">
        <div>
          <Button
            onClick={() =>
              i18n.changeLanguage(i18n.language == "es" ? "en" : "es")
            }
          >
            {i18n.language.toUpperCase()}
          </Button>
        </div>
        <div>
          <Switch
            isSelected={isDark}
            onValueChange={() => changeTheme(isDark)}
            size="lg"
            color="secondary"
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <FaSun className={className} />
              ) : (
                <FaRegMoon className={className} />
              )
            }
          />
          <button onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
            {}
          </button>
        </div>
      </div>
    </nav>
  );
};
