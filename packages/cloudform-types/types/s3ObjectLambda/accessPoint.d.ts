import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Alias {
    Status?: Value<string>;
    Value: Value<string>;
    constructor(properties: Alias);
}
export declare class AwsLambda {
    FunctionArn: Value<string>;
    FunctionPayload?: Value<string>;
    constructor(properties: AwsLambda);
}
export declare class ContentTransformation {
    AwsLambda: AwsLambda;
    constructor(properties: ContentTransformation);
}
export declare class ObjectLambdaConfiguration {
    SupportingAccessPoint: Value<string>;
    TransformationConfigurations: List<TransformationConfiguration>;
    AllowedFeatures?: List<Value<string>>;
    CloudWatchMetricsEnabled?: Value<boolean>;
    constructor(properties: ObjectLambdaConfiguration);
}
export declare class PublicAccessBlockConfiguration {
    RestrictPublicBuckets?: Value<boolean>;
    BlockPublicPolicy?: Value<boolean>;
    BlockPublicAcls?: Value<boolean>;
    IgnorePublicAcls?: Value<boolean>;
    constructor(properties: PublicAccessBlockConfiguration);
}
export declare class TransformationConfiguration {
    Actions: List<Value<string>>;
    ContentTransformation: ContentTransformation;
    constructor(properties: TransformationConfiguration);
}
export interface AccessPointProperties {
    ObjectLambdaConfiguration: ObjectLambdaConfiguration;
    Name?: Value<string>;
}
export default class AccessPoint extends ResourceBase<AccessPointProperties> {
    static Alias: typeof Alias;
    static AwsLambda: typeof AwsLambda;
    static ContentTransformation: typeof ContentTransformation;
    static ObjectLambdaConfiguration: typeof ObjectLambdaConfiguration;
    static PublicAccessBlockConfiguration: typeof PublicAccessBlockConfiguration;
    static TransformationConfiguration: typeof TransformationConfiguration;
    constructor(properties: AccessPointProperties);
}
