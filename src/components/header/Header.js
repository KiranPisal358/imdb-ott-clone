import React from 'react';
import "./Header.css";
import {Link} from 'react-router-dom';

const Header = () =>{
    return (
        <div className='header'>
            <div className='headerLeft'>
                <Link to="/"><img className='header_icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="logo"></img></Link>
                <Link to="/movies/popular" style={{textDecoration:"none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration:"none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration:"none"}}><span>Upcoming</span></Link>
                <Link to="/movies/now_playing" style={{textDecoration:"none"}}><span>Now Playing</span></Link>

            </div>
            <div className='headerRight'>
                <Link className='user__avatar'><i className="fa fa-user" style={{color:"white"}}/></Link>
            </div>

        </div>
    )
}
export default Header;