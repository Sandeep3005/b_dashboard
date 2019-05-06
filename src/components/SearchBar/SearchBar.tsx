import React, { Component } from "react";
import styles from "./SearchBar.module.css";
import { FormGroup, InputGroup, FormControl } from "react-bootstrap";
import * as _ from "underscore";

const ENTER_KEY = "Enter";
export class SearchBar extends Component<
  {
    handleSearchValue: any;
  },
  { searchValue: any }
> {
  constructor(props: any) {
    super(props);
    this.state = { searchValue: "" };
    this.debounceSearchHandler = _.debounce(this.debounceSearchHandler, 1000);
  }

  searchValueChangeHandler = (event: any) => {
    if (event.key === ENTER_KEY) {
      const searchValue: string | number = event.target.value;
      this.debounceSearchHandler(searchValue);
      event.preventDefault();
      this.setState({ searchValue: "" });
    }
  };

  setValue = (event: any) => {
    this.setState({ searchValue: event.target.value });
  };

  debounceSearchHandler = (value: any) => {
    this.props.handleSearchValue(value);
  };

  render() {
    return (
      <div className={styles.SearchBarHeading}>
        <FormGroup>
          <InputGroup>
            <FormControl
              placeholder="Search with name or id..."
              type="input"
              value={this.state.searchValue}
              onChange={this.setValue}
              onKeyPress={this.searchValueChangeHandler}
            />
          </InputGroup>
        </FormGroup>
      </div>
    );
  }
}

export default SearchBar;
