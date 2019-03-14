import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ParameterConstraints {
    Required: Value<boolean>;
    constructor(properties: ParameterConstraints);
}
export interface RouteProperties {
    Target?: Value<string>;
    RouteResponseSelectionExpression?: Value<string>;
    AuthorizerId?: Value<string>;
    RequestModels?: {
        [key: string]: any;
    };
    OperationName?: Value<string>;
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
    static ParameterConstraints: typeof ParameterConstraints;
    constructor(properties: RouteProperties);
}
