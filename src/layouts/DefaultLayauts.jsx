import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function DefaultLeauts(){
    return(
        <>
        {<Header/>}
        <Outlet/>
       </>
    )
}

export default DefaultLeauts;