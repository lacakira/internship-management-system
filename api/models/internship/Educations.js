module.exports = (sequelize, DataTypes) => {
	const Educations = sequelize.define("Educations", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		academy: {
			type: DataTypes.STRING(100),
		},
		level: {
			type: DataTypes.STRING(100),
		},
		program: {
			type: DataTypes.STRING(50),
			allowNull: true,
		},
		department: {
			type: DataTypes.STRING(50),
			allowNull: true,
		},
		gpa: {
			type: DataTypes.DECIMAL(4),
		},
	}, {
		underscored: true
	});

	Educations.associate = (models) => {
		Educations.belongsTo(models.Students, {
			foreignKey: "student_id",
		});
	};

	return Educations;
};
