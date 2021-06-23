import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface AlertProperties {
    AlertName?: Value<string>;
    AlertDescription?: Value<string>;
    AnomalyDetectorArn: Value<string>;
    AlertSensitivityThreshold: Value<number>;
    Action: {
        [key: string]: any;
    };
}
export default class Alert extends ResourceBase<AlertProperties> {
    constructor(properties: AlertProperties);
}
