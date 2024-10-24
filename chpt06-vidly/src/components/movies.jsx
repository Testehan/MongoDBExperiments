import React, {Component} from "react";
import {getMovies, deleteMovie} from "../services/fakeMovieService.js";
import Pagination from "./pagination.jsx";
import {paginate} from "../utils/pagination.js";

class Movies extends Component{
    state = {
        movies: getMovies(),
        currentPage : 1,
        pageSize: 4
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

    render (){
        const dbContainsMovies = this.state.movies.length>0;

        if (dbContainsMovies) {
            const paginatedMovies = paginate(this.state.movies, this.state.currentPage, this.state.pageSize);

            return (
                <>
                    <h1>Showing {this.state.movies.length} movies in the database.</h1>



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

                    <Pagination itemsCount= {this.state.movies.length}
                                pageSize={this.state.pageSize}
                                onPageChange={this.handlePageChange}
                                currentPage={this.state.currentPage}/>
                </>
            )
        } else {
            return (
                <h1>There are no movies in the database</h1>
            )
        }
    }
}

export default Movies