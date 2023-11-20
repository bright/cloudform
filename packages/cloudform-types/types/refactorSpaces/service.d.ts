import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LambdaEndpointInput {
    Arn: Value<string>;
    constructor(properties: LambdaEndpointInput);
}
export declare class UrlEndpointInput {
    HealthUrl?: Value<string>;
    Url: Value<string>;
    constructor(properties: UrlEndpointInput);
}
export interface ServiceProperties {
    LambdaEndpoint?: LambdaEndpointInput;
    UrlEndpoint?: UrlEndpointInput;
    Description?: Value<string>;
    EnvironmentIdentifier: Value<string>;
    VpcId?: Value<string>;
    EndpointType: Value<string>;
    ApplicationIdentifier: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Service extends ResourceBase<ServiceProperties> {
    static LambdaEndpointInput: typeof LambdaEndpointInput;
    static UrlEndpointInput: typeof UrlEndpointInput;
    constructor(properties: ServiceProperties);
}
