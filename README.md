# Truth REST API

<!--- These are examples. See https://shields.io for others or to customize this set of shields. You might want to include dependencies, project status and licence info here --->
![GitHub repo size](https://img.shields.io/github/repo-size/gitrobertpm/truth-api)
![GitHub contributors](https://img.shields.io/github/contributors/gitrobertpm/truth-api)
![GitHub stars](https://img.shields.io/github/stars/gitrobertpm/truth-api?style=social)
![GitHub forks](https://img.shields.io/github/forks/gitrobertpm/truth-api?style=social)
![Twitter Follow](https://img.shields.io/twitter/follow/robertpmtweets?style=social)


This `truth-api` project is a `REST API` to be consumed by a React front end that is still being built.  Will update this doc with the relevant info when that resource is ready to be shared.  

This `truth-api` allows all users to view, and registered, authorized users to CRUD "truth" posts to the api.

These "truth" posts are meant to be assertions of the truth accompanied by a defending argument.

Registered and authorized users will have the opportunity to vote on the "truth's" that have been shared, to show their agreement and support, or to challenge that "truth".

## Stack
* Node
* Express
* SQLite/Postgres
* Sequelize

## Prerequisites

To run this app locally you'll need to have Node and npm installed.

## Installing 

After downloading the repo, run the following commands to install dependencies and set up the database

```
npm ci
```

```
npm run seed
```

## Running

Execute one of the following commands to run the app:

For dev mode with nodemon:
```
npm run dev
```

Standard Node process:
```
npm start
```

## Testing

To test the REST API's routes, open Postman and upload the `Truth-tests.postman_collection.json` file.

Add run commands and examples you think users will find useful. Provide an options reference for bonus points!

## Contact

If you want to contact me you can reach me at <grobertpm@gmail.com>.

## License

All rights reserved.  
