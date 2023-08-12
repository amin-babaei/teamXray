import { Fragment, useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNewTeam, fetchTeam, updateTeam } from '../../../app/features/team/teamAction';
import {  toastSuccess } from '../../../helpers/Toast';
import AddPlayer from './AddPlayer';
import { Link, useLocation, useParams } from 'react-router-dom';
import { selectPlayer } from '../../../app/features/team/teamSlice';

const initialState = {
  name: "",
  player: {
    playerName: "",
    game: "",
    youtube: "",
    twitch: "",
    instagram: "",
    twitter: "",
  },
  submittedPlayer: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'setPlayer':
      return { ...state, player: action.payload };
    case 'setName':
      return { ...state, name: action.payload };
    case 'setSubmittedPlayer':
      return { ...state, submittedPlayer: action.payload };
    default:
      return state
  }
}
const TeamForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const team = useSelector(selectPlayer.selectAll)
  const reduxDispatch = useDispatch()
  const { title } = useParams();
  const { pathname } = useLocation();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'setPlayer', payload: { ...state.player, [name]: value } });
  };

  useEffect(() => {
    if(pathname.includes(title)){
      reduxDispatch(fetchTeam(title))
    }
},[pathname, reduxDispatch, title])

useEffect(() => {
  if (team.length > 0 && pathname.includes(title)) {
    const { name, players } = team[0];
    dispatch({ type: 'setName', payload: name });
    dispatch({ type: 'setSubmittedPlayer', payload: [ ...players ] });
  }
}, [pathname, team, title]);

  const handleAddPlayer = () => {
    dispatch({ type: 'setSubmittedPlayer', payload: [...state.submittedPlayer, state.player] });
    dispatch({ type: 'setPlayer', payload: initialState.player });
  }

  const handleDeletePlayer = (index) => {
    const updatedPlayers = [...state.submittedPlayer];
    updatedPlayers.splice(index, 1);
    dispatch({ type: 'setSubmittedPlayer', payload: updatedPlayers });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
      let data = new FormData();
      data.append("name", state.name.split(" ").join("-"));
      data.append("banner", event.target.banner.files[0]);
      data.append("player", JSON.stringify(state.submittedPlayer));

        if(pathname.includes(title)){
          const { meta } = await reduxDispatch(updateTeam({ id: team[0]._id, team: data }));
          if (meta.requestStatus === "fulfilled") {
            toastSuccess('update successfuly !')
          }
        }else{
          const { meta } = await reduxDispatch(addNewTeam(data))
          if (meta.requestStatus === "fulfilled") {
            toastSuccess('team created !')
          }
        }
  };
  return (
    <>
      <Link to='/admin/team'>
          <button className="fas fa-arrow-left w-10 h-10 rounded transition-colors duration-300 text-white text-lg ml-5 sm:ml-20 mt-10 shadow-md shadow-xred hover:bg-xred"></button>
      </Link>
      <form
        className="flex flex-col mb-5 mt-10 justify-between bg-black text-white px-5"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="text-white bg-black placeholder-gray-300 shadow-md shadow-xred font-bold border-none outline-none rounded-md w-full p-4 text-sm mb-5 sm:w-2/3 sm:mx-auto"
          placeholder="name"
          name="name"
          value={state.name}
          onChange={(e) => dispatch({ type: 'setName', payload: e.target.value })}
        />
        <input type="file" name="banner" className='text-white bg-black placeholder-gray-300 shadow-md shadow-xred border-none outline-none rounded-md w-full px-4 py-2 text-sm mb-5 sm:w-2/3 sm:mx-auto'/>
        <AddPlayer player={state.player} changeInput={handleChangeInput} addPlayer={handleAddPlayer} submittedPlayer={state.submittedPlayer} deletePlayer={handleDeletePlayer}/>
        <button className="btn mt-5 uppercase font-bold w-2/3 md:w-1/3 mx-auto">submit</button>
      </form>
    </>
  )
}

export default TeamForm