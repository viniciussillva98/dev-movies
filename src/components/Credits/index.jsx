
import { getImages } from "../../utils/getImages";
import {Container, Title} from "./styles";


function Credits({ credits}) {
   
    return (
        <>
        <Title>Créditos</Title>
        {credits && (
        <Container>
            {credits.slice(0,6).map((artistas)=>(
                <div key={artistas.id}>
                <img src={getImages(artistas.profile_path)}/>
                <p>{artistas.name}</p>
                </div>
            ))}
          
        </Container>
        )}
        </>
    )
}

export default Credits;