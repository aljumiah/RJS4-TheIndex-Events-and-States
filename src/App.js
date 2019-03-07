import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  state = {
    currentAuthor: null,
    filteredAuthors: authors
  };

  selectAuthor = author => {
    //console.log(currentAuth);
    this.setState({ currentAuthor: author });
  };

  BackToList = () => {
    this.setState({ currentAuthor: null });
  };

  filterAuthors = query => {
    let newAuthors = authors.filter(author =>
      `${author.first_name} ${author.last_name}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
    this.setState({
      filteredAuthors: newAuthors
    });
  };

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar BackToList={this.BackToList} />
          </div>
          <div className="content col-10">
            {this.state.currentAuthor ? (
              <AuthorDetail author={this.state.currentAuthor} />
            ) : (
              <AuthorsList
                filterAuthors={this.filterAuthors}
                selectAuthor={this.selectAuthor}
                authors={this.state.filteredAuthors}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
