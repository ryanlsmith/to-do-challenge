import { DataTypes, ModelDefined, Optional } from 'sequelize'
import sequelize from '../sequelize'
import User from './user'

export type Task = {
  id: string
  createdAt: Date
  updatedAt: Date
  title: string
  userId: string
  description?: string
}

export type TaskCreation = Optional<Task, 'id' | 'updatedAt' | 'createdAt'>

const Task: ModelDefined<Task, TaskCreation> = sequelize.define(
  'Task',
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: new DataTypes.STRING(64),
      allowNull: false,
    },
    description: {
      type: new DataTypes.STRING(4096),
      allowNull: true,
    },
  },
  { timestamps: true }
)

User.hasMany(Task, {
  foreignKey: {
    name:'userId',
    allowNull: false
  },
})

export default Task
