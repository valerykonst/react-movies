import React from 'react';

class Movie extends React.Component {

render() {
    const {Poster:poster,Title:title,Type:type,Year:year,imdbID:id} = this.props;
    return <div className="card">
    <div className="card-image">
    {poster.match('^http') ? <img src={poster} /> : ''}
    </div>
    <div className="card-content">
        <span className="card-title">{title}</span>
        <p>{year} <span>{type}</span></p>
    </div>
  </div>
}

}

export { Movie };
