import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasaService implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit() {
  }
  
}
