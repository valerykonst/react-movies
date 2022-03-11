import React from 'react';
import {Header} from './Header'
import {Search} from './Search'
import {Movies} from './Movies'
import {Footer} from './Footer'
import { Preloader } from './Preloader';


const apiKey = process.env.REACT_APP_API_KEY;

export default class App extends React.Component {
  
  state = {
    movies: false,
    count: 0,
    error: ''
}

  loadSearch = (str,type) => {

    this.setState({movies: false, count: 0, error: ''})

    let url = "https://www.omdbapi.com/?s=" + str + "&type=" + type + "&apikey=" + apiKey
    fetch(url).then( res => res.json() ).then((result) => {
      if(result.Response === "True")
            this.setState({movies: result.Search, count: result.totalResults, error: ''})
      else
          this.setState({movies: false, count: 0, error: result.Error})
    }).catch((error) => {
      alert(error)
    })
  }

  componentDidMount() {
    this.loadSearch("matrix","")
  }

  
  render() {
    const {movies,count,error} = this.state
    return <>
      <Header />
      <main className="container content">
        <Search loadSearch={this.loadSearch} />
        {count ? <Movies movies={movies} /> : (error ? <span>Not found</span> : <Preloader />)}
      </main>
      <Footer />
      </>;
  }
}
