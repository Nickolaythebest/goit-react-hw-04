import { useState, useEffect, useMemo } from 'react'
import ImageGallery from './Components/ImageGallery/ImageGallery.jsx'
import SearchBar from './Components/SearchBar/SearchBar.jsx'
import ErrorMessage from './Components/ErrorMessage/ErrorMessage.jsx'
import Loader from './Components/Loader/Loader.jsx'
import ImageModal from './Components/ImageModal/ImageModal.jsx'
import LoadMoreBtn from './Components/LoadMoreBtn/LoadMoreBtn.jsx'
import { fetchArticlesWithTopic } from './articles-api.js';
import './App.css'

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [topic, setTopic] = useState('');
  const [totalPage, setTotalPage] = useState(0);

  
  useEffect(() => {
        const fetchArticlesData = async () => {
          try {
            
            setError(false);
            setLoading(true);
            const {results, total_pages} = await fetchArticlesWithTopic(topic, page)
            setArticles(prev => [...prev, ...results]);
            setTotalPage(total_pages)

          }
      catch (err){
        setError(true);
        console.log(err);
      }
      finally {
        setLoading(false);
      };
      }
      if (topic) fetchArticlesData();

  }, [page, topic])  
  
const openModal = (Image) => {
  setSelectedImage(Image);
  setIsModalOpen(true);
}
const closeModal = () => {
  setSelectedImage(null);
  setIsModalOpen(false);
}
const handleChange = () => {
  setPage(prev => prev+1);
}
const handleSearch = useMemo(() => {
  return (newTopic) => {
    if(!newTopic.trim()) {
      alert("Please enter search term!")
      return;
    }
    setTopic(newTopic);
    setArticles([]);
    setPage(1)
  }
}, []) 

  return (
    <div className='container'>
    <SearchBar onSearch={handleSearch} />
    {loading && <Loader  />}
    {articles.length > 0 && <ImageGallery gallery={articles} onImageClick={openModal}/>}
    {articles.length > 0 && page < totalPage && <LoadMoreBtn newPage={handleChange} />}
    {isModalOpen && <ImageModal image={selectedImage} onClose={closeModal}/>}
    {err && <ErrorMessage />}
    </div>
  );
}

export default App;
