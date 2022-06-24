import React from "react";

import { Container, Row, Col, Nav } from "react-bootstrap";
import Navigation from "../components/navbar";
import CustomSlider from "../components/navbar/custom-slider";

import {Link} from "react-router-dom"

import data from "../data/data.json";
import acticls from "../data/articles.json";

import img1 from "../assets/aricle1.jpg"
import img2 from "../assets/article2.jpg"
import img3 from "../assets/article3.jpg"
import img4 from "../assets/article4.jpg"
import img5 from "../assets/article5.jpg"
import img6 from "../assets/article6.jpg"

const Home = () => {
  return (
    <div className="wrapper">
      <Navigation />
      <Container>
        <div className="mt-5 mb-5">
          <CustomSlider data={data} />
        </div>

        <div className="acticls">

              <div className="acticle">
                <img src={img1} alt="comment" />
                <h2>Грозит ли узбекистанцам новая вспышка заболевания ковидом этим летом</h2>
              </div>
              <div className="acticle">
                <img src={img2} alt="comment" />
                <h2>Ахмедхаджаев назвал главные препятствия для Узбекистана на пути достижения углеродной нейтральности.</h2>
              </div>
              <div className="acticle">
                <img src={img3} alt="comment" />
                <h2>Конституциявий ислоҳотлар инсон қадри учун</h2>
              </div>
              <div className="acticle">
                <img src={img4} alt="comment" />
                <h2>Это неправильно»: Сафаев высказался о хокимах, которые возглавляют исполнительную и представительную власть</h2>
              </div>
              <div className="acticle">
                <img src={img5} alt="comment" />
                <h2>Аномальная жара. Узгидромет предупредил узбекистанцев о приближающемся зное</h2>
              </div>
              <div className="acticle">
                <img src={img6} alt="comment" />
                <h2>Мирзиёев и Алиев подписали декларацию об углублении стратегического партнерства</h2>
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

export default Home;
