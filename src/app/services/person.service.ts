import { IService } from './../interfaces/iservice.model';
import { Injectable } from '@angular/core';

@Injectable()
export class PersonService implements IService {

  constructor() { }

  getList() { }
  create() { }
  update() { }
  delete() { }
}
