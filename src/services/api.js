
import axios from "axios";

 const api=axios.create({
//https://api.themoviedb.org /3/movie/popular
    baseURL: "https://api.themoviedb.org/3",
    params:{
        api_key: "ae5407b461fee1ac23a127925eecd407",
        language:"pt-br",
        page: 1

    }
 })

export default api;