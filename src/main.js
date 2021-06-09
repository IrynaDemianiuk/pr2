import {createProfileTemplate} from './view/profile.js';
import {createFilterTemplate} from './view/filter.js';
import {createSortingTemplate} from './view/sort.js';
import {createFilmsListTemplate} from './view/films-list.js';
import {createFilmsListTitleTemplate} from './view/films-list-title.js';
import {createFilmsListExtraTemplate} from './view/films-list-extra.js';
import {createLoadMoreButtonTemplate} from './view/load-more-button.js';
import {createFilmsListDetailsTemplate} from './view/films-details.js';
import {createFilmCardTemplate} from './view/films-card';
import {createFilmCardControlsTemplate} from './view/films-card-controls';
import {createFooterStatisticTemplate} from './view/statistics';
import {generateFilmItem} from './mock/films.js';


const RenderPosition = {
    AFTERBEGIN: `afterbegin`,
    BEFOREEND: `beforeend`
};

const render = (container, template, place) => {
    switch (place) {
        case RenderPosition.AFTERBEGIN:
          container.insertAdjacentHTML('afterBegin', template);
          break;
        case RenderPosition.BEFOREEND:
          container.insertAdjacentHTML('beforeEnd', template);
          break;
    }
}

const siteHederElement = document.querySelector(`.js-header`);
const siteMainElement = document.querySelector(`.js-main`);
const siteFooter = document.querySelector(`.js-footer`);
const FILMS_COUNT = 26;
const FILMS_COUNT_PER_STEP = 8;
const FILMS_EXTRA_TEMPLATE_COUNT = 2;
const FILMS_EXTRA_COUNT = 2;

const films = new Array(FILMS_COUNT).fill().map(generateFilmItem);


render(siteHederElement, createProfileTemplate(), 'beforeend');

render(siteMainElement, createFilterTemplate(), 'beforeend');
render(siteMainElement, createSortingTemplate(), 'beforeend');
render(siteMainElement, createFilmsListTemplate(), 'beforeend');

const filmInner = document.querySelector(`.films`);
const filmList = filmInner.querySelector(`.films-list`);
const filmListContainer = filmList.querySelector(`.films-list__container`);

render(filmList, createFilmsListTitleTemplate(), 'afterbegin');

for (let i = 0; i < FILMS_COUNT; i++) {
    render(filmListContainer, createFilmCardTemplate(films[i]), 'beforeend');
}

render(filmList, createLoadMoreButtonTemplate(), 'beforeend');

//EXTRA
for (let i = 0; i < FILMS_EXTRA_TEMPLATE_COUNT; i++) {
    render(filmInner, createFilmsListExtraTemplate(), 'beforeend');
}

const filmListContainerExtra = filmInner.querySelectorAll(`.films-list--extra`);

filmListContainerExtra.forEach((it)=> {
    render(it, createFilmsListTemplate(), 'beforeend');

    for (let i = 0; i < FILMS_EXTRA_COUNT; i++) {
        render(it.querySelector('.films-list__container'), createFilmCardTemplate(films[i]), 'beforeend');
    }
});

render(siteFooter, createFooterStatisticTemplate(), 'beforeend');
render(siteFooter, createFilmsListDetailsTemplate(films[0]), 'beforeend');
