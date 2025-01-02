import s from './ImageCard.module.css'

function ImageCard({src, alt, onClick}) {
    return (
        <div className={s.container}>
  <img src={src} alt={alt} onClick={onClick} />
</div>
    )
}
export default ImageCard;