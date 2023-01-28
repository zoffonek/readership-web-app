import { useParams } from 'react-router-dom';
import { BookDetails } from '../components/book/BookDelails';
import { useSelector } from "react-redux";

export const BookPage = () => {
    const { id } = useParams();
    const books = useSelector((state) => state.books);
    const book = books.filter(b => b._id === id)[0];

    return ( <div>
        <BookDetails book={book} />
        
    </div> );
};