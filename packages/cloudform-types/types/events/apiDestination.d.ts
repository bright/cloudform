import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ApiDestinationProperties {
    Name?: Value<string>;
    Description?: Value<string>;
    ConnectionArn: Value<string>;
    InvocationRateLimitPerSecond?: Value<number>;
    InvocationEndpoint: Value<string>;
    HttpMethod: Value<string>;
}
export default class ApiDestination extends ResourceBase<ApiDestinationProperties> {
    constructor(properties: ApiDestinationProperties);
}
