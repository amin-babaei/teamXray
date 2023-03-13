import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Loading from "../../helpers/Loading";
import CartPlayer from "./../../components/players/CartPlayer";
import { fetchTeam } from "../../app/features/team/teamAction";

const SingleTeam = () => {
  const [data, setData] = useState([])
  const { loading,error } = useSelector(state => state.teams)
  const dispatch = useDispatch()
  const { title } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const { payload } = await dispatch(fetchTeam(title))
        setData(payload.team)
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [dispatch, title]);

  return (
    <section className="bg-black font-main min-h-screen">
      <Helmet>
        <title>{title.split("-").join(" ")}</title>
      </Helmet>
      <div className="containerr py-16">
        {loading && <Loading />}
        <div className="flex flex-wrap justify-center">
          {data[0]?.players?.map((player) => (
            <CartPlayer key={player._id} player={player} />
          ))}
          {(data.length === 0 || error) && <h2 className="text-5xl text-center py-10 font-main">not found</h2>}
        </div>
      </div>
    </section>
  );
};

export default SingleTeam;
