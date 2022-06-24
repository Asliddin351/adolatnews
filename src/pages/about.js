import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../components/navbar";

const About = () => {
  return (
    <div className="wrapper">
      <Navigation />

      <Container>
        <div>
          <h1>О нас</h1>
          <div className="about-image"></div>
          <h2>
            Агентство новостей "Adolat NEWS" – "Гарантированные и достоверные
            новости, по всему Узбекистану".
          </h2>
          <p className="about-text">
            Агентство новостей "Adolat NEWS" было создано в 2022 году. С первых
            же дней появления на рынке СМИ "Adolat NEWS" заняла свою нишу,
            выбрав собственный, индивидуальный стиль подачи информации –
            оперативно, достоверно и лаконично информировать читателя о
            событиях, происходящих в стране.
          </p>
          <p className="about-text">
            Сайт "Adolat NEWS" не несет ответственности за достоверность (так
            как указывается источник) информации, опубликованной на сайте в
            соответствии с действующим законодательством. Редакция не несет
            ответственности за достоверность информации, опубликованной в
            рекламных материалах на сайте. Редакция сайта может не разделять
            мнение авторов материалов. Редакция не имеет возможности
            обмениваться сообщениями и вступать в переписку со всеми читателями.
            <br />
            <br />
          </p>

          <ol>
            Редакционная группа:
            <li>Саидова Лола - главный редактор</li>
            <li>Назаров Миркамол - редактор отдела экономики </li>
            <li>Хужаев Обид - редактор общественно-политического отдела</li>
            <li>Хамрокулов Зафар - редактор отдела технологий и спорта</li>
          </ol>
        </div>
      </Container>
      <div className="footer">
        {/* <nav className="footer-navbar">
          <ul className="footer-navbar__menu">
            <li className="menu-item">
              <a href="#" className="menu-item__link">
                О сайте
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-item__link">
                Контакты
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-item__link">
                Команда Adolat NEWS
              </a>
            </li>
          </ul>
        </nav> */}
        <Row className="align-items-center">
          <Col lg={8}>
            <div className="footer-content">
              <h2>Контакты: </h2>
              <ul className="footer-menu">
                <li>
                  Email:
                  <a href="mailto:sam_adolat.uz@mail.ru">
                    sam_adolat.uz@mail.ru{" "}
                  </a>
                </li>
                <li>
                  Aдрес:
                  <span style={{ marginLeft: "5px", color: "white" }}>
                    город Самарканд, улица Мирзо Улугбека, дом 42.
                  </span>
                </li>
                <li>
                  По общим вопросам:
                  <a href="tel:+998 66 233 48 77">+998 66 233 48 77</a>
                </li>
                <li>
                  По вопросам рекламы:
                  <br />
                  <a href="tel:+998 91 537 30 34">+998 91 537 30 34</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={4}>
            <ul className="social">
              <li>
                <a href="http://youtube.com/channel/UCqfvvvX22TwLXSmUC49NvZg/videos">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="https://t.me/adolat_uz">
                  <i className="fa-brands fa-telegram"></i>
                </a>
              </li>
              <li>
                <a href="http://instagram.com/adolat_sdp/?hl=ru">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="http://facebook.com/sdpu.adolat">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
