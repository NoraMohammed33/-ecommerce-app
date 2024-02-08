import React from 'react';
import { Navigate } from 'react-router-dom';
// import Style from './ProtectedRoute.module.css'

export default function ProtectedRoute(props) {

    if (localStorage.getItem('userToken') !== null) {
        console.log("ok")
        return props.children
    }
    else {
        console.log("not")
        return <Navigate to={'/login'}/>
    }
}
