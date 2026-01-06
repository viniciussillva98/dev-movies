
import {Route,Routes} from "react-router-dom"
import DefaultLeauts from "../layouts/DefaultLayauts";
import Home from "../containers/Home";
import Series from "../containers/Series";
import Movies from "../containers/Movies";
import Detail from "../containers/Detail";
import DetailFilmes from "../containers/DetailFilmes";
import DetailSeries from "../containers/DetailSeries";


function AppRoutes() {
    return(
        <Routes>
          <Route element={<DefaultLeauts />}>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<Series />} /> 
          <Route path="/filmes" element={<Movies />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/movies/:id" element={<DetailFilmes />} />
          <Route path="/seriedata/:id" element={<DetailSeries />} />
          </Route>
        </Routes>
    )
}

export default AppRoutes;