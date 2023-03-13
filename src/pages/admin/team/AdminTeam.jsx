import { useEffect } from 'react'
import AddTeam from './AddTeam'
import Loading from '../../../helpers/Loading';
import { toastError } from '../../../helpers/Toast';
import DeleteTeam from './DeleteTeam';
import Players from './Players';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeams, removedTeam } from '../../../app/features/team/teamAction';
import { selectAllTeams } from '../../../app/features/team/teamSlice';

const AdminTeam = () => {
  const { userInfo } = useSelector((state) => state.user)
  const allTeams = useSelector(selectAllTeams)
  const { status } = useSelector(state => state.teams)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTeams())
  }, [dispatch])

  const removeTeam = (teamId) => {
    if (userInfo?.role === "admin") {
      dispatch(removedTeam(teamId));
    } else toastError('you dont have permission')
  };
  return (
    <div className='containerr py-10 min-h-screen'>
      <Helmet>
        <title>Admin-Teams</title>
      </Helmet>
      <AddTeam />
      <section className='my-5'>
        {status === 'loading' && <Loading />}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {allTeams.map(team => (
            <div key={team._id}>
              <img src={`${process.env.REACT_APP_BASE_URL}/${team.banner}`} alt={team.name} className="h-64 w-full" />
              <div className='flex justify-between'>
                <DeleteTeam deleted={() => removeTeam(team._id)} />
                <Players teamTitle={team.name} teamId={team._id} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AdminTeam