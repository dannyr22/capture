import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { MovieState } from '../MovieState';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';


const MovieDetail = () => {

  const history = useHistory()
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState)
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => (stateMovie.url === url))
    setMovie(currentMovie[0])
    console.log(setMovies)
  }, [movies, url])
  
  
  return (
    <>
      {movie && (
      <Details variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <HeadLine>
        <h2>{movie.title}</h2>
        <img src={movie.mainImg} alt="movie"/>
      </HeadLine>
        <Awards>
          {movie.awards.map(award => (
            <Award title={award.title} description={award.description} key={award.title}/>
          ))}
        </Awards>
        <ImageDisplay>
          <img src={movie.secondaryImg} alt="second"/>
        </ImageDisplay>
      </Details>
      )}
    </>
   );
}

export default MovieDetail;

const Details = styled(motion.div)`
color: white;

`
const HeadLine = styled.div`
min-height: 90vh;
padding-top: 10vh;
position: relative;
display: block;
flex: 1;
h2{
  /* position: absolute;
  top: 5%;
  left: 40%;
  transform: tranlate(-50%, -10%); */
  width: 100%; 
  text-align: center;
}
img{
  width: 100%;
  height: 70vh;
  object-fit: cover;
  overflow: hidden;
  display: flex;
}
@media (max-width: 1300px) {
  display: block;
  padding: 2rem 2rem;
  text-align: center;
  min-height: 70vh;
  @media (max-width: 800px) {
  min-height: 40vh;
  img{
    height: 40vh;
  }
}
}
`

const Awards = styled.div`
 min-height: 50vh;
 display: flex;
 margin: 2rem 10rem;
 align-items: center;
 justify-content: space-around;
 @media (max-width: 1500px) {
 display: block;
 margin: 2rem 2rem;
 
}
`
const AwardStyle = styled.div`
padding: 5rem;
h3{
  font-size: 1.5rem;
}
.line{
  width: 100%;
  background: #23d997;
  height: 0.5rem;
  margin: 1rem 0rem;
}
p{
  padding: 2rem 0rem;
}
@media (max-width: 1300px){
  padding: 2rem;
}
`

const ImageDisplay = styled.div`
  min-height: 50vh;
  img{
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
  padding: 2rem 2rem;
  text-align: center;
  min-height: 70vh;
  @media (max-width: 800px) {
  min-height: 40vh;
  img{
    height: 40vh;
  }
  }
  }
`
const Award = ({title, description}) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  )
}