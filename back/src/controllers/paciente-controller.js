const Paciente = require("../domain/paciente");
const PacienteService = require("../services/paciente-service");
var pacienteService = new PacienteService();

exports.get = async (req, res) => {
  res.json(await pacienteService.getAll());
};

exports.getById = async (req, res) => {
  res.json(await pacienteService.getById(req.params.id));
};

exports.post = async (req, res) => {
  if (req.body.name.length < 2 || req.body.price < 0) {
    res.status(400).send();
  } else {
    let paciente = await pacienteService.add(
      new Paciente(req.body.nome, req.body.sobrenome, req.body.cpf, req.body.idade, req.body.peso, req.body.telefone, req.body.email, req.body.rua, req.body.bairro, req.body.cidade, req.body.estado)
    );

    if (paciente != null) {
      res.status(201).json(paciente);
    } else {
      res.status(409).send();
    }
  }
};

exports.put = async (req, res) => {
  res.json(
    await pacienteService.update(
      req.params.id,
      new Paciente(req.body.nome, req.body.sobrenome, req.body.cpf, req.body.idade, req.body.peso, req.body.telefone, req.body.email, req.body.rua, req.body.bairro, req.body.cidade, req.body.estado)
    )
  );
};

exports.delete = (req, res) => {
  res.json(pacienteService.delete(req.params.id));
};
