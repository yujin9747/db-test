import { Column } from 'typeorm';

export class Temperature {
  @Column({
    name: 'currentTemperature',
    type: 'int',
    nullable: true,
  })
  currentTemperature: number;

  @Column({
    name: 'settingTemperature',
    type: 'int',
    nullable: true,
  })
  settingTemperature: number;
}
