import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { getAllLive, getAllPlayer } from "../../services/twitch";
import Slider from "../common/Slider";
import { Oval } from 'react-loader-spinner';
import { loadingSpinner } from "../../app/loadingSlice";
import { useDispatch, useSelector } from "react-redux";

const Twitch = () => {
  const [users,setUsers] = useState([])
  const {loading} = useSelector((state) => state.loading)
  const dispatch = useDispatch()
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        dispatch(loadingSpinner(true));
        const {data} = await getAllPlayer.get('https://api.twitch.tv/helix/teams?name=faze')
        const allPlayers = await data.data[0].users
        const user = await allPlayers.map(user => user.user_id)
        const {data:lives} = await getAllLive([...user]).get('https://api.twitch.tv/helix/streams')
        setUsers(lives.data)
        dispatch(loadingSpinner(false));
      }catch(err){
        console.log(err);
        dispatch(loadingSpinner(false));
      }
    }
    fetchData()
  },[])

  return (
    <section className="bg-black py-16">
      <h3 className="text-center text-3xl text-white">live on twitch{users.length === 0 && !loading && <span className="block text-xs text-xred sm:inline">offlinne</span>}</h3>
      <div className="containerr mt-14">
      {loading === true && <div className="w-full flex justify-center my-5"><Oval color="#fff" secondaryColor="#fff"/></div>}
      {users.length === 0 && !loading && (
          <img src="/images/offline.jpeg" alt="" className="w-full h-36 sm:h-[350px]"/>
        )} 
       <Slider>
          {users.map(user => (
      <SwiperSlide key={user.id}>
        <div className="bg-xred border-2 border-black scale-75 curent opacity-30">
          <div className="relative">
            <a href={`https://www.twitch.tv/${user.user_login}`} alt={user.user_login} target="blank">
            <img src={`https://static-cdn.jtvnw.net/previews-ttv/live_user_${user.user_login}.jpg`} alt="" className="w-full h-60" />
            </a>
          </div>
          <span className="bg-red-500 text-white p-2 absolute top-0 right-0 rounded-md">LIVE</span>
          <h3 className="pt-2 px-4 h-10">
          {user.title.length < 50 ? user.title : `${user.title.slice(0,50)} ...`}
          </h3>
          <section className="flex justify-between p-4 my-5">
            <p>{user.user_name}</p>
            <p className="">{user.viewer_count} 👀</p>
          </section>
          <p className="px-4">playing {user.game_name}</p>
        </div>
      </SwiperSlide>
    ))}
       </Slider>
      
      </div>
    </section>
  );
};

export default Twitch;
