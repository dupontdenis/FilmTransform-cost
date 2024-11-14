// FILE: transform.mjs
import { films, actorSalaries } from './dataFilms.mjs';

// Example transformation: Add a new field 'rating' and 'cost' to each film
const transformedFilms = films.map(film => {
    const cost = film.actors.reduce((total, actor) => total + (actorSalaries.get(actor) || 0), 0);
    return {
        ...film,
        cost
    };
});

// Sort films by cost in descending order
transformedFilms.sort((filmA, filmB) => filmB.cost - filmA.cost);

export { transformedFilms };