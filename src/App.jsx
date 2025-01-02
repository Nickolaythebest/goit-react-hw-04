import { useState, useEffect, useCallback } from 'react'
import ImageGallery from './components/ImageGallery/ImageGallery.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx'
import Loader from './components/Loader/Loader.jsx'
import ImageModal from './components/ImageModal/ImageModal.jsx'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx'
import { fetchArticlesWithTopic } from './articles-api.js';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

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
const handleSearch = useCallback((newTopic) => {
    setTopic(newTopic);
    setArticles([]);
    setPage(1)
  
}, []) 

  return (
    <div className='container'>
    <SearchBar onSearch={handleSearch} />
    {loading && <Loader  />}
    {articles.length > 0 && <ImageGallery gallery={articles} onImageClick={openModal}/>}
    {articles.length > 0 && page < totalPage && <LoadMoreBtn newPage={handleChange} />}
    {isModalOpen && <ImageModal image={selectedImage} onClose={closeModal}/>}
    {err && <ErrorMessage />}
    <ToastContainer />
    </div>
  );
}

export default App;
