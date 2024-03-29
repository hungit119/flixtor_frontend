import {
  faCalendarDays,
  faChartLine,
  faCube,
  faEarth,
  faFilter,
  faFolderOpen,
  faList,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const apiUrl = "http://localhost:8000/api";
// process.env.NODE_ENV !== "production"
//   ? "http://localhost:8000/api"
//   : "https://flixtorvideo.herokuapp.com/api";
export const ACCESS_TOKEN_NAME = "token";
export const NOTIFY_ALL_TOAST = "notify_all";
export const AUTH_TOAST = "AUTH_TOAST";
export const menuItemsGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Costume",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Game-Show",
  "History",
  "Horror",
  "Kungfu",
  "Music",
  "Mystery",
  "Reality-TV",
  "Romance",
  "Sci-Fi",
  "Sport",
  "Thriller",
  "TV-Show",
  "War",
  "Western",
];
export const menuItemCountry = [
  "Argentina",
  "Australia",
  "Austria",
  "Belgium",
  "Brazil",
  "Canada",
  "China",
  "Czech Republic",
  "Denmark",
  "Finland",
  "France",
  "Germany",
  "Hong Kong",
  "Hungary",
  "India",
  "International",
  "Ireland",
  "Israel",
  "Italy",
  "Japan",
  "Mexico",
  "Netherlands",
  "New Zealand",
  "Norway",
  "Philippines",
  "Poland",
  "Romania",
  "Russia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sweden",
  "Switzerland",
  "United Kingdom",
  "United States",
];
export const genreMenu = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Costume",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Game-Show",
  "History",
  "Horror",
  "Kungfu",
  "Music",
  "Mystery",
  "Reality-TV",
  "Romance",
  "Sci-Fi",
  "Sport",
  "Thriller",
  "TV-Show",
  "War",
  "Western",
  "Include all selected",
];
export const typeMenu = ["Movie", "TV-Series"];
export const countryMenu = [
  "Argentina",
  "Australia",
  "Austria",
  "Belgium",
  "Brazil",
  "Canada",
  "China",
  "Czech Republic",
  "Denmark",
  "Finland",
  "France",
  "Germany",
  "Hong Kong",
  "Hungary",
  "India",
  "International",
  "Ireland",
  "Israel",
  "Italy",
  "Japan",
  "Mexico",
  "Netherlands",
  "New Zealand",
  "Norway",
  "Philippines",
  "Poland",
  "Romania",
  "Russia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sweden",
  "Switzerland",
  "United Kingdom",
  "United States",
];
export const yearMenu = [
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
  "2013",
  "2012",
  "2011",
  "2010",
  "2009",
  "2008",
  "2007",
  "2006",
  "2005",
  "2004",
  "2003",
  "2002",
  "2000s",
  "1990s",
  "1980s",
  "1970s",
  "1960s",
  "1950s",
  "1940s",
  "1930s",
  "1920s",
  "1910s",
  "1900s",
];
export const quantityMenu = ["HD", "HDRip", "SD", "TS", "CAM"];
export const sortMenu = [
  "Default",
  "Recently Added",
  "Most Watched",
  "Name",
  "IMDb",
  "Release Date",
  "Site Rating",
];
export const optionsFilter = [
  {
    menu: genreMenu,
    size: "large",
    icon: faFolderOpen,
    title: "Genre",
    value: "All",
  },
  {
    menu: typeMenu,
    size: "small",
    icon: faFolderOpen,
    title: "Type",
    value: "All",
    grid: 12,
  },
  {
    menu: countryMenu,
    size: "large",
    icon: faEarth,
    title: "Country",
    value: "All",
  },
  {
    menu: yearMenu,
    size: "medium",
    icon: faCalendarDays,
    title: "Year",
    value: "All",
  },
  {
    menu: quantityMenu,
    size: "small",
    icon: faCube,
    title: "Quantity",
    value: "All",
    grid: 12,
  },
  {
    menu: sortMenu,
    size: "small",
    icon: faFilter,
    title: "Sort",
    value: "All",
    grid: 12,
  },
];

export const tabs = [
  {
    title: "Movies",
    icon: <FontAwesomeIcon icon={faPlayCircle} />,
    href: "movies",
  },
  {
    title: "TV-Shows",
    icon: <FontAwesomeIcon icon={faList} />,
    href: "tv-shows",
  },
  {
    title: "Trending",
    icon: <FontAwesomeIcon icon={faChartLine} />,
    href: "trending",
  },
];
export const listMovieSkeleton = Array(10);
