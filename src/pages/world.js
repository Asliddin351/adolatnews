import React from "react";

import Navigation from "../components/navbar";

import { Container, Row, Col } from "react-bootstrap";

const World = () => {
  return (
    <div className="wrapper">
      <Navigation />

      <Container className="flex-grow-1">
        <div>
          <h2 style={{ marginTop: "15px", marginBottom: "15px" }}>
            ОСНОВНЫЕ НОВОСТИ МИРА
          </h2>
          <div className="uzbekistan">
            <div className="uzbekistan-image" />
            <div className="uzbekistan-text">
              <a href="#">
                Пенсионеры и определенные категории граждан получат
                единовременную материальную помощь
              </a>
              <p>
                Президент подписал постановление «О дополнительных мерах по
                адресной поддержке нуждающихся в социальной защите слоев
                населения».
              </p>
            </div>
          </div>
          <div className="news-group">
            <div className="news">
              <img
                src="https://storage.kun.uz/source/thumbnails/_medium/8/wRhdN1ot6Jgmfo-l532ULYJmVrVnNWw1_medium.jpg"
                alt="comment"
                width="100%"
              />
              <a>
                «Это неправильно»: Сафаев высказался о хокимах, которые
                возглавляют исполнительную и представительную власть
              </a>
            </div>
            <div className="news">
              <img
                src="https://storage.kun.uz/source/thumbnails/_medium/8/wRhdN1ot6Jgmfo-l532ULYJmVrVnNWw1_medium.jpg"
                alt="comment"
                width="100%"
              />
              <a>
                «Это неправильно»: Сафаев высказался о хокимах, которые
                возглавляют исполнительную и представительную власть
              </a>
            </div>
            <div className="news">
              <img
                src="https://storage.kun.uz/source/thumbnails/_medium/8/wRhdN1ot6Jgmfo-l532ULYJmVrVnNWw1_medium.jpg"
                alt="comment"
                width="100%"
              />
              <a>
                «Это неправильно»: Сафаев высказался о хокимах, которые
                возглавляют исполнительную и представительную власть
              </a>
            </div>
            <div className="news">
              <img
                src="https://storage.kun.uz/source/thumbnails/_medium/8/wRhdN1ot6Jgmfo-l532ULYJmVrVnNWw1_medium.jpg"
                alt="comment"
                width="100%"
              />
              <a>
                «Это неправильно»: Сафаев высказался о хокимах, которые
                возглавляют исполнительную и представительную власть
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

export default World;
