# Boi Poka

## **Live Link: ** https://playful-sunshine-736c95.netlify.app/

**Boi Poka** is an online bookstore application built with React, allowing users to browse a wide selection of books, add books to their "Read List" or "Wishlist," and sort their lists based on specific criteria. The app provides a seamless user experience with a persistent header and footer, and navigation between pages using React Router.

## Features

### 1. Book Catalog
- **Home Page**: The home page displays all available books in a card format.
- **Book Details**: Each book card includes:
  - Book cover image
  - Title
  - tags
  - Author name
  - Rating
  - Category
  - Publishing year
  - Number of pages
- **Data Source**: Book information is fetched from an API, keeping the data dynamic and up-to-date.

### 2. Book Details Page
- Clicking on a book from the home page opens a dedicated details page.
- This page shows extended information about the selected book.
- **Actions**:
  - **Read Button**: Adds the book to the "Read List."
  - **Wishlist Button**: Adds the book to the "Wishlist."

### 3. Listed Books
- The "Listed Books" route displays books saved in the Read List and Wishlist.
- Both lists are organized in separate tabs for easy navigation.

### 4. Sorting Functionality
- Users can sort books in both the Read List and Wishlist based on:
  - Rating (Highest)
  - Publishing Year (most recent)
  - Number of Pages (Descending)

## Project Structure

- **React Router**: Enables navigation between Home, Book Details, and Listed Books routes.
- **Header & Footer**: Persistent across all routes for a consistent user experience.
