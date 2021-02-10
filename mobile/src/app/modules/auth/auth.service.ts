import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import firebase from "firebase/app";
import { promise } from "protractor";

var fireAuth = firebase.auth();

@Injectable()
export class AuthService {
    constructor(private http : HttpClient) {}

    // public signup(password: String, email: String, name: String) : any{
    //     return this.http.post("http://localhost:8080/auth/signup", {password, email, name}).toPromise()

    // }

    // public login(password: String, email: String) : any{
    //     return this.http.post("http://localhost:8080/auth/login", {password, email}).toPromise()
    // }

    public signup(password: string, email: string, name : string) : any{
        return fireAuth.createUserWithEmailAndPassword(email, password)
        .then((res) => {
            res.user.updateProfile({displayName : name})
            return res.user.uid
        })
        .catch((err) => {
            throw new Error(err)
        })
    }

    public login(password: string, email: string) : any{
        return fireAuth.signInWithEmailAndPassword(email, password)
        .then((res) =>{ 
            return res.user.uid
        })
        .catch((err) => {
            throw new Error(err)
        })
    }


    public getHello(): any {
        return {
            title: this.getHelloTitle(),
            subtitle: this.getHelloSubtitle(),
            content: this.getHelloContent(),
        }
    }

    private getHelloTitle(): string {
        return 'Hello world!';
    }

    private getHelloSubtitle(): string {
        return 'Culpa excepteur aute consequat mollit aliqua enim reprehenderit nulla.';
    }

    private getHelloContent(): string {
        return 'Dolore dolor in culpa commodo aliqua. Ex ullamco elit labore sint amet. Velit Lorem incididunt irure ex consectetur duis magna quis. Velit enim nostrud elit sit eu nostrud nisi ad commodo nulla amet exercitation culpa voluptate. Est ea cillum dolor in veniam laboris Lorem.';
    }
}