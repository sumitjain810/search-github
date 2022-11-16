import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../services/data-store.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  displayedColumns: string[] = ['login', 'html_url', 'status', 'actions'];
  searchHistory: any;
  result: any = {};

  constructor(private dataSourceService: DataStoreService) {}

  ngOnInit(): void {
    this.getSearchHistory();
  }

  getSearchHistory() {
    this.searchHistory = this.dataSourceService.getSearches();
    console.log('Search History: ', this.searchHistory);
  }

  delete(element: any) {
    console.log('Element: ', element);
    this.result = {};
    this.searchHistory = this.dataSourceService.delete(element.id);
    this.getSearchHistory();
  }

  show(element: any) {
    console.log('Element: ', element);
    this.result = element;
  }
}
