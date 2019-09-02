import { Component, OnInit } from "@angular/core";
import { Book } from "../book.model";
import { Newspaper } from "../newspaper.model";
import { BookService } from "../book.service";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"]
})
export class BookListComponent implements OnInit {
  adat: Book[];
  private books = [
    new Book("Stars from Eger", "The revenge of Jumurdzsák"),
    new Book("Boys from Pál street", "RIP Nemecsek"),
    new Book("Sons of a man with stone heart", "")
  ];

  private newspapers = [
    new Newspaper("Blikk"),
    new Newspaper("Népszabadság"),
    new Newspaper("Magyar Nemzet")
  ];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(adat => adat);
    this.putIn();
  }

  putIn() {
    for (let i = 0; i < this.adat.length; i++) {
      this.books[i].title = this.adat[i].title;
      this.books[i].subTitle = this.adat[i].subTitle;
    }
    console.log(this.adat);
  }
}
