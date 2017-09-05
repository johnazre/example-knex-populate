# Example using knex-populate

## Getting Started
```
cd example-knex-populate
npm install
nodemon
```

* Usage is in `./routes/indexRoutes.js`.
* To change the database that is being queried, go to `./knexfile.js` and change the connection string to whatever database you want. **WARNING:** This is how it is used when you install Postgres with Homebrew. If you install it with the installer on the Postgres website, you will probably have to add the local Postgres username/password into the database url string.

```
module.exports = {
  development: {
      client: 'pg',
      connection: 'postgres://localhost/whatever-local-db-you-want',
      ...
    },
  ...
};
```
