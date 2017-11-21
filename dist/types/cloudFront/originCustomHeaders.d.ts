import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface OriginCustomHeadersProperties {
    HeaderName: Value<string>;
    HeaderValue: Value<string>;
}
export default class OriginCustomHeaders extends ResourceBase {
    constructor(properties: OriginCustomHeadersProperties, dependsOn?: Value<string>);
}
