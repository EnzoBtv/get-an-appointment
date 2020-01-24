import { Model, DataTypes } from "sequelize";

import User from "./User";

import connection from "../database";

class Address extends Model {
    public id!: number;
    public zipCode!: string;
    public city!: string;
    public number!: number;
    public state!: string;
    public complement!: string;

    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

Address.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        zipCode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        number: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        complement: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize: connection,
        tableName: "addresses"
    }
);

Address.belongsTo(User, { targetKey: "id" });

export default Address;
