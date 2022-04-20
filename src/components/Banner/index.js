import styles from "./styles.module.scss";
import fullBanner from "../../assets/home-banner.jpg";
import { useEffect, useState } from "react";
import api from "../../services/api";
import requests from "../../Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await api.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }

    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <div>
      <header
        className={styles.banner}
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className={styles.banner__contents}>
          <h1 className={styles.banner_title}>
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className={styles.banner_buttons}>
            <button className={styles.bannerButton}>Play</button>
            <button className={styles.bannerButton}>My list</button>
          </div>

          <h1 className={styles.banner__description}>
            {truncate(movie?.overview, 150)}
          </h1>
        </div>

        <div className={styles.banner__fadeBottom}></div>
      </header>
    </div>
  );
}

export default Banner;
