import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class S3Location {
    Bucket?: Value<string>;
    ETag?: Value<string>;
    Key?: Value<string>;
    Version?: Value<string>;
    constructor(properties: S3Location);
}
export declare class EndpointConfiguration {
    Types?: List<Value<string>>;
    constructor(properties: EndpointConfiguration);
}
export interface RestApiProperties {
    BinaryMediaTypes?: List<Value<string>>;
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
    constructor(properties: RestApiProperties);
}
