import { Header } from "../Header/component";

export const Footer = ({ children, className }) => {
  return <Header className={className}>{children}</Header>;
};
