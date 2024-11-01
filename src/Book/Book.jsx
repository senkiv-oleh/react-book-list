import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import React from 'react';
import 'bulma';
import './Book.scss';

export const Book = ({book, onBookDeleted}) => {

  console.log("book = ", book)
  return (
    <tr className="Book" key={book.id}>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.category}</td>
      <td>{book.isbn}</td>
      <td>
        <Link
          className="Book__button button button--edit" to={`/book/${book.id}`}
        >
          EDIT
        </Link>
        <button
          type="button"
          className="Book__button button button--delete"
          onClick={() => {
            onBookDeleted(book.id);
          }}
        >
          DELETE
        </button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape().isRequired,
};
