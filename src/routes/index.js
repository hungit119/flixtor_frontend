import SessionsLayout from "../components/Layouts/SessionsLayout";
import Admin from "../components/pages/Admin";
import Contact from "../components/pages/Contact/Contact";
import Detail from "../components/pages/Detail";
import FilmFilter from "../components/pages/FilmsFilter/FilmsFilter";
import UserProfile from "../components/pages/Profile/UserProfile";
import SearchDetail from "../components/pages/SearchDetail";
import SitePage from "../components/pages/Site";
import SearchResult from "../components/SearchResult";
import HomePage from "../components/pages/Home";
// Public Routes
const publicRoutes = [
  { path: "/", component: SitePage },
  { path: "/home/:param", component: HomePage },
  {
    path: "/movies",
    component: SessionsLayout,
    title: "Movies",
    root: "moive",
  },
  {
    path: "/tv-series",
    component: SessionsLayout,
    title: "TV Series",
    root: "tv-series",
  },
  {
    path: "/top-imdb",
    component: SessionsLayout,
    title: "Top IMDB",
    root: "top-imdb",
  },
  { path: "search/:key/:type", component: SearchDetail },
  { path: "/contact", component: Contact },
  { path: "/movie/:id", component: Detail, type: "Movies" },
  { path: "/tv/:id", component: Detail, type: "TV-Series" },
  { path: "/admin/*", component: Admin, headerOnly: true },
  { path: "/films-filter/:redirect", component: FilmFilter },
  { path: "/search", component: SearchResult },
  {
    path: "/films/search/:key/:type",
    component: SearchResult,
    feature: "searchByType",
  },
  { path: "/user/*", component: UserProfile },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
