import Social from "../components/common/Social";
import { dataAbout } from "./../data/dataAbout";
import { Helmet } from "react-helmet-async";
const About = () => {
  return (
    <main className="bg-black pb-16">
      <Helmet>
        <meta charSet="utf-8" />
        <title>xrayTeam-About</title>
        <meta name="description" content="about xray team" />
      </Helmet>

      <div className="containerr">
        <section className="py-16">
          <h2 className="text-center mb-10 text-3xl font-main">
            About xray team
          </h2>
          <p className="text-justify sm:px-20 leading-10 text-lg">
            XRayTeam is the first and largest Persian E-Sport team that has been
            stablished since 2021 and officially started its activities in 2022.
            The team is founded by FarhadXRay and owned by Shahin Falcon.
            XRayTeam started with Call of Duty and now has more than 5 different
            teams including Apex legends, Rainbow 6 siege, Valorant and Dota2.
            XRayTeam mission is to train and lead our players in a best manner
            to become successful and reach higher levels in the international
            E-Sports competitions. Our vision is to always succeed and expand
            the XRAY community by inviting talented gamers and content creators
            with unique and bright ideas.
          </p>
          <Social />
        </section>
        <section className="font-main">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {dataAbout.map((item) => (
              <div className="flex flex-col items-center mb-5" key={item.id}>
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-56 sm:h-72 rounded-lg"
                />
                <div className="flex flex-col bg-xred -mt-16 pt-2 rounded-md w-3/4 items-center text-center justify-between h-40">
                  <h2>{item.name}</h2>
                  <p className="my-5 text-sm">{item.position}</p>
                  <div className="flex justify-evenly w-full">
                    {item.instagram === "#" ? null : (
                      <a
                        href={item.instagram}
                        className='py-2 text-xl flex-grow bg-red-400 hover:bg-red-500 hover:text-white'
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    )}
                    {item.youtube === "#" ? null : (
                      <a
                        href={item.youtube}
                        className="flex-grow text-xl py-2 bg-red-500 hover:bg-red-600 hover:text-white"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    )}
                    {item.twitch === "#" ? null : (
                      <a
                        href={item.twitch}
                        className="flex-grow text-xl py-2 bg-purple-500 hover:bg-purple-600 hover:text-white"
                      >
                        <i className="fab fa-twitch"></i>
                      </a>
                    )}
                    {item.twitter === "#" ? null : (
                      <a
                        href={item.twitter}
                        className="flex-grow text-xl py-2 bg-blue-400 hover:bg-blue-500 hover:text-white"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
