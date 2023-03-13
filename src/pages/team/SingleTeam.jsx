import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Loading from "../../helpers/Loading";
import CartPlayer from "./../../components/players/CartPlayer";
import { fetchTeam } from "../../app/features/team/teamAction";
import { selectPlayer } from "../../app/features/team/teamSlice";

const SingleTeam = () => {
  const { status,error } = useSelector(state => state.teams.player)
  const team = useSelector(selectPlayer.selectAll)
  const dispatch = useDispatch()
  const { title } = useParams();

  useEffect(() => {
    dispatch(fetchTeam(title))
},[dispatch, title])

  return (
    <section className="bg-black font-main min-h-screen">
      <Helmet>
        <title>{title.split("-").join(" ")}</title>
      </Helmet>
      <div className="containerr py-16">
        {status === 'loading' && <Loading />}
        <div className="flex flex-wrap justify-center">
          {team[0]?.players.map((player) => (
            <CartPlayer key={player._id} player={player} />
          ))}
          {(team.length === 0 || error) && <h2 className="text-5xl text-center py-10 font-main">not found</h2>}
        </div>
      </div>
    </section>
  );
};

export default SingleTeam;
