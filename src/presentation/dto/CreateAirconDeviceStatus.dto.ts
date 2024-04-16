import { AirconMode } from '../../shemas/aircon-device-status/enum/AirconMode';
import { FanSpeed } from '../../shemas/aircon-device-status/enum/FanSpeed';
import { Power } from '../../shemas/aircon-device-status/enum/Power';

export class CreateAirconDeviceStatusDto {
  readerDeviceId: string;
  irDeviceId: string;
  mode: AirconMode;
  fanSpeed: FanSpeed;
  power: Power;
  currentTemperature: number;
  settingTemperature: number;
}
