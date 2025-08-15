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
  MapWrapper,
  Row,
  StyledFontAwesomeIcon,
  WaveTop,
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
    <>
      <WaveTop>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
          <path
            fill="#2e7d32"
            fillOpacity="1"
            d="M0,128L34.3,149.3C68.6,171,137,213,206,234.7C274.3,256,343,256,411,234.7C480,213,549,171,617,154.7C685.7,139,754,149,823,160C891.4,171,960,181,1029,176C1097.1,171,1166,149,1234,160C1302.9,171,1371,213,1406,234.7L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          />
        </svg>
      </WaveTop>
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
            <MapWrapper>
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
            </MapWrapper>
          </Column>
        </FooterContent>
        <FooterBottomText>
          © 2024 Developed and designed by&nbsp;<b>Juan Villegas</b>
        </FooterBottomText>
      </FooterContainer>
    </>
  );
};

export default Footer;
