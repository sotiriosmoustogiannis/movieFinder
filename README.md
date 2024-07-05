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

### Catalog

- Customers can browse a catalog of products available for purchase.
- Each product displays its name and price (in euros).
- Customers can add products to their cart, specifying the desired quantity.
- The application supports adding multiple instances of the same product without summing their quantities.

### Cart

- Customers can review their selected products in the cart.
- The cart displays a list of selected items, including the product name, quantity, price for the selected quantity, and a "Remove" button to remove items from the cart.
- Customers can apply voucher codes for discounts:
  - `HAPPYBIRTHDAY`: 20% off the total price.
  - `SUMMER`: 200 cents off the total price.
  - `ILIKEAPPLES`: 60% off all apple products.
  - `ILIKEPEARS`: 40% off all pear products.
  - `GREEN`: 30% off all avocados and pears.
- The total price and a counter of selected items are displayed in the cart.
- Customers can add or remove voucher codes to apply or remove discounts.

### Checkout

- In the checkout step, customers provide payment information.
- Required fields for payment include:
  - Card number (digits and spaces only).
  - Expiration date (future dates only).
  - CVV (3 or 4 digits).
  - Card Name (letters and spaces only).
- Validation ensures that customers provide accurate and complete payment information.
- After clicking the "Pay" button, a generic success message is displayed.

## Contributing

Contributions to this project are welcome!
