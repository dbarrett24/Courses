import { useState } from "react";
import './SearchBar.css';

function SearchBar({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleFormSubmit = (event) => {
    //prevents the form's default behavior of trying to submit the input values as a network request.
    event.preventDefault();
    onSubmit(searchTerm);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input onChange={handleChange} value={searchTerm} />
      </form>
    </div>
  );
}

export default SearchBar;;
