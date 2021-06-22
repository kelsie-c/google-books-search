import React from "react";

function Form(props) {
    return (
        <>
            <form search={this.state.search} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit}>
                <div>
                    <label htmlFor="search">Book Search: </label>
                    <input
                        onChange={props.handleinputChange}
                        value={props.search}
                        name="search"
                        type="text"
                        placeholder="Search for a book"
                        id="search"
                    />
                    <button onClick={props.handleFormSubmit}>Search</button>
                </div>
            </form>
        </>
    );
};

export default Form;