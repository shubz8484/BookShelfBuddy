import React from 'react'
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
//import { Label } from 'flowbite-react';
import { useContext } from 'react';
import { Spinner } from 'flowbite-react';

const PrivateRoute = ({childern}) => {

const {user, loading} = useContext(AuthContext);
const location = useLocation();

if(loading){
    return<div className='text-center'>
        <Spinner aria-Label="Center-aligned spinner example"/>
    </div>
}

if(user){
    return childern;
}

  return (
    <Navigate to="/login" state={{from: location}} replace></Navigate>
  )
}

export default PrivateRoute;
