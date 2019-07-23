import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ApiProperties {
    RouteSelectionExpression: Value<string>;
    Description?: Value<string>;
    Version?: Value<string>;
    ProtocolType: Value<string>;
    DisableSchemaValidation?: Value<boolean>;
    Tags?: {
        [key: string]: any;
    };
    Name: Value<string>;
    ApiKeySelectionExpression?: Value<string>;
}
export default class Api extends ResourceBase<ApiProperties> {
    constructor(properties: ApiProperties);
}
