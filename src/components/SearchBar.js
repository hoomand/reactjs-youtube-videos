import React from "react";
import { Form, Input } from "semantic-ui-react";

class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = event => {
    event.preventDefault();

    // Make sure we call callback from parent component
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Search</label>
            <Input
              placeholder="video search string"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default SearchBar;
