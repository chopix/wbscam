import { sequelize } from '../config/sequelize.js'
import { DataTypes, Model } from 'sequelize'

export class Ad extends Model {}
Ad.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
		},
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    photoUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    supplier: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    brand: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    feedbackCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tgId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
	{
		sequelize,
		modelName: 'ads',
    timestamps: true,
    initialAutoIncrement: 43234719,
	}
)