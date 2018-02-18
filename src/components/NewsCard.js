import React from 'react';
import '../css/newscard.css';

const NewsCard = (props) => {
    return(
        <div id='cardelement'>
            <div id='image'>
                <img id='artimage' src={props.article.urlToImage} alt='article'/>
            </div>
            <div id='details'>
                <h2>{props.article.title}</h2>
                <p>{props.article.description}</p>
            </div>
        </div>
    )
}

export default NewsCard;