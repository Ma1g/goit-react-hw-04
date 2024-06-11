import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsSearch } from 'react-icons/bs';
import css from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
    const [query, setQuery] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (query.trim() === '') {
        toast.error('Please enter a search term', {
            style: {
            duration: 2000,
            backgroundColor: 'whitesmoke',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            },
        });
        return;
        }
        onSubmit(query);
        setQuery('');
    };
    return (
        <header className={css.header}>
        <form className={css.form} onSubmit={handleSubmit}>
            <button className={css.btn} type="submit">
            <BsSearch />
            </button>
            <input
            className={css.input}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
            autoComplete="off"
            placeholder="Search images and photos"
            />
        </form>
        </header>
    );
    }