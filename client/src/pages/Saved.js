import React, { Component } from "react";
import API from "../utils/API";
import SearchResults from "../components/SearchResults";

class Saved extends Component {
    state = {
        savedBooks: [],
    };

    componentDidMount() {
        API.savedBooks()
            .then(savedBooks => this.state({ savedBooks: savedBooks }))
            .catch(err => console.error(err));
    };

    render() {
        return (
            <>
                <h2>Saved Books</h2>
                <SearchResults books={this.state.savedBooks} />
            </>
        );
    };
};

export default Saved;