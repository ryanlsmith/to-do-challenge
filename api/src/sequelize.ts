import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(
  'postgres://postgres:admin@localhost:5432/postgres'
)

async function authenticate() {
  try {
    await sequelize.authenticate()
    console.info('Connection has been established successfully.')
    await sequelize.sync({ force: true })
    console.info('Database tables synced successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

authenticate()

export default sequelize
