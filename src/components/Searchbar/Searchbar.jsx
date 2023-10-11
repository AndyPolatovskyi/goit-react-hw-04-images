import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleInputChange = event => {
    this.setState({ value: event.currentTarget.value.toLowerCase() });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.value.trim() === '') {
      toast.error('Enter your request.');
      return;
    }
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.handleFormSubmit} className={css.searchForm}>
          <button type="submit" className={css.searchFormButton}>
            <ImSearch className={css.searchFormButtonLabel}></ImSearch>
          </button>

          <input
            onChange={this.handleInputChange}
            className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};