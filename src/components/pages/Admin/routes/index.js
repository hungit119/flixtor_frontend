import Add from "../content/Add";
import Delete from "../content/Delete";
import Film from "../content/Film/Film";
import List from "../content/List";
import User from "../content/User";

const privateRouter = [
  {
    path: "/dashboard",
    component: List,
    permission: 2,
  },
  {
    path: "/add",
    component: Add,
    permission: 2,
  },
  {
    path: "/film/:id",
    component: Film,
    permission: 2,
  },
  {
    path: "/film/update/:id",
    component: Add,
    typeFunction: "update",
    permission: 2,
  },
  {
    path: "/delete",
    component: Delete,
    permission: 2,
  },
  {
    path: "/user",
    component: User,
    permission: 3,
  },
];
export default privateRouter;
