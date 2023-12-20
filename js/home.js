"use strict"

import { GetData } from "./modules/data.js";
import { addFavorite } from "./modules/addFavorite.js";


const cards = document.querySelector('.cards')


function allProductTemplate(data) {
    data.forEach((item) => {
        const {id, title, discount, oldPrice, image, color} = item
        const card =`<div class="card" data-product-id="${id}">
                        <div class="add-favorite">
                            <div class="none"><i class="bi bi-heart-fill"></i></div>
                        </div>
                        <a href="card.html?${id}" class="go-to-card">
                            <div class="card-inner">
                                <div class="card-img">
                                    <img src="img/${image}" alt="card">
                                </div>
                                <div class="card-title">
                                    ${title} 
                                </div>
                                <div class="card-price">
                                    ${oldPrice} &#8381;
                                </div>
                            </div>
                        </a>
                        <div class="add-basket">
                            <div class="none"><i class="bi bi-cart-fill none"></i></div>
                        </div>
                    </div>`;

        cards.insertAdjacentHTML('beforeend', card);
    })
}



const getData = new GetData('data/data.json')
const products = getData.getAllProducts();

products.then((data) => {
    allProductTemplate(data)
    
    const cards = document.querySelectorAll('.card');
    cards.forEach((item) => {
        item.addEventListener('mouseover', (e) => {
            e.currentTarget.children[0].children[0].style.display = 'block'
            e.currentTarget.children[2].children[0].style.display = 'block'
        })
        item.addEventListener('mouseout', (e) => {
            e.currentTarget.children[0].children[0].style.display = 'none'
            e.currentTarget.children[2].children[0].style.display = 'none'
        })

        let favoriteElem = item.children[0];
        favoriteElem.addEventListener('click', (e) => {

            if (!e.target.style.color || e.target.style.color === 'rgb(103, 103, 103)') {
                e.target.style.color = '#b735ae';
            } else {
                e.target.style.color = '#676767';
            }

            const productProp = {
                id: item.getAttribute('data-product-id'),
                image: item.querySelector('.card-img').children[0].getAttribute('src'),
                link: item.querySelector('.go-to-card').getAttribute('href'),
                title: item.querySelector('.card-title').innerText,
                price: item.querySelector('.card-price').innerText,
            }

            addFavorite(productProp, favoriteGrid)
        })

        let basketElem = item.children[2];
        basketElem.addEventListener('click', (e) => {

            if (!e.target.style.color || e.target.style.color === 'rgb(103, 103, 103)') {
                e.target.style.color = '#b735ae';
                e.target.style.borderColor = '#b735ae';
            } else {
                e.target.style.color = '#676767';
                e.target.style.borderColor = '#676767';
            }

            const productProp = {
                id: item.getAttribute('data-product-id'),
                image: item.querySelector('.card-img').children[0].getAttribute('src'),
                link: item.querySelector('.go-to-card').getAttribute('href'),
                title: item.querySelector('.card-title').innerText,
                price: item.querySelector('.card-price').innerText,
            }

            addFavorite(productProp, basketGrid)
        })

    })
})


const favoriteGrid = document.querySelector('.favorite-grid')
const favoriteBlock = document.querySelector('.favorites-block')
const favoritesBtn = document.querySelector('.favorites')

const basketGrid = document.querySelector('.basket-grid')
const basketBlock = document.querySelector('.basket-block')
const basketBtn = document.querySelector('.basket')

favoritesBtn.addEventListener('click', () => {
    if (favoriteBlock.classList.contains('none')) {
        favoriteBlock.classList.remove('none')
        basketBlock.classList.add('none')
    } else {
        favoriteBlock.classList.add('none')
    }
})

basketBtn.addEventListener('click', () => {
    if (basketBlock.classList.contains('none')) {
        basketBlock.classList.remove('none')
        favoriteBlock.classList.add('none')
    } else {
        basketBlock.classList.add('none')
    }
})