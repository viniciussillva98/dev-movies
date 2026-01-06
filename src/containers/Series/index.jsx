import { useEffect, useState } from "react"
import { getPopularSeries, getSeriesPopularBackGround, getSeriesTheAir, getSeriesToday, getTopSeries } from "../../services/getData"
import Slider from "../../components/Slider"
import { Backgroudseries, Buttons, Containerseries, Info, Poster } from "./styles"
import { getImages } from "../../utils/getImages"
import Button from "../../components/Button"
import { useNavigate } from "react-router-dom"
import ModalSeries from "../../components/ModalSeries"

function Series() {

    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)
    const [seriebackground, setSeriebackground] = useState([])
    const [popularseries, setPopularseries] = useState([])
    const [topseries, setTopseries] = useState([])
    const [theairseries, setTheair] = useState([])
    const [todayseries, setTodayseries] = useState([])

    useEffect(() => {

        async function getallseries() {

            Promise.all([
                getSeriesPopularBackGround(),
                getPopularSeries(),
                getTopSeries(),
                getSeriesTheAir(),
                getSeriesToday(),
            ])
                .then(([backgrounserie, popularseries, topseries, theairseries, todayseries]) => {
                    setSeriebackground(backgrounserie)
                    setPopularseries(popularseries)
                    setTopseries(topseries)
                    setTheair(theairseries)
                    setTodayseries(todayseries)
                })

        }
        
        getallseries()
    }, [])


    return (
        <>
            <Backgroudseries image={getImages(seriebackground.backdrop_path)}>
               {showModal && <ModalSeries movieId={seriebackground.id} setShowModal={setShowModal}/>} 
                <Containerseries>
                    <Info>
                        <h1>{seriebackground.name}</h1>
                        <p>{seriebackground.overview}</p>
                        <Buttons>
                            <Button red={true} onClick={() => navigate(`/seriedata/${seriebackground.id}`)}>Assistir agora</Button>
                            <Button red={false} onClick={()=> setShowModal(true)}>Assistir trailer</Button>
                        </Buttons>
                    </Info>
                        <Poster>
                            <img src={getImages(seriebackground.poster_path)} alt={seriebackground.name} />
                        </Poster>

                </Containerseries>
            </Backgroudseries>

            {popularseries && <Slider info={popularseries} title={"Séries Populares"} />}
            {topseries && <Slider info={topseries} title={"Top Séries"} />}
            {theairseries && <Slider info={theairseries} title={"Séries no ar"} />}
            {todayseries && <Slider info={todayseries} title={"Exibindo hoje"} />}

        </>
    )
}

export default Series