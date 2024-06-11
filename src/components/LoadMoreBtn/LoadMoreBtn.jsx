import css from './LoadMoreBtn.module.css'

export default function LoadMoreBtn({ onClick }) {
    return (
        <button className={css.loadbtn} onClick={onClick}>
            Load more
        </button>
    )
}