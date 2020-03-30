module.exports = (sequelize, DataTypes) => {
    return sequelize.define('patterntodo', {
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
        Ordernum: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        timestamps: true,
        paranoid: true
    });
}