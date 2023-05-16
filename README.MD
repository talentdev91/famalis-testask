Start the frontend by calling "npm start" from the "frontend" folder, and the backend by calling "sails lift" from the "backend" folder. 
Remember to call npm i for both folders. 
To run the backend You will need to install sails globally: "npm i -g sails".
When everything is up and running, open localhost:4200 in Your browser.

Tasks:
1. Rewrite the BookController functions (getBooks and getBook) in the backend to use the async / await keywords with try / catch error handling.
2. Implement code that will show author names in the book list instead of ids.
3. Edit the app-book-item component in the frontend, so that is shows all data for the selected book (including description).
4. Implement code for the "Add to basket" button, so the book is added to the "books" array in the BasketComponent and displayed in html as a list.
