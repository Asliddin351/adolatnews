import React from "react";
import { Carousel } from "react-bootstrap";

import slider1 from "../../../assets/slider1.jpeg";
import slider2 from "../../../assets/article6.jpg";
import slider3 from "../../../assets/slider3.jpg";

const CustomSlider = ({ data }) => {
  return (
    <Carousel variant="light">
      <Carousel.Item>
        <img src={slider1} alt="First slide" width="100%" height="650px" />
        <Carousel.Caption>
          <h5>
            Президент Узбекистана примет участие в саммите по вопросам
            глобального развития "БРИКС плюс"
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slider2} alt="First slide" width="100%" height="650px" />
        <Carousel.Caption>
          <h5>
            Мирзиёев и Алиев подписали декларацию об углублении стратегического
            партнерства
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slider3} alt="First slide" width="100%" height="650px" />
        <Carousel.Caption>
          <h5>
            Названа причина аварии на Тупалангской ГЭС Ранее в социальных сетях
            появились сообщения о утечке воды из водохранилища Тупаланг.
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
};

export default CustomSlider;
