module.exports= (sequelize, DataTypes)=>{
    var Employee = sequelize.define(
        "Employee",
        {   eID: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV1,
                primaryKey: true
            },
            first_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            last_name:{
                type: DataTypes.STRING,
                allowNull: false
            },
            email:{
                type: DataTypes.STRING,
                allowNull: false
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: false
            },
            salary: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }
    );
    return Employee;
};