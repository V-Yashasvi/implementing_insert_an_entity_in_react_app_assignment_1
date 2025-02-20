// import React from 'react'
import './AddBook.css'

const AddBook = () => {
    return (
      <div>
        <form action="" className="form">
          <h3>Add A Book</h3>
          <label htmlFor="title" className="label">
            Title:
          </label>
          <input type="text" id="title" />
          <label htmlFor="author" className="label">
            Author:
          </label>
          <input type="text" id="author" />
          <label htmlFor="description" className="label">
            Description:
          </label>
          <textarea minLength={10} maxLength={50} />
          <label htmlFor="image">Image Url:</label>
          <input type="url" />
          <button type="submit" className="submti">
            Submit
          </button>
        </form>
      </div>
    );
}

export default AddBook
