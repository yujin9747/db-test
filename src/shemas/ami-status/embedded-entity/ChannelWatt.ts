import { Column } from 'typeorm';

export class ChannelWatt {
  @Column({
    name: '1',
    type: 'int',
    nullable: true,
  })
  watt1: number;

  @Column({
    name: '2',
    type: 'int',
    nullable: true,
  })
  watt2: number;

  @Column({
    name: '3',
    type: 'int',
    nullable: true,
  })
  watt3: number;
}
