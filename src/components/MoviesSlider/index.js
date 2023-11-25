import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movieDetails} = props

  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 4,
  }
  return (
    <>
      <Slider {...settings}>
        {movieDetails.map(each => (
          <MovieItem key={each.id} movie={each} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider
