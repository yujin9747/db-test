import { Column } from 'typeorm'

export class ChannelWattHour {
  @Column({
    name: '1',
    type: 'float',
    nullable: true
  })
    wattHour1: number

  @Column({
    name: '2',
    type: 'float',
    nullable: true
  })
    wattHour2: number

  @Column({
    name: '3',
    type: 'float',
    nullable: true
  })
    wattHour3: number
}
