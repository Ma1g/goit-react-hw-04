import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css';

export default function ImageGallery({ items, onImageClick }) {
    return (
        <ul className={css.list}>
            {items.map(item => (
                <li className={css.item} key={item.id}>
                    <ImageCard image={item} onClick={() => onImageClick(item)} />
                </li>
            ))}
        </ul>
    )
}