import React, { Component } from "react";
import SearchBar from "./SearchBar";
// Components
import AuthorCard from "./AuthorCard";

class AuthorsList extends Component {
  render() {
    const authorCards = this.props.authors.map(author => (
      <AuthorCard
        key={author.first_name + author.last_name}
        author={author}
        onClick={() => this.props.selectAuthor(author.id)}
        selectAuthor={this.props.selectAuthor}
      />
    ));

    return (
      <div className="authors">
        <SearchBar filterAuthors={this.props.filterAuthors} />
        <h3>Authors</h3>
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}

export default AuthorsList;
