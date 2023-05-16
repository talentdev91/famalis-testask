import { Injectable } from "@angular/core";
import { BaseService } from "../app.service";

@Injectable()
export class BookService extends BaseService {
  private getBooksUrl = "/book/getBooks";
  private getAuthorNameUrl = "/book/getAuthorName";

  constructor() {
    super();
  }

  public getBooks(): Promise<Book[]> {
    return this.get(this.getBooksUrl);
  }

  public getAuthorName(authorId: any): Promise<Book[]> {
    return this.get(this.getAuthorNameUrl, { id: authorId });
  }
}

export class Book {
  author: number = 0;
  title: string = "";
  publicationYear: number = 0;
  id: number = 0;
  description: string = "";
  name: string = "";
}
