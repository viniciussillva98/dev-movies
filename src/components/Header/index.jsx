import { ContainerHeader, Li, Ulmenu } from "./styles";
import { Link,useLocation} from "react-router-dom";

import { useState } from "react";


function Header(){
    const { pathname } = useLocation();
    const [mudarbackground, setMudarbackground] = useState(false);

    window.onscroll = () => {
        if( !mudarbackground & window.pageYOffset > 50){
            setMudarbackground(true);
        } if (mudarbackground && window.pageYOffset <= 50) {
            setMudarbackground(false);
        }
    }

    return(
        <ContainerHeader $functionmudarbackground={mudarbackground}>
            
         <Ulmenu>
            <Li $isActive={pathname==="/" || pathname.includes("/detail")}>
                <Link to="/">Home</Link>
            </Li>

              <Li $isActive={pathname.includes("/filmes") || pathname.includes("/movies") }>
                <Link to="/filmes">Movies</Link>
            </Li>

              <Li $isActive={pathname.includes("/series") || pathname.includes("/seriedata")}>
                <Link to="/series">Séries</Link>
            </Li>
         </Ulmenu>
        </ContainerHeader>
    )
}

export default Header;