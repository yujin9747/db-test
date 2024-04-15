import { Column } from 'typeorm';

export class Temperature {
  @Column()
  currentTemperature: number;

  @Column()
  settingTemperature: number;
}
