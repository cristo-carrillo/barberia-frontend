import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CortesModel } from 'src/app/models/cortes';
import { CortesService } from 'src/app/services/cortes/cortes.service';

@Component({
  selector: 'app-formulario-corte',
  templateUrl: './formulario-corte.component.html',
  styleUrls: ['./formulario-corte.component.scss']
})
export class FormularioCorteComponent implements OnInit {
  public formGroup: FormGroup = new FormGroup({});
  public corteActualizar: CortesModel | null = null;
  constructor(private formBuilder: FormBuilder, private corteService: CortesService, private router: Router) { }

  ngOnInit(): void {
    const actualizar = localStorage.getItem('corteActualizar');
    this.corteActualizar = actualizar ? JSON.parse(actualizar) : null;
    this.buildForm();
  }

  public buildForm(){
    this.formGroup = this.formBuilder.group({
      nombre: [this.corteActualizar?.nombre, Validators.required],
      descripcion: [this.corteActualizar?.descripcion, Validators.required],
      precio: [this.corteActualizar?.precio, Validators.required],
      estado: [this.corteActualizar?.estado, Validators.required]
    });
  }

  public agregarCorte(){
    this.corteService.agregarCorte(this.formGroup.value).then(response => {
      alert('Corte creado correctamente');
      //this.router.navigate(['/cortes/1'], {queryParams: {mostrarAlerta: 'agregar'}});
    }).catch(error => {
      this.router.navigate(['/error']);
    })
  }

  public actualizarCorte(){
    const corte: CortesModel = {id_corte: this.corteActualizar?.id_corte, ...this.formGroup.value};
    console.log(corte);
    this.corteService.actualizarCorte(corte).then(response => {
      if(response.message === 'update'){
        localStorage.clear();
        alert('Corte actualizado correctamente');
        this.router.navigate(['/cortes'])
      }
    }).catch(error => {
      this.router.navigate(['/error']);
    })
  }

}
