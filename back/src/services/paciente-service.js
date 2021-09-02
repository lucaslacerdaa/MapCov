const pacienteRepo = require("../repositories/paciente-repo");

class PacienteService {
  add(paciente) {
    return pacienteRepo.save(paciente);
  }

  getAll() {
    return pacienteRepo.findAll();
  }

  getById(id) {
    return pacienteRepo.findOne(id);
  }

  getByNum(num) {
    return pacienteRepo.findByNum(num);
  }

  getByEstado(estado) {
    return pacienteRepo.findByEstado(estado);
  }

  update(id, paciente) {
    return pacienteRepo.update(id, paciente);
  }

  delete(id) {
    return pacienteRepo.delete(id);
  }
}

module.exports = PacienteService;
