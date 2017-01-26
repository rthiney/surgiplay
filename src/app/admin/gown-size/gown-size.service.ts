import { GownSize } from './../../models/gown-size';
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class GownSizeService {
 private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'api/gownsizes';  // URL to web api
  constructor(private http: Http) { }
  getAll(): Promise<GownSize[]> {
    return this.http.get(this.url)
               .toPromise()
               .then(response => response.json().data as GownSize[])
               .catch(this.handleError);
               
  }
  get(id: number): Promise<GownSize> {
    const url = `${this.url}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as GownSize)
      .catch(this.handleError);
  }
  delete(id: number): Promise<void> {
       console.log('delete' + id);
    const url = `${this.url}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  create(name: string): Promise<GownSize> {
    console.log('create' + name);
    return this.http
      .post(this.url, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
  update(hero: GownSize): Promise<GownSize> {
      console.log('heroserv', hero);
    const url = `${this.url}/${hero.id}`;
    console.log('url', url);
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}