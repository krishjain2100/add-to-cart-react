# Add-to-Cart React

## What this is

A React demo implementing a client-side **Add to Cart** flow.  
Built as a learning project using React hooks, and simple custom hooks (`useLocalStorage`).

## Key features

- Product listing with `Add to Cart` actions
- Cart operations: add, remove, update quantity
- Cart totals (item count & subtotal)
- `localStorage` persistence so the cart survives refreshes

---

## Tech stack

- React (functional components + hooks)
- Plain CSS
- Create React App build/dev

---

## Quick start

```bash
# clone
git clone https://github.com/krishjain2100/add-to-cart-react.git
cd add-to-cart-react

# install
npm install

# development server
npm start
```
## Project Structure
```text
/src
  index.js
  App.js
  /components
    Blog.jsx
    BlogHeader.jsx
    Card.jsx
    Cards.jsx
    HomeHeader.jsx
    ShoppingTab.jsx
    Tile.jsx
  /pages
    BlogPage.jsx
    HomePage.jsx
  /styles
    blog.css
    content.css
    header.css
    page.css
    tab.css
  /hooks
    useCart.jsx

```
