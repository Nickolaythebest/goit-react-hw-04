import s from './SearchBar.module.css'
import { useState } from 'react';

function SearchBar({onSearch}) {
  const [topic, setTopic] = useState("")
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSearch(topic);
  }
  
    return (
      <div>
        <header className={s.container}>
  <form onSubmit={handleSubmit}>
    <input
    onChange={(e) => setTopic(e.target.value.trim())}
      type="text"
      name="topic"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
      className={s.searchInput}
    />
    <button type="submit">Search</button>
  </form>
</header>
</div>

    )
}
export default SearchBar;