module.exports = (sequelize, DataTypes) => {
    return sequelize.define('wanttodo', {
        category: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    }, {
        timestamps: true,
        paranoid: true,
    });
};