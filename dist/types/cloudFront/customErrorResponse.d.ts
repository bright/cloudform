import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface CustomErrorResponseProperties {
    ErrorCachingMinTTL?: Value<number>;
    ErrorCode: Value<number>;
    ResponseCode?: Value<number>;
    ResponsePagePath?: Value<string>;
}
export default class CustomErrorResponse extends ResourceBase {
    constructor(properties: CustomErrorResponseProperties, dependsOn?: Value<string>);
}
