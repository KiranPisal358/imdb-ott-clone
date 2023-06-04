import React, {useEffect, useState} from "react";
import Skeleton, { SkeletonTheme} from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import "./card.css"
import { Link } from "react-router-dom"

const Cards = ({movie}) =>{
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>{
        setTimeout(() =>{
            setIsLoading(false)
        }, 1500)
    }, [])

    return <>
        {
            isLoading 
            ?
            <div className="cards">
                <SkeletonTheme baseColor="#202020" highlightColor="#444"  direction="rtl">
                    <Skeleton height={300} duration={2} enableAnimation={true} />
                </SkeletonTheme>
            </div>
            :
            <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
                <div className="cards">
                    <img className="cards_img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                    <div className="cards_overlay">
                        <div className="card_title">{movie?movie.original_title:""}</div>
                        <div className="card_runtime">
                            {movie?movie.release_date:""}
                            <span className="card_rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                        </div>
                        <div className="card_description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>

                    </div>
                    <div style={{paddingTop:'0.5rem', backgroundColor:"#323230", height:100}}>
                    {movie?movie.original_title:""}
                    </div>
                </div>
            </Link>
}
    

</>
}

export default Cards;

