import { getImages } from "../../utils/getImages";
import { Containercard } from "./styles";



function Card({ item }) {
    return (
       <Containercard>
        <img src={getImages(item.poster_path || item.profile_path ||"")}/>
        <h3>{item.title || item.name||""}</h3> 
       </Containercard>

    )
}

export default Card;