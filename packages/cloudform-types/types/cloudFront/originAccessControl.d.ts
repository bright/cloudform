import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class OriginAccessControlConfig {
    SigningBehavior: Value<string>;
    Description?: Value<string>;
    OriginAccessControlOriginType: Value<string>;
    SigningProtocol: Value<string>;
    Name: Value<string>;
    constructor(properties: OriginAccessControlConfig);
}
export interface OriginAccessControlProperties {
    OriginAccessControlConfig: OriginAccessControlConfig;
}
export default class OriginAccessControl extends ResourceBase<OriginAccessControlProperties> {
    static OriginAccessControlConfig: typeof OriginAccessControlConfig;
    constructor(properties: OriginAccessControlProperties);
}
