import {
  IconDefinition,
  faEnvelope,
  faMapLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

import {
  Column,
  CompanyInfo,
  CompanyName,
  FooterBottomText,
  FooterContainer,
  FooterContent,
  Row,
  StyledFontAwesomeIcon,
  WaveSvg,
} from "./styles";

interface IRow {
  title: string;
  icon: IconDefinition;
  href?: string;
}

const Footer: React.FC = (): JSX.Element => {
  const rows: IRow[] = [
    {
      title: "+57 310 503 5336",
      icon: faPhone,
      href: "tel:+573105035336",
    },
    {
      title: "ventas@losvillegas.com",
      icon: faEnvelope,
      href: "mailto:ventas@losvillegas.com",
    },
    {
      title: "Central Mayorista, Bloque Naranja, Local 0116",
      icon: faMapLocationDot,
      href: "https://maps.app.goo.gl/qmV1KJA7ddxBD8EV7",
    },
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <CompanyName>LOS VILLEGAS</CompanyName>
        </Column>
        <Column>
          {rows.map((row, index) => (
            <Row
              key={index}
              href={row.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledFontAwesomeIcon icon={row.icon} />
              &nbsp;{row.title}
            </Row>
          ))}
        </Column>
        <Column>
          <CompanyInfo>Información de la Compañía</CompanyInfo>
        </Column>
      </FooterContent>
      <FooterBottomText>© 2024 Los Villegas</FooterBottomText>
    </FooterContainer>
  );
};

export default Footer;
