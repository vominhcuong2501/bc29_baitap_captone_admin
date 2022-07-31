import { useRoutes, Navigate } from "react-router-dom";
import AdminLayout from "../layouts/homeAdmin";
import FilmList from "../modules/film-list/film-list";
import ShowTimes from "../modules/show-times/show-times";
import UserList from "../modules/users-list/users-list"
import AddFilm from "../pages/add-film/add-film";
import Login from "../pages/login/login";

export default function Router() {
    const routing = useRoutes([
        {
            path: '/',
            element: <AdminLayout />,
            children: [
                {
                    path: '/',
                    element: <Navigate to="/user" />,
                },
                {
                    path: '/user',
                    element: <UserList />
                },
                {
                    path: '/filmlist',
                    element: <FilmList />
                },
                {
                    path: '/showtime',
                    element: <ShowTimes />
                },
                {
                    path: '/login',
                    element: <Login />
                },
                {
                    path: '/addfilm',
                    element: <AddFilm />
                },
            ]
        }
    ])
    return routing;
}