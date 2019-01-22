import axios from "axios";


export default {
  // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  getDash: function() {
    return axios.get("/api/dashboard");
  },

  getDashID: function(id) {
    return axios.get("/api/dashboard/" + id);
  },
  // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },

  //Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },

  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  // Load car reviews
  loadReviews: function(query) {
    return axios.get(query)
  }
};
