import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ObjectLambdaConfiguration {
    SupportingAccessPoint: Value<string>;
    AllowedFeatures?: List<Value<string>>;
    CloudWatchMetricsEnabled?: Value<boolean>;
    TransformationConfigurations: List<TransformationConfiguration>;
    constructor(properties: ObjectLambdaConfiguration);
}
export declare class TransformationConfiguration {
    Actions?: List<Value<string>>;
    ContentTransformation?: {
        [key: string]: any;
    };
    constructor(properties: TransformationConfiguration);
}
export interface AccessPointProperties {
    Name: Value<string>;
    ObjectLambdaConfiguration?: ObjectLambdaConfiguration;
}
export default class AccessPoint extends ResourceBase<AccessPointProperties> {
    static ObjectLambdaConfiguration: typeof ObjectLambdaConfiguration;
    static TransformationConfiguration: typeof TransformationConfiguration;
    constructor(properties: AccessPointProperties);
}
