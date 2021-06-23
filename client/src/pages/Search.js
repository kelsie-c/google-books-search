import React, { Component } from "react";
import SearchResults from "../components/SearchResults";
import Form from "../components/Form";
import API from "../utils/API";

class Search extends Component {
  state = {
    value: "",
    books: [],
  };

  componentDidMount() {
    this.searchBook();
  }

  makeBook = (bookData) => {
    return {
      _id: bookData.id,
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
      image: bookData.volumeInfo.imageLinks.thumbnail,
      link: bookData.volumeInfo.previewLink,
    };
  };

  searchBook = (query) => {
    API.getBook(query)
      .then((res) =>
        this.setState({
          books: res.data.items.map((bookData) => this.makeBook(bookData)),
        })
      )
      .catch((err) => console.error(err));
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchBook(this.state.search);
  };

  render() {
    return (
      <div>
        <div className="container text-center">
          
          <Form
            search={this.state.search}
            handleinputchange={this.handleInputChange}
            handleformsubmit={this.handleFormSubmit}
          />
          <SearchResults books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default Search;