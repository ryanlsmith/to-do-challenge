import { DataTypes, ModelDefined, Optional } from 'sequelize'
import sequelize from '../sequelize'
// import User from './user'

export type Task = {
  id: string
  createdAt: Date
  updatedAt: Date
  title: string
  description?: string
}

export type TaskCreation = Optional<Task, 'id' | 'updatedAt' | 'createdAt'>

const Task: ModelDefined<Task, TaskCreation> = sequelize.define(
  'Task',
  {
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
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
    // Relationships
    // userID: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   references: {
    //     model: User,
    //     key: 'id',
    //   },
    // },
  },
  { timestamps: true }
)

export default Task
