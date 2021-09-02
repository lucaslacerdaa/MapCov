module.exports = (sequelize, DataTypes) => {
  const Paciente = sequelize.define(
    "pacientes",
    {
      nome: {
        type: DataTypes.STRING,
      },
      sobrenome: {
        type: DataTypes.STRING,
      },
      cpf: {
        type: DataTypes.STRING,
      },
      idade: {
        type: DataTypes.INTEGER,
      },
      peso: {
        type: DataTypes.REAL,
      },
      rua: {
        type: DataTypes.STRING,
      },
      bairro: {
        type: DataTypes.STRING,
      },
      cidade: {
        type: DataTypes.STRING,
      },
      estado: {
        type: DataTypes.STRING,
      },
      telefone: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );

  return Paciente;
};
