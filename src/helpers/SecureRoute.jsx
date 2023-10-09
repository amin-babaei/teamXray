import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading';
import NotFound from '../pages/NotFound';
import { useEffect } from 'react';
import { userProfile } from '../app/features/user/userAction';

export const SecureRoute = () => {
    const { loading, userInfo } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userProfile())
    },[dispatch])

    if(loading) return <Loading/>
    return userInfo ? <Outlet/> : <NotFound/>;
}