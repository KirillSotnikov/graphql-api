const express = require('express')
const graphqlHTTP = require('express-graphql')
const sequelize = require('./database')
const schema = require('./graphql/schema')
const resolver = require('./graphql/resolver')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use(graphqlHTTP({
  schema,
  rootValue: resolver,
  graphiql: true
}))

async function start() {
  try{
    await sequelize.sync({
      // force: true
    })
    app.listen(PORT)
  } catch(err) {
    console.log(err)
  }
}

start()