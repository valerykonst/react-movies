import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        type: ''
    }

    searchChangeHandler = (e) => {
        this.setState({search: e.target.value})
    } 

    submitHandler = (e) => {
        e.preventDefault()
        if(this.state.search) {
            this.props.loadSearch(this.state.search,this.state.type)
        }
    }

    typeChangeHandler = (e) => {
        //console.log(e.target.value)
        this.setState({type: e.target.value})
        if(this.state.search) {
            this.props.loadSearch(this.state.search,this.state.type)
        }
    }

    render() {
        const {search,type} = this.state    
        return <form onSubmit={this.submitHandler}>
        <div className="search">
          <div className="search-wrapper">
            <input onChange={this.searchChangeHandler} id="search" placeholder="Search" value={search} />
            <button className="btn search-btn" onClick={this.submitHandler}>Search</button>
          </div>
          <div className="radio-wrapper">
            <label><input onChange={this.typeChangeHandler} id="all" type="radio" name="type" value="" checked={type === ''? 'checked' : ''} /><span>All</span></label> 
            <label><input onChange={this.typeChangeHandler} id="movie" type="radio" name="type" value="movie" checked={type === 'movie'? 'checked' : ''} /><span>Movie</span></label> 
            <label><input onChange={this.typeChangeHandler} id="series" type="radio" name="type" value="series" checked={type === 'series'? 'checked' : ''} /><span>Series</span></label> 
          </div>
        </div>
        </form>;
    }
}

export {Search}