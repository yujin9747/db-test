import { Column } from 'typeorm';

export class Temperature {
  @Column({ name: 'currentTemperature', type: 'float' })
  currentTemperature: number;

  @Column({ name: 'settingTemperature', type: 'float' })
  settingTemperature: number;
}
