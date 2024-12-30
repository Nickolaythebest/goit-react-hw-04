import s from './ImageCard.module.css'

function ImageCard({src, alt}) {
    return (
        <div className={s.container}>
  <img src={src} alt={alt} />
</div>
    )
}
export default ImageCard;