import { Component, OnInit } from '@angular/core';
import { DevicesControService } from '../../services/devices-control/devices-contro.service';
import { AirConditioner, Environment, Light } from '../../Light';
import { stat } from 'fs';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent implements OnInit {

  env: Environment = {
    temperature: 0,
    humidity: 0
  }

  light: Light = {
    mode: 'Unknown',
    brightness: -1
  }

  aircon: AirConditioner = {
    mode: 'Unknown',
    temperature: -1
  }

  // = new EventEmitter<Light>();

  constructor(private lightService: DevicesControService) {
    lightService.environmentSensorDataChanged$.subscribe(sensor => {
      this.env = sensor;
    })
    lightService.lightStateChanged$.subscribe(light => {
      this.light = light;
    })
  }

  onEnvironmentSensorDataChanged(env: Environment) {
    this.env = env
  }

  onLightStatedChanged(light: Light) {
    this.light = light
  }

  onAirConditionerStatedChanged(light: Light) {
    this.light = light
  }

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
