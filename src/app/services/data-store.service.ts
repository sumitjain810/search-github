import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  count: number = 0;
  searches: any = [];
  // searches: any = {successful: [], unsuccessful: []}

  constructor() {}

  storeSearchResult(data: any, flag: boolean) {
    data.id = ++this.count;
    this.searches.push(data);
    // this.searches.successful.push(data);
    // this.searches.unsuccessful.push(data);
  }

  getSearches() {
    return this.searches;
  }

  delete(id: number) {
    console.log('ID: ', id);

    this.searches = this.searches.filter((item:any) => item.id !== id);
  }
}
