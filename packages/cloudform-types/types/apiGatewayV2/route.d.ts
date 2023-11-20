import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface RouteProperties {
    Target?: Value<string>;
    RouteResponseSelectionExpression?: Value<string>;
    RequestModels?: {
        [key: string]: any;
    };
    OperationName?: Value<string>;
    AuthorizerId?: Value<string>;
    AuthorizationScopes?: List<Value<string>>;
    ApiKeyRequired?: Value<boolean>;
    RouteKey: Value<string>;
    AuthorizationType?: Value<string>;
    ModelSelectionExpression?: Value<string>;
    ApiId: Value<string>;
    RequestParameters?: {
        [key: string]: any;
    };
}
export default class Route extends ResourceBase<RouteProperties> {
    constructor(properties: RouteProperties);
}
