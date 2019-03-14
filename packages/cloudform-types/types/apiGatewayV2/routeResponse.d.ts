import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class ParameterConstraints {
    Required: Value<boolean>;
    constructor(properties: ParameterConstraints);
}
export interface RouteResponseProperties {
    RouteResponseKey: Value<string>;
    ResponseParameters?: {
        [key: string]: any;
    };
    RouteId: Value<string>;
    ModelSelectionExpression?: Value<string>;
    ApiId: Value<string>;
    ResponseModels?: {
        [key: string]: any;
    };
}
export default class RouteResponse extends ResourceBase<RouteResponseProperties> {
    static ParameterConstraints: typeof ParameterConstraints;
    constructor(properties: RouteResponseProperties);
}
