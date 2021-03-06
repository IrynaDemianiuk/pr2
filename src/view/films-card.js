import dayjs from 'dayjs';

export const createFilmCardTemplate = (film = {}) => {
    const {title, rating, releaseDate, duration, genre} = film;
    
    return (
        `<article class="film-card">
            <h3 class="film-card__title">${title}</h3>
            <p class="film-card__rating">${rating}</p>
            <p class="film-card__info">
                <span class="film-card__year">${dayjs(releaseDate).year()}</span>
                <span class="film-card__duration">${duration}</span>
                <span class="film-card__genre">${genre}</span>
            </p>
            <img src="./images/posters/the-dance-of-life.jpg" alt="" class="film-card__poster">
            <p class="film-card__description">Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…</p>
            <a class="film-card__comments">5 comments</a>
            <form class="film-card__controls">
                <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
                <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
                <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
            </form>
        </article>`
    )
}