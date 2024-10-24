import React, {Component} from "react";

class MoviesTable extends Component{

    renderSortIcon = column => {
        if (column !== this.props.sortColumn.column ){
            return null;
        } else {
            if (this.props.sortColumn.order==='asc') return <i className="fa fa-sort-asc"></i>
        }
        return <i className="fa fa-sort-desc"></i>
    }

    render() {
        return (
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th onClick={() => this.props.onSort("title")}>Title {this.renderSortIcon("title")}</th>
                    <th onClick={() => this.props.onSort("genre.name")}>Genre {this.renderSortIcon("genre.name")}</th>
                    <th onClick={() => this.props.onSort("numberInStock")}>Stock {this.renderSortIcon("numberInStock")}</th>
                    <th onClick={() => this.props.onSort("dailyRentalRate")}>Rate {this.renderSortIcon("dailyRentalRate")}</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {this.props.paginatedMovies.map((movie, index) =>
                    <tr key={index + 1}>
                        <th scope="row">{index + 1}</th>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td>
                            <button onClick={() => this.props.onDelete(movie._id)}
                                    className="btn btn-danger btn-sm">Delete
                            </button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }
}

export default MoviesTable;