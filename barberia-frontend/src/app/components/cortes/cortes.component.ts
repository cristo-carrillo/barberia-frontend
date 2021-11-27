import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cortes',
  templateUrl: './cortes.component.html',
  styleUrls: ['./cortes.component.scss']
})
export class CortesComponent implements OnInit {
  public subtituloTabla = 'Subtitulo de ejemplo';
  public alertMessage = undefined;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot);
  }
  public mostrarAlerta(evento: any){
    this.alertMessage = evento;
    setTimeout(() => {
      this.alertMessage = undefined;
    }, 3000);
  }

}
