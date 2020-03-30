module.exports = (sequelize, DataTypes) => {
    return sequelize.define('auth', {
        nick: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hashedpassword: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        provider: {
            type: DataTypes.STRING(10),
            allowNull: false,
            defaultValue: 'local',
        },
        snsId: {
            type: DataTypes.STRING(30),
            allowNull: true,
        }
    }, {
        //속성에 classMethods 를 쓸 수 있나 보구나
        timestamps: true,
        paranoid: true
    }
    );
}