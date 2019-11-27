import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

const App = () => {


const APP_KEY = process.env.REACT_APP_API_KEY;

// sends request to site and logs the returned promise
const getNews = async () => {
      axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${APP_KEY}`).then(response => {
        console.log(response.articles);
    })

    .catch(error => {
        console.log(error);
    });
  }

 useEffect(() => {
    getNews();
  }, []);

// body html of breaking-news site
  return (
   <div className='header'>

   <div className='intro'>
    <h1 className="title">Breaking News</h1>
    <h4 className="subtitle">United States Headlines</h4>
  </div>

    <form className="search-form">
      <input type="text"/>
      <button type='submit'>Search</button>
    </form>

    <div className="news-articles">
        news articles
    </div>

  </div>
  );
}

export default App;

