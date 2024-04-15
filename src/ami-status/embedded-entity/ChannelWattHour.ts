import { Column } from 'typeorm';

export class ChannelWattHour {
  @Column()
  wattHour1: number;

  @Column()
  wattHour2: number;

  @Column()
  wattHour3: number;
}
