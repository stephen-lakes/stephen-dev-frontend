import React from "react";
import { Helmet } from "react-helmet";

interface PageMetaProps {
  title: string;
  favicon: string;
}
const PageMeta: React.FC<PageMetaProps> = ({ title, favicon }) => (
  <Helmet>
    <title>{title}</title>
    <link rel="icon" type="image/png" href={favicon ? favicon : ``} />
  </Helmet>
);

export default PageMeta;
