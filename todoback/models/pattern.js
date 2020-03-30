module.exports = (sequelize, DataTypes) => {
    return sequelize.define('pattern', {
        patternname: {
            type: DataTypes.STRING,
            allownull: false,
        }
    }, {
        timestamps: true,
        paranoid: true,
    });
}