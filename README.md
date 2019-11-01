#### Links
 - Getting Started with Node.js - Full Tutorial - https://www.youtube.com/watch?v=gG3pytAY2MY

#### Examples
 - file `notes.md` has a lot of examples

#### Useful commands
 - see github.com/vagnerzampieri/cheatsheets/blob/master/javascript.md, there are commands to Node.js and npm.

#### Use exports without ES6
 - `cd /example-1 && node index.js` or `node index2.js` 

#### Require with cache and without cache
 - `cd /example-2 && node index2.js` 

#### Use ESM 
 - `cd /example-3 && node --experimental-modules index2.js`

#### Run a server with HTTP 
 - `cd /example-4 && npm run dev-start`

#### Run a server with Express and Nodemon (for reload automatically)
 - `cd /example-5 && npm run dev-start`

#### Use Promise, child_process example
 - `cd /example-6 && npm run dev-start`

#### Use EventEmitter
 - `cd /example-7 && npm run dev-start`

#### Express and MongoDB
 - Build a restful API with Node.js Express & MongoDB | Rest Api Tutorial - https://www.youtube.com/watch?v=vjf774RKrLc
 - `cd /example-8`
 - `docker-compose up`
 - `cp .env.example .env` put IP address in `DB_CONTAINER`
 - `npm run dev-start`
 - `curl -d '{"title":"This is a title", "description":"This is a description"}' -H "Content-Type: application/json" -X POST http://localhost:3000/posts`

#### Authentication with JWT
 - Build a Node.js API Authentication with JWT Tutorial - https://www.youtube.com/watch?v=2jqok-WgelI
 - `cd /example-9`
 - `docker-compose up`
 - `cp .env.example .env` put IP address in `DB_CONTAINER` and create a secret toke for `TOKEN_SECRET`
 - `npm run dev-start`
 - `curl -d '{"name":"Your name", "email":"your@email.com", "password":"123456"}' -H "Content-Type: application/json" -X POST http://localhost:3000/api/user/register`
 - `curl -d '{"email":"your@email.com", "password":"123456"}' -H "Content-Type: application/json" -X POST http://localhost:3000/api/user/login`
 - `curl -H "Content-Type: application/json" -H "Auth-Token: <TOKEN>" -X GET http://localhost:3000/api/users`
  
#### Jest and Babel to use Node.js 12
 - Jest Crash Course - Unit Testing in JavaScript - https://www.youtube.com/watch?v=7r4xVDI2vho
 - `cd /example-10`
 - `npm test`