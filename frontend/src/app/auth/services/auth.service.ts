<<<<<<< HEAD
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from "rxjs";
// import { User } from "../types/user";
import { Customer } from "../../bank/types/customer";

export class AuthService {
  

 
  constructor(private http: HttpClient) {}

  login(user: Partial<Customer>): Observable<{ [key: string]: string }> {
    
  }

  getToken() {
    
  }
  getRole()
  {
    
  }
  getUsers(): Observable<Customer[]> {
    
  }

  createUser(user: Customer): Observable<Customer> {
  }
=======

export class AuthService {
  
>>>>>>> d3f1d25afcbe30b6a1df3c47400fe6736474356f
}
