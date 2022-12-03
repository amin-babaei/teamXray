const Social = () => {
  return (
    <div className="flex justify-center items-center mt-16">
      <a href="https://www.instagram.com/xrayteam/channel/?hl=en"
        className="mx-2">
        <i className="social fab fa-instagram hover:text-red-400"></i>
      </a>
      <a
        href="https://www.youtube.com/c/XRayTeam"
        className="mx-2"
      >
        <i className="social fab fa-youtube hover:text-red-500"></i>
      </a>
      <a
        href="https://discord.gg/u9KSJYXu"
        className="mx-2"
      >
        <i className="social fab fa-discord hover:text-blue-500"></i>
      </a>
      <a
        href="https://www.twitch.tv/team/xrayteam"
        className="mx-2"
      >
        <i className="social fab fa-twitch hover:text-purple-500"></i>
      </a>
      <a
        href="https://www.twitter.com/team/xrayteamgg"
        className="mx-2"
      >
        <i className="social fab fa-twitter hover:text-blue-400"></i>
      </a>
    </div>
  );
};

export default Social;
