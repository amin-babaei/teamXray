import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from './Loading';

export const SecureRoute = () => {
    const { loading } = useSelector((state) => state.user)
    if(loading) return <Loading/>
    
    return <Outlet/>;
}