import { Body, Controller, Post } from '@nestjs/common';
import { AirconDeviceStatusService } from '../infra/AirconDeviceStatus.service';
import { CreateAirconDeviceStatusDto } from './dto/CreateAirconDeviceStatus.dto';

@Controller('aircon_device_status')
export class AirconDeviceStatusController {
  constructor(private service: AirconDeviceStatusService) {}

  @Post()
  async createAirconDeviceStatus(@Body() body: CreateAirconDeviceStatusDto) {
    return this.service.create(body);
  }
}
