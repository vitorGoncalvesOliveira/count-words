import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from './context/user';
import api from './api/api';

export default function RequireAuth({ children }) {
    const { state ,setState } = useContext(UserContext);   
    const token = localStorage.getItem('@Netlex:token')
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setState(token ? token : '')
    
  
    if (!state) {     
      return <Navigate to="/" />;
    }
  
    return children;
  }