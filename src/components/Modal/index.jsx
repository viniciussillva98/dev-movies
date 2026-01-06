
import { useEffect, useState } from "react";
import { BackGround, Container } from "./styles";
import { getVideo } from "../../services/getData";

function Modal({ movieId, setShowModal }) {
  const [trailer, setTrailer] = useState([]);

  useEffect(() => {
    
async function getVideos(){

  setTrailer (await getVideo(movieId))
}


    getVideos()
  }, [])
 

  return (
    <BackGround onClick={()=>setShowModal(false)}>
      {trailer && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${trailer.key}`}
            height="400px"
            width="100%"
            title="Trailer"
          ></iframe>
        </Container>
      )} 
    </BackGround>
  )
}

export default Modal;
