import { createBrowserRouter,createRoutesFromElements,Route } from "react-router-dom";
import ErrorPage from "../pages/main/ErrorPage";
import Login from "../pages/auth/Login";
import { Fragment, Suspense } from "react";
import Loader from "../pages/main/Loader";
import Register from "../pages/auth/Register";
import Root from "./Root";
export const router=createBrowserRouter(
    createRoutesFromElements(
        <Fragment>
        <Route  element={<Root/>} errorElement={<ErrorPage/>}>
           <Route path="/login" element={<Login/>}/>
           <Route path="/register" element={<Suspense fallback={<Loader/>}><Register/></Suspense>}/>
        </Route>
        </Fragment>
    )
)