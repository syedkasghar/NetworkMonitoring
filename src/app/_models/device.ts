import { DeviceType } from './device';

export class Device {
  id: number;
  name: string;
  ipAddress: string;
  isActive: boolean;
  deviceType: DeviceType;
}
