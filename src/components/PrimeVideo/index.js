import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    console.log(moviesList)
    const actionMovies = () =>
      moviesList.filter(movie => movie.categoryId === 'ACTION')
    const comedyMovies = () =>
      moviesList.filter(movie => movie.categoryId === 'COMEDY')

    return (
      <div className="prime-video-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="image-prime-video"
        />
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMovies} />

        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovies} />
      </div>
    )
  }
}
export default PrimeVideo
