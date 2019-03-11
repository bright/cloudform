import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ApiProperties {
    RouteSelectionExpression: Value<string>;
    Description?: Value<string>;
    Version?: Value<string>;
    ProtocolType: Value<string>;
    DisableSchemaValidation?: Value<boolean>;
    Name: Value<string>;
    ApiKeySelectionExpression?: Value<string>;
}
export default class Api extends ResourceBase {
    constructor(properties?: ApiProperties);
}
