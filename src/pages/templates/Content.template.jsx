/* eslint-disable react/prop-types */
import { NavbarMini } from "./NavbarMini.template";

export const Content = ({ children }) => {
  return (
    <section className="Content-main ">
      <NavbarMini />
      {children}
    </section>
  );
};
