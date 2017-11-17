
### Initial Setup
```
git pull git@github.com:veteranyu/Demo1.git
cd koa-knex-starter
cp .env.example .env                // Copy the environment file to be configured
npm install                         // Install dependencies
npm install -g knex                 // Install knex globally to use knex database migrations
```

### Database Migrations
```
knex migrate:latest                 // Run migration
knex migrate:rollback               // Rollback previous migration
```

### Run the server
```
npm run server                      // Runs the server in development mode
npm run dev                 // Runs the server in prroduction mode
```
