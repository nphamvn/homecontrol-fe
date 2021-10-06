import { Component, OnInit } from '@angular/core';
import { DevicesControService } from '../services/devices-contro.service';
import { Light } from '../Light';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent implements OnInit {

  light: Light = {
    mode: 'Unknown',
    brightness: -1
  }

  constructor(private lightService: DevicesControService) { }

  ngOnInit(): void {
    this.getState();
  }

  getState() {
    this.light = this.lightService.getState();
  }

  turnOn() {
    console.log('Turn on light');
    this.light = this.lightService.turnOnLight();
  }

  turnOff() {
    this.light = this.lightService.turnOffLight();
  }

  brightenUp() {
    this.light = this.lightService.brightenLight();
  }

  dimDown() {
    this.light = this.lightService.dimLight();
  }
}
