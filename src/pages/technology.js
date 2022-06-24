import React from "react";

import Navigation from "../components/navbar";

import { Container, Row, Col } from "react-bootstrap";

import main from "../assets/main.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const Technology = () => {
  return (
    <div className="wrapper">
      <Navigation />

      <Container className="flex-grow-1">
        <div>
          <h2 style={{ marginTop: "15px", marginBottom: "15px" }}>
            НОВОСТИ В МИРЕ ТЕХНОЛОГИИ
          </h2>
          <div className="uzbekistan">
            <div
              style={{ backgroundImage: `url(${main})` }}
              className="uzbekistan-image"
            />
            <div className="uzbekistan-text">
              <a href="#">
                ERIELL Group: 18 лет покорения новых высот ERIELL Group отмечает
                сегодня, 14 июня 2022 года, свое 18-летие.
              </a>
              <p>
                За эти годы Группа компаний внесла значительный вклад в
                обеспечение энергоресурсами жителей и экономики Узбекистана.
              </p>
            </div>
          </div>
          <div className="news-group">
            <div className="news">
              <img src={img1} alt="comment" width="100%" />
              <a href="#">
                ZTE представила новейшие высокоэффективные и экологичные решения
                для телеком отрасли на выставке MWC 2022
              </a>
            </div>
            <div className="news">
              <img src={img2} width="100%" />
              <a href="#">
                В Минэнерго рассказали о разработке зарядных устройства для
                электромобилей В Узбекистане в рамках развития «зеленой
                экономики» разрабатывается ряд инновационных проектов, в том
                числе проект по созданию и разработке скоростных зарядных
                устройств для электромобилей на основе использования солнечной
                энергии.
              </a>
            </div>
            <div className="news">
              <img src={img3} alt="comment" width="100%" />
              <a href="#">
                Зафар Тату2, [25.06.2022 0:11] Партия «Адолат» намекнула, что в
                Узбекистане надо заблокировать VPN-сервисы
              </a>
            </div>
            <div className="news">
              <img src={img4} alt="comment" width="100%" />
              <a href="#">
                Как уберечься от фишинга и иных видов интернет-мошенничества?
                Мнение эксперта по данному вопросу
              </a>
            </div>
          </div>
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

export default Technology;
