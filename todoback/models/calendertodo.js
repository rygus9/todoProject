module.exports = (sequelize, DataTypes) => {
    return sequelize.define('calendertodo', {
        content: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        startTime: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        endTime: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    }, {
        timestamps: true,
        paranoid: true,
    });
}