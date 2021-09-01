const pacienteRepo = require("../repositories/paciente-repo");

class ProductService {
  add(paciente) {
    return pacienteRepo.save(paciente);
  }

  getAll() {
    return pacienteRepo.findAll();
  }

  getById(id) {
    return pacienteRepo.findOne(id);
  }

  update(id, paciente) {
    return pacienteRepo.update(id, paciente);
  }

  delete(id) {
    return pacienteRepo.delete(id);
  }
}

module.exports = ProductService;
