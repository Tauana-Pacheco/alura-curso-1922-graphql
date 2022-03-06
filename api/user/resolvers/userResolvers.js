const arrUsers = [
  {
    nome: 'Valente',
    ativo: true
  },
  {
    nome: 'Teodoro',
    ativo: false
  },
]

const userResolvers = {
  Query: {
    users: () => arrUsers,
    primeiroUsers: () => arrUsers[0]
  }
}

module.exports = userResolvers