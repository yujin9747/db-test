import { Column } from 'typeorm';

export class Temperature {
  @Column({ name: 'currentTemperature' })
  currentTemperature: number;

  @Column({ name: 'settingTemperature' })
  settingTemperature: number;
}
