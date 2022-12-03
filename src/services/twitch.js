import axios from 'axios';
export const getAllPlayer =  
    axios.create({
        headers:{
            'Client-Id':process.env.REACT_APP_CLIENT_ID_TWITCH,
            "Authorization":`Bearer ${process.env.REACT_APP_AUTHORIZATION_TWITCH}`
        },
    })
export const getAllLive = (params)=>  
    axios.create({
        headers:{
            'Client-Id':process.env.REACT_APP_CLIENT_ID_TWITCH,
            "Authorization":`Bearer ${process.env.REACT_APP_AUTHORIZATION_TWITCH}`
        },
        params:{
            user_id:params
        }
    })
