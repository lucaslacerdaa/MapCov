const db = require("../models");
const Paciente = db.pacientes;
const { Op } = require("sequelize");
const pool = require("../dbs/postgres");

exports.save = async (paciente) => {
  return await Paciente.create({
    nome: paciente.nome,
    sobrenome: paciente.sobrenome,
    cpf: paciente.cpf,
    idade: paciente.idade,
    peso: paciente.peso,
    rua: paciente.rua,
    bairro: paciente.bairro,
    cidade: paciente.cidade,
    estado: paciente.estado,
    telefone: paciente.telefone,
    email: paciente.email,
  })
    .then((result) => {
      console.log("Created paciente: " + JSON.stringify(result));
      return result;
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

exports.findAll = async () => {
  const result = await Paciente.findAll();
  return result;
};

exports.findOne = async (id) => {
  const result = await Paciente.findOne({
    where: {
      id: id,
    },
  });
  return result;
};

exports.findByNum = async (num) => {
  const result = await pool.query("SELECT * FROM pacientes;");
  const resul = [];
  if(num > 0){
    for(let i = 0; i < num ; i++){
      resul.push(result.rows[i]);
    }
    return resul;
  }
};

exports.findByEstado = async (estado) => {
const result = await pool.query("SELECT * FROM pacientes WHERE estado=$1;", [
  estado]);
return result.rows;
};

exports.update = async (id, paciente) => {
  return await Paciente.update(
    {
      nome: paciente.nome,
      sobrenome: paciente.sobrenome,
      cpf: paciente.cpf,
      idade: paciente.idade,
      peso: paciente.peso,
      rua: paciente.rua,
      bairro: paciente.bairro,
      cidade: paciente.cidade,
      estado: paciente.estado,
      telefone: paciente.telefone,
      email: paciente.email,
    },
    {
      where: {
        id: id,
      },
      returning: true,
    }
  )
    .then((result) => {
      console.log("Update paciente: " + JSON.stringify(result));
      return result[1][0];
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

exports.delete = async (id) => {
  await Paciente.destroy({
    where: {
      id: id,
    },
  });
};
