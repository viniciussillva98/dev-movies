

import { Backgroud, Buttons, Container, Info, Poster } from "./styles";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";
import Modal from "../../components/Modal/index";
import { useNavigate } from "react-router-dom";
import { getMovies, getPeopleTop, getPopularSeries, getTopMovies, getTopSeries } from "../../services/getData";

function Home() {

    const navigate = useNavigate()

    const [showModal, setShowModal] = useState(false)
    const [movies, setMovies] = useState([])
    const [topmovies, setTopmovies] = useState([])
    const [topseries, setTopseries] = useState([])
    const [popularseries, setPopularseries] = useState([])
    const [topPeople, setTopPeople] = useState([])

    useEffect(() => {


        async function getAll() {

            Promise.all([
                getMovies(),
                getTopMovies(),
                getTopSeries(),
                getPopularSeries(),
                getPeopleTop()

            ])
                .then(([movies, topmovies, topseries, popularseries, toppeople]) => {

                    setMovies(movies)
                    setTopmovies(topmovies)
                    setTopseries(topseries)
                    setPopularseries(popularseries)
                    setTopPeople(toppeople)
                })
                .catch((error) => console.error(error))
        }
        getAll() //chamando function
    }, [])


    return (
        <>
            {movies && (
                <Backgroud img={getImages(movies.backdrop_path)}>
                    {showModal && <Modal movieId={movies.id} setShowModal={setShowModal} />}
                    <Container>
                        <Info>
                            <h1>{movies.title}</h1>
                            <p>{movies.overview}</p>
                            <Buttons>
                                <Button red={true} onClick={() => navigate(`/detail/${movies.id}`)}>Assistir agora</Button>
                                <Button red={false} onClick={() => setShowModal(true)}>Assistir trailer</Button>
                            </Buttons>
                        </Info>
                        <Poster>
                            <img src={getImages(movies.poster_path)} alt={movies.title} />
                        </Poster>
                    </Container>
                </Backgroud>
            )}
            {topmovies && <Slider info={topmovies} title={"Top Filmes"} />}
            {topseries && <Slider info={topseries} title={"Top Séries"} />}
            {popularseries && <Slider info={popularseries} title={"Séries Populares"} />}
            {topPeople && <Slider info={topPeople} title={"Artistas Populares"} />}
        </>
    )
}

export default Home