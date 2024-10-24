import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(
  'postgres://postgres:admin@localhost:5432/postgres'
)

async function authenticate() {
  try {
    await sequelize.authenticate()
    console.info('Connection has been established successfully.')
    // await sequelize.sync() // Create table if it doesn't exist and does nothing if it already exists
    // await sequelize.sync({ force: true }) // Create table, dropping it first if it already existed
    await sequelize.sync({ alter: true }) // Check the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.
    console.info('Database tables synced successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

authenticate()

export default sequelize
