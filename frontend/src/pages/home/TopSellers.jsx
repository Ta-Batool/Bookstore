import React, { useEffect, useState } from 'react';

const categories = ["Choose a genre", "business", "fiction"];

const TopSellers = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/books.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setBooks(data))
      .catch((err) => setError(err.message));
  }, []);

  const filteredBooks =
    selectedCategory === "Choose a genre"
      ? books
      : books.filter(
          (book) => book.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Error Handling */}
      {error && <p className="text-red-500">Error: {error}</p>}

      {/* Books Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 shadow-md bg-white"
            >
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-gray-500 capitalize">Category: {book.category}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No books available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default TopSellers;
