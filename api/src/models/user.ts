import { DataTypes, ModelDefined, Optional } from 'sequelize'
import sequelize from '../sequelize'

export type User = {
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
}

export type UserCreation = Optional<User, 'id' | 'createdAt' | 'updatedAt'>

const User: ModelDefined<User, UserCreation> = sequelize.define(
  'User',
  {
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true }
)

export default User
