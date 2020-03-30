module.exports = (sequelize, DataTypes) => {
    return sequelize.define('calender', {
        categoryname: {
            type: DataTypes.STRING(100),
            allowNull: false,
            defaultValue: 'default'
        },
        categorytemma: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    }, {
        timestamps: true,
        paranoid: true,
    })
};