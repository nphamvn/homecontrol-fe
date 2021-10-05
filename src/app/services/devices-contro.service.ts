import { Injectable } from '@angular/core';
import { Light } from '../Light';

@Injectable({
  providedIn: 'root'
})
export class DevicesControService {

  constructor() { }

  getState(): Light {
    return {
      mode: 'ON',
      brightness: 5
    };
  }
  turnOnLight(): Light {
    console.log(this.turnOnLight);
    return {
      mode: 'ON',
      brightness: 5
    };
  }

  turnOffLight(): Light {
    console.log(this.turnOffLight);
    return {
      mode: 'ON',
      brightness: 5
    };
  }
  brightenLight(): Light {
    console.log(this.brightenLight);
    return {
      mode: 'ON',
      brightness: 5
    };
  }
  dimLight(): Light {
    console.log(this.dimLight);
    return {
      mode: 'ON',
      brightness: 5
    };
  }
}
