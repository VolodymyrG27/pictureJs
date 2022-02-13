import modals from './modules/modals';
import sliders from './modules/sliders';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import filtr from './modules/filtr';
import pictureSize from './modules/pictureSize';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filtr();
    pictureSize('.sizes-block');
});