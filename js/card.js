"use strict"

import {GetData} from './modules/data.js';

const cardBlock = document.querySelector('.card-block');

const urlId = (window.location.search).replace(/\D/g,'')

function oneProductTemplate(data) {
    const {id, title, discount, oldPrice, image, color} = data;
    const card =`<div class="card" data-product-id="${id}">
                
                    <div class="card-slider">
                        <div style="--swiper-navigation-color: #138bb3; --swiper-pagination-color: #fff;" class="swiper mySwiper2">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img src="img/${image}" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="img/model-11.jpeg" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="img/model-15.jpg" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="img/model-16.jpg" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="img/model-17.jpg" />
                                </div>
                            </div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </div>
                        <div thumbsSlider="" class="swiper mySwiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img src="img/${image}" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="img/model-11.jpeg" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="img/model-15.jpg" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="img/model-16.jpg" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="img/model-17.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card-info">
                        <div class="title">
                            ${title}
                        </div>
                        <div class="color">
                            <div class="color-title">Цвет</div>
                            <div class="color-choice white"></div>
                            <div class="color-choice black"></div>
                            <div class="color-choice titanium"></div>
                            <div class="color-choice blue"></div>
                        </div>
                        <div class="memory">
                            <div class="color-title">Память</div>
                            <div class="memory-choice"> 256 ГБ </div>
                            <div class="memory-choice"> 512 ГБ </div>
                            <div class="memory-choice"> 1 ТБ </div>
                        </div>
                        <div class="SIM">
                            <div class="color-title">Связь</div>
                            <div class="SIM-choice"> dual-SIM </div>
                            <div class="SIM-choice"> SIM + eSIM </div>
                        </div>
                        <div class="price">
                            ${oldPrice} &#8381;
                        </div>
                        <div class="add"> Оформить предзаказ </div>
                    </div>

                </div>`
    cardBlock.insertAdjacentHTML("beforeend", card)
}


const getData = new GetData('data/data.json');
const products = getData.getAllProducts();

products.then((data) => {
    const prodId = data.find((item) => {
        return item.id === Number(urlId)
    })

    oneProductTemplate(prodId)

    var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
    var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });

})


