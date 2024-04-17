import { IsUUID } from 'class-validator'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

import { ChannelName } from './embedded-entity/ChannelName'
import { ChannelWatt } from './embedded-entity/ChannelWatt'
import { ChannelWattHour } from './embedded-entity/ChannelWattHour'
import { AmiMode } from './enum/AmiMode'
import { DateBaseEntity } from '../shared/base/DateBase.entity'

@Entity({ name: 'ami_status' })
export class AmiStatusEntity extends DateBaseEntity {
  @IsUUID(4, { message: 'id is not a valid uuid' })
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column({
    type: 'varchar',
    length: 36,
    nullable: false
  })
    amiId: string

  @Column({
    type: 'int',
    nullable: false,
    default: AmiMode.MODE1
  })
    mode: number

  @Column(() => ChannelName, { prefix: 'channelName1' })
    channelOneName: ChannelName

  @Column(() => ChannelName, { prefix: 'channelName2' })
    channelTwoName: ChannelName

  @Column(() => ChannelWatt, { prefix: 'watt1' })
    channelOneWatt: ChannelWatt

  @Column(() => ChannelWatt, { prefix: 'watt2' })
    channelTwoWatt: ChannelWatt

  @Column(() => ChannelWattHour, { prefix: 'wattHour1' })
    channelOneWattHour: ChannelWattHour

  @Column(() => ChannelWattHour, { prefix: 'wattHour2' })
    channelTwoWattHour: ChannelWattHour
}
