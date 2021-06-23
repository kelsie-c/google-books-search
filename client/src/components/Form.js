import React from "react";

function Form(props) {
    return (
        <>
            <form search={props.search} handleinputchange={props.handleInputChange} handleformsubmit={props.handleFormSubmit}>
                <div className="input-group mb-3">
                    <input
                        onChange={props.handleinputchange}
                        value={props.search}
                        name="search"
                        type="text"
                        placeholder="Search for a book"
                        id="search"
                        className="form-control"
                    />
                    <button className="btn btn-outline-success" type="button" id="button-addon2" onClick={props.handleformsubmit}>Search</button>
                </div>
            </form>
        </>
    );
};

export default Form;