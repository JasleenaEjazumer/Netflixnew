import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import Youtube from 'react-youtube';
import{imageUrl,API_KEY} from '../../Constants/Constants'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [Youtubeid ,setYoutubeId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      alert('network error')
    })
  
    
  }, [])
  const opts = {
    height: '390',
    width: '100% ',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handlemovie = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
      if(response.data.results.length!==0){
  setYoutubeId(response.data.results[0])
      }else
    {
      console.log('array empty')
    }
      
    })

    
  }
  
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>

          <img onClick={()=>
            handlemovie(obj.id)

          } className={props.isSmall ? "smallposter" : "poster"} alt="poster" src={`${imageUrl+obj.backdrop_path}`}></img>
          
        )}
        </div>
        { Youtubeid &&  <Youtube opts={opts} videoId={Youtubeid.key} />}
    </div>
  );
}

export default RowPost;
