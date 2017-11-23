import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface S3LocationProperties {
    Bucket?: Value<string>;
    ETag?: Value<string>;
    Key?: Value<string>;
    Version?: Value<string>;
}
export declare class S3Location extends ResourceBase {
    constructor(properties: S3LocationProperties, dependsOn?: Value<string>);
}
export interface EndpointConfigurationProperties {
    Types?: Value<string>[];
}
export declare class EndpointConfiguration extends ResourceBase {
    constructor(properties: EndpointConfigurationProperties, dependsOn?: Value<string>);
}
export interface RestApiProperties {
    BinaryMediaTypes?: Value<string>[];
    Body?: any;
    BodyS3Location?: S3Location;
    CloneFrom?: Value<string>;
    Description?: Value<string>;
    EndpointConfiguration?: EndpointConfiguration;
    FailOnWarnings?: Value<boolean>;
    Mode?: Value<string>;
    Name?: Value<string>;
    Parameters?: {
        [key: string]: Value<string>;
    };
}
export default class RestApi extends ResourceBase {
    constructor(properties: RestApiProperties, dependsOn?: Value<string>);
}
