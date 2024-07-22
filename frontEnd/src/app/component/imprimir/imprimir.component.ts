import { Component } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-imprimir',
  templateUrl: './imprimir.component.html',
  styleUrls: ['./imprimir.component.css']
})
export class ImprimirComponent {

  // Datos que se mostrarán en el PDF
  data: any = {
    titulo: 'Reserva del cuarto',
    contenido: 'su costo sera'
  };

  constructor() {}


  generatePDF() {
    const doc = new jsPDF();

    doc.text(this.data.titulo, 10, 10);
    doc.text(this.data.contenido, 10, 20);

    doc.save('reservas.pdf');
  }
}
