import s from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard.jsx'

function ImageGallery({gallery, onImageClick}) {
    return (
        <>
        <ul className={s.list}>
	{gallery.map(({id, urls, alt_description}) =>
    <li key={id}>
    <ImageCard src={urls.small} alt={alt_description} onClick={() => onImageClick({src: urls.small, alt: alt_description})} />
     </li> 
    )}
</ul>
</>
    )
} 
export default ImageGallery;