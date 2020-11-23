import React from "react";
import "./Nav.css";
import requests from "./requests";
function Nav({setSelectedOption}) {
  return (
    <div className="nav">
      <h2>{() => setSelectedOption(requests.fetchTrending)}
        Trending
      </h2>
      <h2>{() => setSelectedOption(requests.fetchTopRated)}
        Top Rated
      </h2>
      <h2>{() => setSelectedOption(requests.fetchAction)}
        Action
      </h2>
      <h2>{() => setSelectedOption(requests.fetchComedy)}
        Comedy
      </h2>
      <h2>{() => setSelectedOption(requests.fetchHorror)}
        Horror
      </h2>
      <h2>{() => setSelectedOption(requests.fetchRomance)}
        Romance
      </h2>
      <h2>{() => setSelectedOption(requests.fetchMystery)}
        Mystery
      </h2>
      <h2>{() => setSelectedOption(requests.fetchSciFi)}
        Sci-Fi
      </h2>
      <h2>{() => setSelectedOption(requests.fetchWestern)}
        Western
      </h2>
      <h2>{() => setSelectedOption(requests.fetchAnimation)}
        Animation
      </h2>
      <h2>{() => setSelectedOption(requests.fetchMovie)}
        Movie
      </h2>
    </div>
  )
}

export default Nav
