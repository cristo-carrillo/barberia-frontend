import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CortesModel } from 'src/app/models/cortes';
import { CortesService } from 'src/app/services/cortes/cortes.service';

@Component({
  selector: 'app-tabla-cortes',
  templateUrl: './tabla-cortes.component.html',
  styleUrls: ['./tabla-cortes.component.scss']
})
export class TablaCortesComponent implements OnInit {
  // @Output() alertData = new EventEmitter();
  public cortes: CortesModel[] = [];


  constructor(private cortesService:CortesService, private router:Router) { }

  async ngOnInit(): Promise<void>{
    this.cortes= await this.obtenerCortes();
    console.log(this.cortes);
  }

  private async obtenerCortes(): Promise<any> {
    try{
      const response = await this.cortesService.obtenerCortes();
      return response.data;
    }catch(err){
      this.router.navigate(['/error']);
    }
  }

  public eliminarCorte(id: number){
    this.cortesService.eliminarCorte(id).then(async (response) => {
      if(response.message === 'DELETED'){
        //this.alertData.emit('Canción eliminada correctamente');
        this.cortes = await this.obtenerCortes();
        alert('Eliminado correctament');
      }
    }).catch(error => {
      console.log(error);
    })
  }

  public irActualizarCorte(corte: CortesModel){
    localStorage.setItem('corteActualizar', JSON.stringify(corte));
    this.router.navigate(['/formulario-corte']);
  }

}
