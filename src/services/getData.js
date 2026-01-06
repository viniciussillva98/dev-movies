
import api from "./api";



export async function getVideo(movieId) {

        const { data: { results } } = await api.get(`/movie/${movieId}/videos`)
        return results[1]

}


export async function getMovies() {
        const { data: { results } } = await api.get("/movie/popular")
        return results[3]
}

export async function getTopMovies() {
        const { data: { results } } = await api.get("/movie/top_rated")
        return results
}

export async function getTopSeries() {
        const { data: { results } } = await api.get("/tv/top_rated")
        return results
}

export async function getPopularSeries() {
        const { data: { results } } = await api.get("/tv/popular")
        return results
}

export async function getPeopleTop() {
        const { data: { results } } = await api.get("/person/popular")
        return results
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//chamadas a API para a pagina de detalhes HOME


export async function getMovieDetail(movieId) {

        const { data } = await api.get(`/movie/${movieId}`)
        return data

}

export async function getMovieVideos(movieId) {

        const { data: { results } } = await api.get(`/movie/${movieId}/videos`)
        return results

}

export async function getMovieSimilar(movieId) {

        const { data: { results } } = await api.get(`/movie/${movieId}/similar`)
        return results

}

export async function getMovieCredits(movieId) {

        const { data: { cast } } = await api.get(`/movie/${movieId}/credits`)
        return cast

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//chamadas API tela movies


export async function getMoviebackgroun() {
        const { data: { results } } = await api.get("/movie/now_playing")
        return results[3]
}

export async function getMoviePlaying() {
        const { data: { results } } = await api.get("/movie/now_playing")
        return results
}

export async function getMoviesPopular() {
        const { data: { results } } = await api.get("/movie/popular")
        return results
}

export async function getMoviesPorVir() {
        const { data: { results } } = await api.get("/movie/upcoming")
        return results
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//chamadas API tela SERIES

export async function getSeriesPopularBackGround() {
        const { data: { results } } = await api.get("/tv/popular")
        return results[0]
}


export async function getSeriesToday() {
        const { data: { results } } = await api.get("/tv/airing_today")
        return results
}

export async function getSeriesTheAir() {
        const { data: { results } } = await api.get("/tv/on_the_air")
        return results
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//tela de detalhes series

export async function getseriesDetail(movieId) {

        const { data } = await api.get(`/tv/${movieId}`)
        return data

}
export async function getseriesTrailer(movieId) {

        const { data: { results } } = await api.get(`/tv/${movieId}/videos`)
        return results[0]

}

export async function getseriesVideos(movieId) {

        const { data: { results } } = await api.get(`/tv/${movieId}/videos`)
        return results

}

export async function getseriesSimilar(movieId) {

        const { data: { results } } = await api.get(`/tv/${movieId}/similar`)
        return results

}

export async function getseriesCredits(movieId) {

        const { data: { cast } } = await api.get(`/tv/${movieId}/credits`)
        return cast

}
