import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface GatewayResponseProperties {
    ResponseTemplates?: {
        [key: string]: Value<string>;
    };
    ResponseParameters?: {
        [key: string]: Value<string>;
    };
    RestApiId: Value<string>;
    StatusCode?: Value<string>;
    ResponseType: Value<string>;
}
export default class GatewayResponse extends ResourceBase<GatewayResponseProperties> {
    constructor(properties: GatewayResponseProperties);
}
