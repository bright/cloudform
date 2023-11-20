import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class EndpointConfiguration {
    Types?: List<Value<string>>;
    VpcEndpointIds?: List<Value<string>>;
    constructor(properties: EndpointConfiguration);
}
export declare class S3Location {
    Bucket?: Value<string>;
    ETag?: Value<string>;
    Version?: Value<string>;
    Key?: Value<string>;
    constructor(properties: S3Location);
}
export interface RestApiProperties {
    Policy?: {
        [key: string]: any;
    };
    BodyS3Location?: S3Location;
    Description?: Value<string>;
    MinimumCompressionSize?: Value<number>;
    Parameters?: {
        [key: string]: Value<string>;
    };
    CloneFrom?: Value<string>;
    Mode?: Value<string>;
    DisableExecuteApiEndpoint?: Value<boolean>;
    FailOnWarnings?: Value<boolean>;
    BinaryMediaTypes?: List<Value<string>>;
    Name?: Value<string>;
    ApiKeySourceType?: Value<string>;
    EndpointConfiguration?: EndpointConfiguration;
    Body?: {
        [key: string]: any;
    };
    Tags?: List<ResourceTag>;
}
export default class RestApi extends ResourceBase<RestApiProperties> {
    static EndpointConfiguration: typeof EndpointConfiguration;
    static S3Location: typeof S3Location;
    constructor(properties?: RestApiProperties);
}
