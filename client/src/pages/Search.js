import React from "react";
import Form from "../components/Form";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";

class Search extends React.Component {
    state = {
        value: '',
        books: []
    };

    componentDidMount() {
        this.searchBook();
    };

    makeBook = bookData => {
        return {
            _id: bookData.id,
            title: bookData.volumeInfo.title,
            authors: bookData.volumeInfo.authors,
            description: bookData.volumeInfo.description,
            img: bookData.volumeInfo.imageLinks.thumbnail,
            link: bookData.volumeInfo.previewLink
        };
    };

    searchBook = query => {
        API.getBook(query)
            .then(res => this.setState({ books: res.data.items.map(bookData => this.makeBook(bookData)) }))
            .catch(err => console.error(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBook(this.state.search);
    };

    renter() {
        return (
            <>
                <Form 
                    search={this.state.search} 
                    handleInputChange={this.handleInputChange} 
                    handleFormSubmit={this.handleFormSubmit} 
                />
                <div>
                    <h2>Results</h2>
                    <SearchResults books={this.state.books} />
                </div>  
            </>
        );
    };
};

export default Search;