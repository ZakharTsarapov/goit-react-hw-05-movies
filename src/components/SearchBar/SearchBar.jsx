import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './SearchBar.module.css'


function SearchBar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const formReset = () => {
    setSearchQuery('');
  };

  const onInputChange = e => {
    const normalizeInputValue = e.currentTarget.value.toLowerCase();
    setSearchQuery(normalizeInputValue);
  };

  const onSearch = e => {
    e.preventDefault();
    onSubmit(searchQuery.trim());
    formReset();
  };

  return (
    <form className={css.form} onSubmit={onSearch}>
      <input className={css.input}
        type="text"
        name="search"
        autoFocus
        placeholder="Search movies"
        value={searchQuery}
        onChange={onInputChange}
      />
      <button className={css.btn} type="submit" >
        <span>Search</span>
      </button>
    </form>
  );
}
export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
