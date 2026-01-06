import { useEffect, useState } from "react";
import {BackGround, BackGroundMovies, Comtainer, CoverPoster,Info } from "./styles";
import { getMovieDetail, getMovieVideos, getMovieSimilar, getMovieCredits  } from "../../services/getData.js";
import { useParams }from "react-router-dom"
import { getImages } from "../../utils/getImages.js";
import SpanGenres from "../../components/Genres/index.jsx";
import Credits from "../../components/Credits/index.jsx";
import Slider from "../../components/Slider";

function Detail() {

    const { id } = useParams()

    const [getDetail, setGetDetail] = useState()
    const [getVideos, setGetVideos] = useState()
    const [getSimilar, setGetSimilar] = useState()
    const [getCredits, setGetCredits] = useState()

   useEffect(() => {
        async function getAllMovie() {
            
            Promise.all([
                getMovieDetail(id),
                getMovieVideos(id),
                getMovieSimilar(id),
                getMovieCredits(id),
            ])
                .then(([detalhes,videos,similares,creditos]) => {
                    
                    setGetDetail(detalhes)
                    setGetVideos(videos)
                    setGetSimilar(similares)
                    setGetCredits(creditos)
                  
                })
                .catch((error) => console.error(error))
        }
        getAllMovie() //chamando function
    }, [])

    return (
        <>
       {getDetail && (
        <>
        <BackGround image={getImages(getDetail.backdrop_path)} />
        <Comtainer>
        <CoverPoster>
            <img src={getImages(getDetail.poster_path)}/>
        </CoverPoster>
        <Info>
            <h2>{getDetail.title}</h2>
             <SpanGenres genres={getDetail.genres}/>
            <p>{getDetail.overview}</p>
            <div>
                <Credits credits={getCredits} />
            </div>
        </Info>
       </Comtainer>
       <BackGroundMovies>
        {getVideos &&
        getVideos.map((videos)=>(
            <div key={videos.id}>
                <h4>{videos.name}</h4>
                <iframe
             src={`https://www.youtube.com/embed/${videos.key}`}
             height="400px"
             width="100%"
             title="Trailer"></iframe>
             </div>
        ))}
       </BackGroundMovies>
         {getSimilar && <Slider info={getSimilar} title={"Filmes Similares"} />}
         </>
       )}
        </>
    )
}

export default Detail;