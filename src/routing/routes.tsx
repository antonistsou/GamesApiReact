import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import GameDetailPage from "../pages/GameDetailPage";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true, element: <HomePage></HomePage>
            },
            {
                path: ':slug', element: <GameDetailPage></GameDetailPage>
            }
        ]
    }
]);

export default router;