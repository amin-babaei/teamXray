import { Link } from 'react-router-dom';
import {dataPlayer} from '../../data/players'
import CartPlayer from './CartPlayer';
const Players = () => {
  return (
    <section className="bg-xred py-10">
      <h3 className="text-center text-3xl text-white">Players</h3>
      <div className="containerr mt-14">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-0 md:grid-cols-4">
          {dataPlayer.map(player => (
            <CartPlayer player={player} key={player.id}/>
          ))}
        </div>
        <Link to={"/teams"} className="flex justify-center m-auto w-44">        
          <button className='btn mt-16 w-full'>see more</button>
        </Link>
      </div>
    </section>
  );
}

export default Players;
