import React, {Component} from "react";
import {getMovies, deleteMovie} from "./services/fakeMovieService.js";
import {genres, getGenres} from "./services/fakeGenreService.js";
import Pagination from "./components/pagination.jsx";
import {paginate} from "./utils/pagination.js";
import ListGroup from "./components/listGroup.jsx";
import MoviesTable from "./moviesTable.jsx";
import _ from 'lodash';

class Movies extends Component{
    state = {
        movies: [],
        genres : [],
        currentPage : 1,
        pageSize: 4,
        selectedGenre : "",
        sortColumn : {column : 'title', order: 'asc'}
    }

    componentDidMount() {
        const genres = [{name : "All genres", _id:""}, ...getGenres()]
        this.setState({movies:getMovies(), genres: genres});
        console.log(genres)
    }

    handleDelete = movie => {
        console.log(movie);
        deleteMovie(movie);
        this.setState({movies: getMovies()})

    }

    handlePageChange = page => {
        console.log("Page change clicked " + page);
        this.setState({currentPage:page})
    }

    handleFilterChange = filter =>{
        console.log(filter);
        this.setState({selectedGenre:filter});
    }

    handleSort = column => {
        const sortColumn = {...this.state.sortColumn};
        if (sortColumn.column === column){
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        } else {
            sortColumn.column = column;
            sortColumn.order = 'asc';
        }
        this.setState({sortColumn: sortColumn});
    }

    render (){
        const dbContainsMovies = this.state.movies.length>0;

        if (dbContainsMovies) {

            const filteredMovies = this.state.selectedGenre ? this.state.movies.filter(m=>m.genre._id === this.state.selectedGenre) : this.state.movies;

            const sortedMovies = _.orderBy(filteredMovies, [this.state.sortColumn.column], [this.state.sortColumn.order]);

            const paginatedMovies = paginate(sortedMovies, this.state.currentPage, this.state.pageSize);

            return (
                <div className="row">
                    <div className="col-2">
                        <ListGroup items={this.state.genres} selectedItem={this.state.selectedGenre} onFilterChange={this.handleFilterChange}/>
                    </div>
                    <div className="col">
                        <h1>Showing {filteredMovies.length} movies in the database.</h1>

                        <MoviesTable paginatedMovies={paginatedMovies} onDelete={this.handleDelete} onSort={this.handleSort} sortColumn={this.state.sortColumn}/>

                        <Pagination itemsCount= {filteredMovies.length}
                                    pageSize={this.state.pageSize}
                                    onPageChange={this.handlePageChange}
                                    currentPage={this.state.currentPage}/>
                    </div>
                </div>
            )
        } else {
            return (
                <h1>There are no movies in the database</h1>
            )
        }
    }
}

export default Movies