# Movie Finder App - Find movies, manage your collections, rate movies

## Project Description

This online application allows users to search for movies, read detailed information, write reviews, and create personalized movie collections.

## Table of Contents

- [Installation](#installation)
- [Technologies](#technologies)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/)
- [Angular CLI](https://angular.dev/cli/)

### Getting Started

1. Clone the repository using HTTPS:

   ```bash
   git clone https://github.com/sotiriosmoustogiannis/movieFinder.git

- or Clone the repository using SSH Key:

   ```bash
   git clone https://github.com/sotiriosmoustogiannis/movieFinder.git

2. Navigate to the Project Directory

   ```bash
   cd moviefinder

3. Install Dependencies

   ```bash
   npm install

4. Start the Development Server

   ```bash
   ng serve

5. Open a web browser and visit the URL shown in your terminal 
   (usually http://localhost:4200/).

## Technologies

- Frontend: [Angular](https://angular.dev/), [Angular CLI](https://angular.dev/cli), [Angular Material](https://material.angular.io/)
- External API: [Movie API](https://developers.themoviedb.org/3/getting-started/introduction)

## Usage

- **Product Catalog**: On the home page, you can browse the product catalog, view product details, add products to your cart, and navigate to the cart page.

- **Cart**: In the cart, you can review your selected products. You have the option to apply voucher codes for discounts on your order. Once you've reviewed your cart, you can proceed to checkout or return to the catalog.

- **Checkout**: In the checkout, you can provide payment information to complete your order securely. Please ensure you enter accurate and valid payment details.


## Features

### Home - Search Movies

- Users can search for movies.
- Each movie displays its title and rating and an image.
- Users can view all the movie details by clicking on it.
- Users can go to movie collections Page

### Collections

- Users can see a list of the movie collections they have created.
- Users can create a new Collection to add Movies.
- Users can open his collection and check the movies they have added.
- Users can delete a movie from a collection.

## Data

- Optional data to set key "collections" on LocalStorage
```json
[
   {
      "title":"Favorite Collection",
      "description":"My favorite movies",
      "movies":[
         {
            "id":"755450",
            "title":"Godfather",
            "poster_path":"/ipV6QtfFnrj80Ar2eH24gjSZHir.jpg"
         },
         {
            "id":"238",
            "title":"The Godfather",
            "poster_path":"/tmU7GeKVybMWFButWEGl2M4GeiP.jpg"
         },
         {
            "id":"242",
            "title":"The Godfather Part III",
            "poster_path":"/zNnjHLDtV8Ti3aworltaeaLMov4.jpg"
         }
      ]
   },
   {
      "title":"Comedy Collection",
      "description":"My comedy collections",
      "movies":[
         {
            "id":"1053592",
            "title":"Todos los nombres de Dios",
            "poster_path":"/n15gfcgwV0LVPSobrayZcFHcwN6.jpg"
         },
         {
            "id":"494892",
            "title":"God",
            "poster_path":"/4np8KzfT7XHgwQT5sJTRogqIn0s.jpg"
         },
         {
            "id":"536115",
            "title":"Godzilla: The Planet Eater",
            "poster_path":"/q3j4OQFFDKM6fdQt9gE56kfDBNG.jpg"
         }
      ]
   }
]
```

## Contributing

Contributions to this project are welcome!
