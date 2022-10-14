import axios from 'axios';
export const getAllPlayer =  
    axios.create({
        headers:{
            'Client-Id':"dflyia1lyuoo18d39gxy9m4u6re3vn",
            "Authorization":"Bearer ae1n6th94v99gkjqt5gjnkr3indlas"
        },
    })
export const getAllLive = (params)=>  
    axios.create({
        headers:{
            'Client-Id':"dflyia1lyuoo18d39gxy9m4u6re3vn",
            "Authorization":"Bearer ae1n6th94v99gkjqt5gjnkr3indlas"
        },
        params:{
            user_id:params
        }
    })
