import { Column } from 'typeorm'

export class ChannelName {
  @Column({
    name: '1',
    type: 'varchar',
    length: 25,
    nullable: false
  })
    name1: string

  @Column({
    name: '2',
    type: 'varchar',
    length: 25,
    nullable: true
  })
    name2: string

  @Column({
    name: '3',
    type: 'varchar',
    length: 25,
    nullable: true
  })
    name3: string
}
