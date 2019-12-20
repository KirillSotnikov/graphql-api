
// const users = [
//   {name: 'Igor', age: 30, email: 'sotnikov_k@outlook.com'},
//   {name: 'Elena', age: 33, email: 'comicon2508@gmail.com'}
// ]

const User = require('../models/user')

module.exports = {
  async getUsers() {
    const users = await User.findAll()
    return users
  },

  async addUser({user: {name, age, email}}) {
    try{
      const user = await User.create({
        name, age, email
      })
      return user
    } catch (err) {
      throw new Error('Wrong data')
    }
  },

  async updateUser({id, user}) {
    try{
      const candidate = await User.findByPk(id)
      const newUser = await candidate.update(user)

      return newUser
    } catch (err) {
      throw new Error(err)
    }
  },

  async deleteUser({id}){
    try{
      const user = await User.findByPk(id)
      await user.destroy()
      return true
    } catch (err) {
      throw new Error(err)
    }
  }
}