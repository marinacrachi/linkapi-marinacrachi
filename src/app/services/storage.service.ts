import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage: any;

  constructor() {
    this.storage = window.localStorage;
  }

  setItem(item,content){
    this.storage.setItem(item,JSON.stringify(content));
  }

  getItem(item){
    return JSON.parse(this.storage.getItem(item));
  }

  removeItem(item){
    this.storage.removeItem(item)
  }

  clearStorage(){
    this.storage.clear()
  }
  
}
