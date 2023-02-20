import { createBrowserRouter } from 'react-router-dom';
import AuthForm from "../modules /AuthForm/AuthForm";
import MainPage from "../pages/MainPage/MainPage";
import ErrorElement from "./ErrorElement/ErrorElement";
import StartPage from "../pages/StartPage/StartPage";
import Header from "../components/Header/Header";


export const router = createBrowserRouter([
    {
        path: '/',
        element: (<Header>
                    <StartPage/>
                  </Header>),
        error: <ErrorElement/>
    },
    {
        path: 'main',
        element: (<Header>
            <MainPage/>
        </Header>),
        error: <ErrorElement/>
    },
])


