import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OSMService {
  urlTemplate = 'https://tile.openstreetmap.org/level/tileX/tileY.png';
  searchUrl = 'https://nominatim.openstreetmap.org/search?';
  reverseUrl = 'https://nominatim.openstreetmap.org/reverse?';
  lookupUrl = 'https://nominatim.openstreetmap.org/lookup?';

  constructor(private http: HttpClient) { }

  getCordinates(value: any): Observable<any> {
    return this.http.get<any>(`${this.searchUrl}q=${value}`);
  }

  getAddress(lat: any, lon: any) {
    //need to subscribe the value from the http client
    let result = this.http.get<any>(`${this.reverseUrl}lat=${lat}&lon=${lon}&format=json`).subscribe(
      (result)=>{
        console.log(result);
      },
      (error)=>{
        console.error(error);
      }
    );
    return result;
  }

  getResult() {
    const subscription = this.getCordinates("Hyderabad").subscribe(
      (result) => {
        console.log('Coordinates result:', result);
        // Do something with the result
      },
      (error) => {
        console.error('Error fetching coordinates:', error);
      },
      () => {
        console.log('Coordinates request completed');
        subscription.unsubscribe(); // Unsubscribe when done
      }
    );

  //   const addressSubscription = this.getAddress().subscribe(
  //     (result) => {
  //       console.log('Address result:', result);
  //       // Do something with the result
  //     },
  //     (error) => {
  //       console.error('Error fetching address:', error);
  //     },
  //     () => {
  //       console.log('Address request completed');
  //       addressSubscription.unsubscribe(); // Unsubscribe when done
  //     }
  //   );
    }
}
