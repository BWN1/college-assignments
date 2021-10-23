# REST API

Below are the supported endpoints for the REST API

## Customer

#### GET api/customer/:id

Retrieve a customer by their `customerId`

#### POST api/customer/

Add a customer to the database

## Product

#### GET api/products/

Retrieve all products

#### POST api/products/

Add a product to the database

#### GET api/products/:id

Retrieve a product by their `productId`

#### PUT api/products/:id

Update a product by their `productId`

#### DELETE api/products/:id

Delete a product by their `productId`

#### GET api/categories/

Retrieve all product categories

#### GET api/categories/:category

Retrieve products in a `category`

#### GET api/best-sellers/

Retrieve all products that are `best-sellers`
