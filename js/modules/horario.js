export default class Horario {
  constructor(infoHorario) {
    this.infoHorario = document.querySelector(infoHorario);
  }

  funcionamento() {
    this.horarios = this.infoHorario.dataset.horarios.split(',').map(Number);
    this.dias = this.infoHorario.dataset.dias.split(',').map(Number);
  }

  agora() {
    this.agora = new Date();
    this.horaAtual = this.agora.getHours();
    this.diaAtual = this.agora.getDay();
  }

  status() {
    this.horarioStatus = this.horaAtual >= this.horarios[0] && this.horaAtual <= this.horarios[1];
    this.diaStatus = !!this.dias.includes(this.diaAtual);
    return this.horarioStatus && this.diaStatus;
  }

  ativarStatus() {
    if (this.status()) {
      this.infoHorario.classList.add('aberto');
    } else {
      this.infoHorario.classList.add('fechado');
    }
  }

  init() {
    this.funcionamento();
    this.agora();
    this.ativarStatus();
    return this;
  }
}
