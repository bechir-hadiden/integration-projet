import { Injectable } from "@angular/core";

// @Injectable()
export class User{
    username!:string ; 
    password !: string ; 
    roles!:string[]; 
    email!: string ;
    enabled!: boolean
    }