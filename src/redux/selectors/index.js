export const filmsSelector = (state) =>
  state.filmsAdmin.films.filter((film) => film.sortDel === 0);
export const filmAdminSelector = (state) => state.filmAdmin.film;
export const offSetSelector = (state) => state.offSet;
export const filmsTypeSelector = (state) => state.films;
export const filmSelector = (state) => state.film.filmData;
export const filmSuggestsSelector = (state) => state.film.filmSuggests;
export const filmsTypeAllMoviesSelector = (state) => state.films.movies;
export const filmsTypeAllTvSelector = (state) => state.films.tvSeries;
export const filmsTypeAllTrendingSelector = (state) => state.films.trending;
export const filmsFilterSelector = (state) => state.filmsFilter;
export const searchInputValueSelector = (state) => state.search.searchInput;
export const searchResultSelector = (state) => state.search.searchResults;
export const searchResultFullSelector = (state) =>
  state.search.searchResultsFull;
export const filmIdSelector = (state) => state.filmAdmin.id;
export const filmIdRestoreSelector = (state) => state.filmAdmin.idRestore;
export const filmIdRemoveSelector = (state) => state.filmAdmin.idRemove;
export const filmsTrashSelector = (state) =>
  state.filmsAdmin.films.filter((film) => film.sortDel === 1);
// User
export const userInfoUsernameSelector = (state) => state.user.username;
