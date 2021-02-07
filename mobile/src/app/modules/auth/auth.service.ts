import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable()
export class AuthService {
    constructor(private http : HttpClient) {}

    public signup(password: String, email: String, name: String) : any{
        this.http.post("localhost:8080/auth", {password, email, name})

    }

    public login() : any{
        console.log("hola")
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