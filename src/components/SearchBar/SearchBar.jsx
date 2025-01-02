import s from './SearchBar.module.css'
import { useState } from 'react';
import { toast } from 'react-toastify';

function SearchBar({onSearch}) {
  const [topic, setTopic] = useState("")
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if(!topic.trim("")) {
      toast.error("Please enter search term!")
      return;
    }
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