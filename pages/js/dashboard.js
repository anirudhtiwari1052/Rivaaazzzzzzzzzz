:root {
    --vue-navy: #2c3e50;
    --vue-navy-light: #3a5169;
    --vue-teal: #42b883;
    --vue-teal-light: #42b983;
    --gray: #666a73;
    --light-gray: #f8f8f8;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, sans-serif;
    background: url('C:/Users/GOOD/Desktop/RIVAAZ2/source/bg.jpg') no-repeat center center fixed;
    background-size: cover;
    color: #fff;
    margin: 0;
  }
  
  header {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background-color: #000;
    border-bottom: 2px solid #ff9900;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  header .logo {
    margin-right: 20px;
  }
  
  header .logo img {
    height: 50px;
    width: auto;
  }
  
  header nav {
    flex-grow: 1;
  }
  
  header nav ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
  }
  
  header nav ul li {
    margin-left: 20px;
  }
  
  header nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
  }
  
  header nav ul li a:hover {
    color: orange;
  }
  
  /* Hamburger menu styling */
  header .hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    border: none;
    background: none;
  }
  
  header .hamburger .bar {
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 4px 0;
  }
  
  .gallery {
    position: relative;
    background-size: cover;
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .gallery::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }
  
  h2.celebrate,
  h2.manage {
    font-family: 'Brush Script MT', cursive;
    color: #ff9900;
    z-index: 1;
    position: relative;
  }
  
  h2.celebrate {
    font-size: 2.5em;
    margin-bottom: 20px;
  }
  
  h2.manage {
    font-size: 2em;
    margin-top: 20px;
  }
  
  .search-bar {
    position: relative;
    display: flex;
    background-color: #000;
    padding: 10px;
    border-radius: 25px;
    border: 2px solid #ff9900;
    z-index: 1;
  }
  
  .search-bar select {
    background-color: #000;
    color: #ff9900;
    border: none;
    padding: 10px 20px;
    margin-right: 10px;
    font-size: 16px;
    cursor: pointer;
    appearance: none;
    flex-grow: 1;
  }
  
  .search-bar button {
    background-color: #ff9900;
    color: #000;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0 25px 25px 0;
    transition: background-color 0.3s;
  }
  
  .search-bar button:hover {
    background-color: #e68a00;
  }
  
  h1 {
    font-size: 3.6em;
    font-weight: 100;
    text-align: center;
    margin-bottom: 0;
    color: var(--vue-teal);
  }
  
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
  }
  
  .card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 20px;
    overflow: hidden;
    width: 300px;
    transition: transform 0.2s;
  }
  
  .card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .card-content {
    padding: 15px;
  }
  
  .card-content h3 {
    margin: 0;
    color: #333;
    font-size: 1.2em;
  }
  
  .card-content p {
    margin: 5px 0;
    color: #666;
  }
  
  .card-content .distance,
  .card-content .rating,
  .card-content .status {
    font-size: 0.9em;
    color: #999;
  }
  
  .card-content .rating {
    color: #4CAF50;
    font-weight: bold;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
  .reviews-container {
    padding: 40px 20px;
    background: rgba(0, 0, 0, 0.8);
  }
  
  .reviews-container h1 {
    margin-bottom: 20px;
    font-size: 2.5em;
    color: var(--vue-teal);
  }
  
  .review {
    background-color: #fff;
    color: #333;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .review .review-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .review .review-header h3 {
    margin: 0;
    font-size: 1.2em;
  }
  
  .review .review-header .rating {
    color: #4CAF50;
    font-weight: bold;
  }
  
  .review p {
    margin: 10px 0;
    color: #666;
  }
  
  .disclaimer-bar {
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    text-align: center;
    border-top: 2px solid #ff9900;
  }
  
  .disclaimer-bar p {
    margin: 5px 0;
  }
  
  @media (max-width: 768px) {
    header {
      flex-direction: column;
      align-items: flex-start;
    }
  
    header .logo {
      margin-right: 0;
      margin-bottom: 10px;
    }
  
    header nav ul {
      flex-direction: column;
      display: none;
      width: 100%;
    }
  
    header nav ul li {
      margin-left: 0;
      margin-bottom: 10px;
    }
  
    header nav ul li a {
      display: block;
      padding: 10px;
    }
  
    header .hamburger {
      display: flex;
    }
  
    header nav ul.active {
      display: flex;
    }
  
    .gallery {
      height: auto;
      padding-bottom: 70px;
    }
  
    .search-bar {
      position: static;
      transform: none;
      width: 100%;
      justify-content: center;
    }
  
    .search-bar select,
    .search-bar button {
      width: 100%;
      margin-bottom: 10px;
    }
  
    .search-bar button {
      border-radius: 25px;
    }
  
    h2.celebrate,
    h2.manage {
      font-size: 1.5em;
    }
  
    .card-container {
      flex-direction: column;
      align-items: center;
    }
  
    .disclaimer-bar {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }
  