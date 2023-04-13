window.reviewData = [
    {
        name: "Rahim",
        date: "2018-04-31",
        rating: 3,
        review: "Great game! I love playing it with my friends."
    },
    {
        name: "Kamran Ali",
        date: "2020-03-24",
        rating: 2,
        review: "This is the best version of rock-paper-scissors I've ever played!"
    },
    {
        name: "Kanjar Sharma",
        date: "2013-03-3",
        rating: 4,
        review: "Fun game, but could use some improvements in the graphics department."
    },
    {
        name: "Chikna Gupta",
        date: "2013-03-3",
        
        rating: 5,
        review: "Simple and addictive. I can't stop playing!"
    },
    {
        name: "Item Singh",
        date: "2013-03-3",
        rating: 1,
        review: "Disappointing game. I was expecting more."
    },
    {
        name: "Gurprit Singh",
        date: "2013-03-3",
        rating: 3,
        review: "Great game! I love playing it with family and my friends."
    }
];


document.addEventListener('DOMContentLoaded', function() {
    createTable(reviewData);

    const form = document.querySelector('.review-form-input-area');
    form.addEventListener('submit', function(event) {
      // Prevent the default behavior of the form (i.e. reloading the page) when the form is submitted
      event.preventDefault();
  
      // Get the values entered by the user
      const name = document.querySelector('#name').value;
      const date = document.querySelector('#date').value;
      const rating = document.querySelector('input[name="rating"]:checked').value;
      const review = document.querySelector('#review').value;
  
      // Create a new object with the input data
      const newReview = { name, date, rating, review };
  
      // Add the new object to the reviewData array
      reviewData.push(newReview);
  
      // Clear the form
      form.reset();
  
      // Re-create the table with the updated data
      createTable(reviewData);
    });

  });

function createTable(reviews) {
    // Fetching the tbody element
    let table = document.querySelector("#reviews-table");
    let newRow, newCell, newText;
  
    // Iterating through the reviews and creating table
    reviews.forEach(function (review) {
      // creates a table row
      newRow = table.insertRow();
      newRow.className = "card";
  
      newCell = newRow.insertCell();
      newCell.className = "reviews-name";
      newCell.textContent = "Name: ";
      newText = document.createTextNode(review.name);
      newCell.appendChild(newText);
  
      newCell = newRow.insertCell();
      newCell.className = "reviews-date";
      newCell.textContent = "Date: ";
      newText = document.createTextNode(review.date);
      newCell.appendChild(newText);
  
      newCell = newRow.insertCell();
      newCell.className = "reviews-rating";
      newCell.textContent = "Rating: ";
      newText = document.createTextNode(getRatingStars(review.rating));
      newCell.appendChild(newText);
  
      newCell = newRow.insertCell();
      newCell.className = "reviews-review";
      newText = document.createTextNode(review.review);
      newCell.appendChild(newText);
    });
  }
  
  function getRatingStars(rating) {
    let starsHtml = '';
    for (let i = 0; i < rating; i++) {
      starsHtml += '★ ';
    }
    for (let i = rating; i < 5; i++) {
      starsHtml += '☆ ';
    }
    return starsHtml.trim();
  }