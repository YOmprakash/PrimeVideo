// Write your code here

import './index.css'

import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )

  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === 'COMEDY',
  )

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-image"
      />
      <div className="card-container">
        <h1 className="movie-type-heading">Action Movies</h1>
        <MoviesSlider movieDetails={actionMoviesList} />
        <h1 className="movie-type-heading">Action Movies</h1>
        <MoviesSlider movieDetails={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
