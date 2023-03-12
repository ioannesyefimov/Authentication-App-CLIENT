import React, {useEffect, useState} from 'react'
import { Outlet, useLocation, Navigate} from 'react-router-dom'
import { useAuthentication } from './Authentication'
import useFetch from '../hooks/useFetch'
import useGithub from '../hooks/useGithub/useGithub'
import { timeout } from '../utils/utils'
const ProtectedRoute =  () => {
    const {Loading,isLogged} =  useAuthentication();
   
 

    const location = useLocation()

    if(Loading && !isLogged ){
      return <h1 className='loading'>Loading...</h1>
    } 
    if(isLogged){

      switch(location.pathname){
        case '/': return <Navigate to='/profile' replace />
        case '/profile': return <Outlet/>
        case '/profile/change': return <Outlet />
      }
    }   

}

export default ProtectedRoute