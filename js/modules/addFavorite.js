"use strict"

function addFavorite(productProperties, block) {

    const template =`<div class="favorite-product" data-product-id="${productProperties.id}">
                        <div class="delete-favorite-product"> <i class="bi bi-trash"></i> </div>
                        <a href="${productProperties.link}" class="link-favorite-product">
                            <div class="favorite-product-img">
                                <img src="${productProperties.image}" alt="">
                            </div>
                            <div class="favorite-product-info">
                                <div class="favorite-product-title">
                                    ${productProperties.title}
                                </div>
                                <div class="favorite-product-price">
                                    ${productProperties.price}
                                </div>
                            </div>
                        </a>
                        <div class="add-favorite-in-basket"><i class="bi bi-cart-fill"></i></div>
                    </div>`;
    block.innerHTML += template;
}

export {addFavorite}