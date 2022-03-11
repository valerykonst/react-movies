import React from 'react';
import {Movie} from './Movie';

class Movies extends React.Component {

render() {
    let movies = this.props.movies;
    return <div className="movies">
    {movies ? movies.map((m) => {
        return <Movie key={m.imdbID} {...m} />
        }) : ''}
    </div>;
}

}

export { Movies };
