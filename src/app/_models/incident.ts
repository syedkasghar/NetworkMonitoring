import { IncidentStatus } from './incidentStatus';

export class Incident {
  id: number;
  deviceId: number;
  deviceName: string;
  errorCodeId: number;
  errorCode: string;
  startTime: string;
  endTime: boolean;
  incidentStatus: IncidentStatus;
}
