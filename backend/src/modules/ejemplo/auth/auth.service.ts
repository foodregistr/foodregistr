import { Injectable } from '@nestjs/common';
import { InvalidUserException } from 'src/exceptions/InvalidUserException';
import { FireService } from 'src/fire.service';
import { User } from './user'

@Injectable()
export class AuthService extends FireService {

    public signup(user : User): Promise<any>{
      return this.FireAuth.createUser({email: user.email, password: user.password, displayName: user.name})
    }

    public login(email: string): Promise<any>{//, password : string
      this.FireAuth.getUserByEmail(email).then(
        (x) => console.log(x)
      )
      return Promise.resolve()
    }

/*
  public async getEjemplos(): Promise<any> {
    const snapshot = await this.FireDAO.collection('test');
    return snapshot.listDocuments()
      .then(documentRefs => {
        return this.FireDAO.getAll(...documentRefs);
      }).then(documentSnapshots => {
        return documentSnapshots.map((doc) => doc.data());
      });
  }

  public getEjemplo(id: string): any {
    return this.FireDAO.collection('test')
      .doc(id)
      .get()
      .then((doc) => doc.data());
  }

  public postEjemplo(unEjemplo : Ejemplo): Promise<string> {
    return this.FireDAO.collection('test')
      .add(unEjemplo)
      .then((doc) => doc.id);
  }

  public updateEjemplo(id: string): string {
    return `WORK IN PROGRESS: ${id}`;
  }

  public deleteEjemplo(): string {
    return 'Not nice.';
  }
  */
}
