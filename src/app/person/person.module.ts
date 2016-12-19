import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person.component';
import { Person } from './person';
import { PersonsComponent } from './persons.component';

@NgModule({
  imports: [
    CommonModule,
    Person
  ],
  declarations: [PersonComponent, PersonsComponent]
})
export class PersonModule { }
