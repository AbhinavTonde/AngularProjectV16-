import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../Model/Book';
import { connectionUrl } from './connectivity';

@Injectable()
export class ConnectivityProviderService {

  backendUrl = connectionUrl

  constructor(private http:HttpClient) { }

  getAllBookData(){
    return this.http.get<Book[]>(`${this.backendUrl}show_all`)
  }



}
