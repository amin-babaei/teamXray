import React, { useEffect } from 'react'
import AddTeam from './AddTeam'
import { useNavigate } from 'react-router-dom';
import { deleteTeam } from './../../../services/team';
import Loading from '../../../helpers/Loading';
import { toastError, toastSuccess } from '../../../helpers/Toast';
import DeleteTeam from './DeleteTeam';
import Players from './Players';
import { Helmet } from 'react-helmet';
import config from '../../../services/config.json'
import { loadingSpinner } from '../../../app/loadingSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeams } from './../../../app/team/teamAction';

const AdminTeam = () => {
  const {loading} = useSelector((state) => state.loading)
  const {userInfo} = useSelector((state) => state.user)
  const {teamList} = useSelector(({teams:listTeams}) => listTeams)
  console.log(teamList);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchTeams())
},[dispatch])

  const removeTeam = async (teamId) => {
    if(userInfo?.role==="admin"){
      dispatch(loadingSpinner(true));
      try {
        const response = await deleteTeam(teamId);
        if(response.status === 200){
          toastSuccess("Team deleted successfully");
          dispatch(loadingSpinner(false));
          dispatch(fetchTeams())
          navigate('/admin')
        }
      } catch (err) {
        console.log(err.message);
        dispatch(loadingSpinner(false));
      }
    }else toastError('you dont have permission')
  };
 
  return (
    <div className='containerr py-10 min-h-screen'>
      <Helmet>
        <title>Admin-Teams</title>
      </Helmet>
        <AddTeam/>
        <section className='my-5'>
        {loading===true && <Loading/>}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {teamList.Teams?.map(team => (
          <div key={team._id}>
            <img src={`${config.localapi}/${team.banner}`}alt={team.name} className="h-64 w-full"/>
            <div className='flex justify-between'>
            <DeleteTeam deleted={()=>removeTeam(team._id)}/>
            <Players teamTitle={team.name} teamId={team._id}/>
            </div>
          </div>
        ))}
        </div>
      </section>
    </div>
  )
}

export default AdminTeam