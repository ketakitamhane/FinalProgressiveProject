<<<<<<< HEAD
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Transaction } from "../types/Transaction";
import { Observable } from "rxjs";
import { Customer } from "../types/Customer";
import { Account } from "../types/Account";
// import { transition } from "@angular/animations";

@Injectable({
  providedIn: "root",
})
export class BankService {
  private baseUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  addCustomer(customer: Customer): Observable<Customer> {
=======

import { environment } from "src/environments/environment";
import { Transaction } from "../types/transaction";
import { Observable } from "rxjs";
import { Customer } from "../types/customer";
import { Account } from "../types/account";


export class BankService {
  
  

  addCustomer(customer: Customer): Observable<Customer> {
    
>>>>>>> d3f1d25afcbe30b6a1df3c47400fe6736474356f
  }

  getCustomers(): Observable<Customer[]> {
    

  }

  addAccount(account: Account): Observable<Account> {
<<<<<<< HEAD
   
=======
    
>>>>>>> d3f1d25afcbe30b6a1df3c47400fe6736474356f
  }

  getAccounts(): Observable<Account[]> {
    

  }

  performTransaction(transaction: Transaction): Observable<Transaction> {
<<<<<<< HEAD
   
=======
    
>>>>>>> d3f1d25afcbe30b6a1df3c47400fe6736474356f
  }

  getOutstandingBalance(userId: string): Observable<number> {
    
<<<<<<< HEAD
  }

  getAllTranactions(): Observable<Transaction[]> {
    
=======

  }

  getAllTranactions(): Observable<Transaction[]> {
   
>>>>>>> d3f1d25afcbe30b6a1df3c47400fe6736474356f

  }
  /** get account by user */
  getAccountsByUser(userId:string|null): Observable<Account[]> {
    

  }

  getTransactionByUser(userId: string|null): Observable<Transaction[]> {
    

  }

  deleteCustomer(customerId: number): Observable<any> {
<<<<<<< HEAD
    
  }

  editCustomer(customer: Customer): Observable<Customer> {
   
  }

  deleteAccount(accountId: number): Observable<any> {
    
  }

  editAccount(account: Account): Observable<Account> {
    // return null;
=======
   
  }

  editCustomer(customer: Customer): Observable<Customer> {
    
  }

  deleteAccount(accountId: number): Observable<any> {
   
  }

  editAccount(account: Account): Observable<Account> {
    
>>>>>>> d3f1d25afcbe30b6a1df3c47400fe6736474356f
  }


}
