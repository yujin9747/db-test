import { Column } from 'typeorm';

export class ChannelWattHour {
  @Column({ name: '1', type: 'float' })
  wattHour1: number;

  @Column({ name: '2', type: 'float' })
  wattHour2: number;

  @Column({ name: '3', type: 'float' })
  wattHour3: number;
}
