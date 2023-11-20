import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ApiGatewayProxyInput {
    StageName?: Value<string>;
    EndpointType?: Value<string>;
    constructor(properties: ApiGatewayProxyInput);
}
export interface ApplicationProperties {
    EnvironmentIdentifier: Value<string>;
    VpcId: Value<string>;
    ApiGatewayProxy?: ApiGatewayProxyInput;
    ProxyType: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Application extends ResourceBase<ApplicationProperties> {
    static ApiGatewayProxyInput: typeof ApiGatewayProxyInput;
    constructor(properties: ApplicationProperties);
}
