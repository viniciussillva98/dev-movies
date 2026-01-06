import { useEffect, useState } from "react"
import { getMoviebackgroun, getMoviePlaying, getMoviesPopular, getMoviesPorVir, getTopMovies } from "../../services/getData"
import Slider from "../../components/Slider"
import { Backgroudd, Buttons, Containermovies, Info, Poster } from "./styles"
import { getImages } from "../../utils/getImages"
import Button from "../../components/Button"
import { useNavigate } from "react-router-dom"
import Modal from "../../components/Modal"

function Movies() {

    const navigate = useNavigate()

    const [showModal, setShowModal] = useState(false)
    const [moviebackground, setMoviebackbroun] = useState([])
    const [movies, setMovies] = useState([])
    const [movieplaying, setMoviesplaying] = useState([])
    const [moviepopular, setMoviepopular] = useState([])
    const [movieporvir, setMovieporvir] = useState([])
    useEffect(() => {

        async function getallmovies() {

            Promise.all([
                getMoviebackgroun(),
                getTopMovies(),
                getMoviePlaying(),
                getMoviesPopular(),
                getMoviesPorVir()

            ])
                .then(([moviebackground, topmovies, moviesplaying, popularmovies, moviesporvir]) => {
                    setMoviebackbroun(moviebackground)
                    setMovies(topmovies)
                    setMoviesplaying(moviesplaying)
                    setMoviepopular(popularmovies)
                    setMovieporvir(moviesporvir)
                })
                .catch((error) => console.error(error))
        }
        getallmovies()
    }, [])


    return (
        <>
            <Backgroudd img={getImages(moviebackground.backdrop_path)}>
               {showModal && <Modal movieId={moviebackground.id} setShowModal={setShowModal}/>} 
                <Containermovies>
                    <Info>
                        <h1>{moviebackground.title}</h1>
                        <p>{moviebackground.overview}</p>
                        <Buttons>
                            <Button red={true}  onClick={() => navigate(`/movies/${moviebackground.id}`)}>Assistir agora</Button>
                            <Button red={false} onClick={()=> setShowModal(true)}>Assistir Trailer</Button>
                        </Buttons>
                    </Info>
                        <Poster>
                            <img src={getImages(moviebackground.poster_path)} alt={moviebackground.title} />
                        </Poster>

                </Containermovies>
            </Backgroudd>
            {moviepopular && <Slider info={moviepopular} title={"Filmes Populares"} />}
            {movies && <Slider info={movies} title={"Top Filmes"} />}
            {movieplaying && <Slider info={movieplaying} title={"Tocando agora"} />}
            {movieporvir && <Slider info={movieporvir} title={"Em breve"} />}
        </>
    )
}

export default Movies