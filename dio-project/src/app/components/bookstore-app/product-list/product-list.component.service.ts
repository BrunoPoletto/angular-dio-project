import { Injectable } from "@angular/core";
import { Book } from "./model/book";


@Injectable({
    providedIn: 'root'
})

export class BookService{
    livros:Book[] = [{
        id:'1',
        category: 'Science Fiction',
        img: './assets/images/img1.jpg',
        name: 'Annihilation',
        price: 19.00,
        quantity: 15,
    },
    {
        id:'2',
        category: 'Horror',
        img: './assets/images/img2.jpg',
        name: 'Authority',
        price: 29.00,
        quantity: 10,
    },
    {
        id: '3',
        category: 'Science Fiction',
        img: './assets/images/img3.jpg',
        name: 'Acceptance',
        price: 39.00,
        quantity: 5,
    }
    ]
    getBook() {
        return this.livros;
    }
}
