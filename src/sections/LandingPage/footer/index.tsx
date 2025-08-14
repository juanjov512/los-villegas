import {
  type IconDefinition,
  faEnvelope,
  faMapLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import React, { type JSX } from "react";

import {
  Column,
  CompanyName,
  FooterBottomText,
  FooterContainer,
  FooterContent,
  Row,
  StyledFontAwesomeIcon,
} from "./styles";

interface IRow {
  title: string;
  icon: IconDefinition;
  href?: string;
}

const Footer: React.FC = (): JSX.Element => {
  const rows: IRow[] = [
    {
      title: "+57 310 358 1467",
      icon: faPhone,
      href: "tel:+573103581467",
    },
    {
      title: "proveedoralosvillegas@gmail.com",
      icon: faEnvelope,
      href: "mailto:proveedoralosvillegas@gmail.com",
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
          <CompanyName>
            LOS
            <br />
            VILLEGAS
          </CompanyName>
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
          <iframe
            title="Ubicación Los Villegas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.8232949930785!2d-75.59069076393038!3d6.186071842471706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46824215b4c807%3A0xbb05e30f24bb2fbe!2zQ2wuIDgwICM0Ni0xMDMsIEl0YWfDvGksIE1lZGVsbMOtbiwgQW50aW9xdWlh!5e0!3m2!1sen!2sco!4v1755052370457!5m2!1sen!2sco"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Column>
      </FooterContent>
      <FooterBottomText>
        © 2024 Developed and designed by&nbsp;<b>Juan Villegas</b>
      </FooterBottomText>
    </FooterContainer>
  );
};

export default Footer;
