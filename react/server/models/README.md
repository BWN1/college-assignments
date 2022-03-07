# Models

The models have a file for their schema and a file for the model functions. The model schemas can be found in the `models/schemas` folder while the model functions can be found in the `models` folder. All incoming documents will be sanitized of any fields not present in the Schemas below before adding it to the database

When creating a new model, the name of the file must be the same for both the schema and the functions file to avoid ambiguity

## Schemas

`customerId` and `productId` is automatically incremented upon creation of the document and is used as a user friendly id that is easier to query for using the API. It does not replace `_id`

The `createdAt` and `updatedAt` fields are added upon creation through the Mongoose Schema API [timestamp option](https://mongoosejs.com/docs/guide.html#timestamps). `updatedAt` will update it's timestamp each time a change is made to the document.

### Customer

The `customer` document contains the following information

```js
{
    customerId: {
      type: Number,
      unique: true,
    },
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumbers: {
      type: [Number],
      default: [],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    }
  },
```

All fields are **required** except for `phoneNumbers`

### Products

The `products` document contains the following information

```js
{
    productId: {
      type: Number,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    bestSeller: {
      type: Boolean,
      required: true,
    },
    photoURL: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    }
  },
```

All fields are **required** except for `quantity`
