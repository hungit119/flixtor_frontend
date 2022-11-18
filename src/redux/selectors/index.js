export const filmsSelector = (state) =>
  state.filmsAdmin.films.filter((film) => film.sortdel === false);
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
  state.filmsAdmin.films.filter((film) => film.sortdel === true);
export const filmsWatchListSelector = (state) => state.films.watchList;
// User
export const userInfoUsernameSelector = (state) => state.user.username;
export const userIDSelector = (state) => state.user.id;
export const userInfoSelector = (state) => state.user;
export const userVerifySelector = (state) => state.user.verify;
export const userRuleSelector = (state) => state.user.rule;
//control
export const showModalSelector = (state) => state.control.modalShow;
export const isLoadingFilmsSelector = (state) => state.control.isLoading;
// Admin
export const userAdminSelector = (state) => state.admin.users;
// Auth
export const isAuthenticatedSelector = (state) => state.auth.isAuthenticated;
export const authLoadingSelector = (state) => state.auth.authLoading;
