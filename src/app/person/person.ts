import { Item } from '../data-models/item.model';
import { Language } from '../data-models/language';
export class Person extends Item {
    surname: String;
    dateOfBirth: Date;
    language: Language;
}

