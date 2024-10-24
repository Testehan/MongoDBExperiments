import React, {Component} from "react";
import {getMovies, deleteMovie} from "../services/fakeMovieService.js";
import {genres, getGenres} from "../services/fakeGenreService.js";
import Pagination from "./pagination.jsx";
import {paginate} from "../utils/pagination.js";
import ListGroup from "./listGroup.jsx";

class Movies extends Component{
    state = {
        movies: [],
        genres : [],
        currentPage : 1,
        pageSize: 4,
        selectedGenre : ""
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

    render (){
        const dbContainsMovies = this.state.movies.length>0;

        if (dbContainsMovies) {

            const filteredMovies = this.state.selectedGenre ? this.state.movies.filter(m=>m.genre._id === this.state.selectedGenre) : this.state.movies;

            const paginatedMovies = paginate(filteredMovies, this.state.currentPage, this.state.pageSize);

            return (
                <div className="row">
                    <div className="col-2">
                        <ListGroup items={this.state.genres} selectedItem={this.state.selectedGenre} onFilterChange={this.handleFilterChange}/>
                    </div>
                    <div className="col">
                        <h1>Showing {filteredMovies.length} movies in the database.</h1>

                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Rate</th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            <tbody>
                            {paginatedMovies.map((movie, index) =>
                                <tr key={index + 1}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td>
                                        <button onClick={() => this.handleDelete(movie._id)}
                                                className="btn btn-danger btn-sm">Delete
                                        </button>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>

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