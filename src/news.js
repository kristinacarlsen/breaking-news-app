import React from 'react'

const News = ({title, publishedAt, URL}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{publishedAt}</p>
            <button>Article</button>
            
        </div>
    );
}

export default News;


// <a href={url} target='_blank'></a>