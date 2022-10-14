import { useEffect, useState } from "react";
import { loadingSpinner } from "../../app/loadingSlice";
import { useSelector,useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { getTeam } from "../../services/team";

import Loading from "../../helpers/Loading";
import CartPlayer from "./../../components/players/CartPlayer";

const SingleTeam = () => {
  const {loading} = useSelector((state) => state.loading)
  const dispatch = useDispatch()
  const [data, setData] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    const fetch = async () => {
      dispatch(loadingSpinner(true));
      try {
        const { data } = await getTeam(title);
        setData(data.team[0].players);
        dispatch(loadingSpinner(false));
      } catch (error) {
        console.log(error);
        dispatch(loadingSpinner(false));
      }
    };
    fetch();
  }, []);
  return (
    <section className="bg-black font-main min-h-screen">
      <Helmet>
        <title>{title.split("-").join(" ")}</title>
      </Helmet>
      <div className="containerr py-16">
        {loading === true && <Loading />}
        <div className="flex flex-wrap justify-center">
          {data.map((player) => (
            <CartPlayer key={player._id} player={player} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SingleTeam;
