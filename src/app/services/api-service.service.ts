import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Octokit, App } from "octokit";
import { createAppAuth } from "@octokit/auth-app";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private getURL = 'http://localhost:8080/employee/getAll';
  private postURL = 'http://localhost:8080/employee/save';
  private deleteURL = 'http://localhost:8080/employee/delete';
  
  private octokit = new Octokit({
    auth: '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'
  })  
  // await octokit.request('GET /octocat{?s}', {})

  constructor(private httpClient: HttpClient) { }
  
  searchUsers(key: string){
    return this.octokit.request('GET /search/users{?q}', {q: 'user:'+key})
  }

  getEmployee(){
    // return this.httpClient.get(this.getURL);
  }

  saveEmployee(data: any){
    return this.httpClient.post(this.postURL, data);
  }

  deleteEmployee(data: any){
    return this.httpClient.post(this.deleteURL, data);
  }
  
}


  // private octokit = new Octokit({
  //   authStrategy: createAppAuth,
  //   auth: {
  //     appId: 1,
  //     privateKey: "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",
  //     installationId: 123,
  //   },
  // });