import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { DataStoreService } from '../services/data-store.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  displayedColumns: string[] = ['login', 'html_url'];

  showLoader: boolean = false;
  search: string = '';
  result: any = {};
  // results: any[] = []

  constructor(
    private api: ApiServiceService,
    private dataStoreService: DataStoreService
  ) {}

  ngOnInit() {}

  searchUsers() {
    if (!this.search) return;

    this.showLoader = true;

    this.api.searchUsers(this.search).then((response: any) => {
      this.showLoader = false;
      console.log('Response: ', response);
      this.result =
        response.data.items && response.data.items.length > 0
          ? response.data.items[0]
          : {};
      // this.results = response.data.items;

      if (this.result.login) {
        this.dataStoreService.storeSearchResult(this.result, true);
      } else {
        this.dataStoreService.storeSearchResult({ login: this.search }, false);
      }

      console.log('Results: ', this.result);
    });
  }
}

// {
//       "login": "sumitkumar1503",
//       "id": 43719800,
//       "node_id": "MDQ6VXNlcjQzNzE5ODAw",
//       "avatar_url": "https://avatars.githubusercontent.com/u/43719800?v=4",
//       "gravatar_id": "",
//       "url": "https://api.github.com/users/sumitkumar1503",
//       "html_url": "https://github.com/sumitkumar1503",
//       "followers_url": "https://api.github.com/users/sumitkumar1503/followers",
//       "following_url": "https://api.github.com/users/sumitkumar1503/following{/other_user}",
//       "gists_url": "https://api.github.com/users/sumitkumar1503/gists{/gist_id}",
//       "starred_url": "https://api.github.com/users/sumitkumar1503/starred{/owner}{/repo}",
//       "subscriptions_url": "https://api.github.com/users/sumitkumar1503/subscriptions",
//       "organizations_url": "https://api.github.com/users/sumitkumar1503/orgs",
//       "repos_url": "https://api.github.com/users/sumitkumar1503/repos",
//       "events_url": "https://api.github.com/users/sumitkumar1503/events{/privacy}",
//       "received_events_url": "https://api.github.com/users/sumitkumar1503/received_events",
//       "type": "User",
//       "site_admin": false,
//       "score": 1.0
//     }
