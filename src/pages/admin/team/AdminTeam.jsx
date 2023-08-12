import { useEffect } from 'react'
import Loading from '../../../helpers/Loading';
import DeleteTeam from './DeleteTeam';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeams, removedTeam } from '../../../app/features/team/teamAction';
import { selectAllTeams } from '../../../app/features/team/teamSlice';
import { Link } from 'react-router-dom';

const AdminTeam = () => {
  const allTeams = useSelector(selectAllTeams)
  const { status } = useSelector(state => state.teams)
  const dispatch = useDispatch()

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTeams());
    }
  }, [dispatch, status]);

  const removeTeam = (teamId) => {
    dispatch(removedTeam(teamId));
  };
  return (
    <div className='containerr py-10 min-h-screen'>
      <Helmet>
        <title>Admin-Teams</title>
      </Helmet>
      <Link to='/admin/team/create'>
        <button className="rounded-md bg-xred px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 outline-none">
          Add team +
        </button>
      </Link>
      <section className='my-5'>
        {status === 'loading' && <Loading />}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {allTeams.map(team => (
            <div key={team._id}>
              <img src={`${process.env.REACT_APP_BASE_URL}/${team.banner}`} alt={team.name} className="h-64 w-full" />
              <div className='flex justify-between'>
                <DeleteTeam deleted={() => removeTeam(team._id)} />
                <Link to={`/admin/team/${team.name}`} className='flex-grow'>
                  <button className="flex justify-around items-center w-full bg-yellow-500 py-3">
                    Edit
                    <i className="fas fa-edit"></i>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AdminTeam