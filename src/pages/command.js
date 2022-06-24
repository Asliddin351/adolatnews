import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../components/navbar";

import firsImg from "../assets/1.png";
import twoImg from "../assets/2.jpg";
import treeImg from "../assets/3.jpg";
import fourImg from "../assets/4.png";

const Command = () => {
  return (
    <div className="wrapper">
      <Navigation />
      <Container className="flex-grow-1">
        <div>
          <h1 className="text-center">Команда Adolat NEWS</h1>
          <div className="commands">
            <div className="command-item">
              <img src={firsImg} alt="comment" />
              <div className="command-content">
                <h2>Саидова Лолаой Абдурайимова</h2>
                <span>главный редактор</span>
                <a href="tel:+99897 288 57 57">+998 97 288 57 57</a>
              </div>
            </div>
            <div className="command-item">
              <img src={twoImg} alt="comment" />
              <div className="command-content">
                <h2>Назаров Миркамол Усарович</h2>
                <span>редактор отдела экономики</span>
                <a href="tel:+99893 722 02 73">+998 93 722 02 73</a>
              </div>
            </div>
            <div className="command-item">
              <img src={treeImg} alt="comment" />
              <div className="command-content">
                <h2>Хужаев Обиджон Тохирович</h2>
                <span>редактор общественно-политического отдела</span>
                <a href="tel:+99891 318 13 13">+998 91 318 13 13</a>
              </div>
            </div>
            <div className="command-item">
              <img src={fourImg} alt="comment" />
              <div className="command-content">
                <h2>Хамрокулов Зафаржон Хусенович</h2>
                <span>редактор отдела технологий и спорта</span>
                <a href="tel:+99891 537 30 34">+998 91 537 30 34</a>
              </div>
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

export default Command;
