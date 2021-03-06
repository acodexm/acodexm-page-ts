import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Container, Col, Row } from 'styled-bootstrap-grid';
import SectionTitle from '../Section/SectionTitle';
import Section from '../Section/Section';
import { cardColor } from '../../themes/colors';
import { useTranslation } from 'react-i18next';
import ImageCollage from './ImageCollage';

const AboutSection = styled(Section)``;
const Card = styled.div`
  border-radius: 1rem;
  border-color: coral;
  border-width: thick;
  height: 90%;
  width: 90%;
  min-width: 25vh;
  padding: 1rem;
  margin: 1rem;
  background-image: ${cardColor};
  span {
    font-size: 1.2rem;
  }
`;

interface Props {
  sectionRef: React.RefObject<HTMLElement>;
}
const About: FunctionComponent<Props> = ({ sectionRef }) => {
  const { t } = useTranslation();
  return (
    <AboutSection ref={sectionRef} mode={'secondary'}>
      <SectionTitle title={t('section.title.about')} />
      <Container fluid>
        <Row>
          <Col lg={4} sm={12}>
            <ImageCollage />
          </Col>
          <Col lg={8} sm={12}>
            <Row>
              <Col col>
                <Card>
                  <h3>{t('general.about')}</h3>
                  <span>{t('about.me')}</span>
                </Card>
              </Col>
              <Col col>
                <Card>
                  <h3>{t('general.sports')}</h3>
                  <span>{t('about.sports')}</span>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col col>
                <Card>
                  <h3>{t('general.programing')}</h3>
                  <span>{t('about.programing')}</span>
                </Card>
              </Col>
              <Col col>
                <Card>
                  <h3>{t('general.hobby')}</h3>
                  <span>{t('about.hobby')}</span>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </AboutSection>
  );
};

export default About;
