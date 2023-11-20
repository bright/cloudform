import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class Action {
    LambdaConfiguration?: LambdaConfiguration;
    SNSConfiguration?: SNSConfiguration;
    constructor(properties: Action);
}
export declare class LambdaConfiguration {
    LambdaArn: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: LambdaConfiguration);
}
export declare class SNSConfiguration {
    SnsTopicArn: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: SNSConfiguration);
}
export interface AlertProperties {
    AlertDescription?: Value<string>;
    Action: Action;
    AlertName?: Value<string>;
    AlertSensitivityThreshold: Value<number>;
    AnomalyDetectorArn: Value<string>;
}
export default class Alert extends ResourceBase<AlertProperties> {
    static Action: typeof Action;
    static LambdaConfiguration: typeof LambdaConfiguration;
    static SNSConfiguration: typeof SNSConfiguration;
    constructor(properties: AlertProperties);
}
