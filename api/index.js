const { ApolloServer} = require('apollo-server');
const userSchema = require('./user/schema/user.graphql')


const users = [
  {
    nome: 'Valente',
    ativo: true
  },
  {
    nome: 'Teodoro',
    ativo: false
  },
]


const typeDefs = [userSchema]
const resolvers = {}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`Servidor rodando na porta ${url}`)
})

// SDL = linguagem de definição de schema 
// gql = js interpreta o que ta escrito em graphql