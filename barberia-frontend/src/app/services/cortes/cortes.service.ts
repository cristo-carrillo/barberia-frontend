import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CortesModel } from 'src/app/models/cortes';

@Injectable({
  providedIn: 'root'
})
export class CortesService {

  constructor(private http: HttpClient) { }

  public obtenerCortes(): Promise<any>{
    const url = `${environment.apiUrl}/obtenerCortes`
    return this.http.get(url).toPromise();
  }

  public obtenerCorte(id: number){}

  public agregarCorte(corte: any){
    const url = `${environment.apiUrl}/agregarCorte`
    return this.http.post(url, corte).toPromise();
  }

  public actualizarCorte(corte: CortesModel): Promise<any>{
    const url = `${environment.apiUrl}/actualizarCorte/${corte.id_corte}`
    return this.http.put(url, corte).toPromise();
  }

  public eliminarCorte(id: number): Promise<any>{
    return this.http.delete(`${environment.apiUrl}/eliminarCorte/${id}`).toPromise();
  }

}
