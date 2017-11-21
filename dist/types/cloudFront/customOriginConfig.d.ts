import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type OriginProtocolPolicy = "http-only" | "match-viewer" | "*";
export interface CustomOriginConfigProperties {
    HTTPPort?: Value<string>;
    HTTPSPort?: Value<string>;
    OriginProtocolPolicy: Value<OriginProtocolPolicy>;
    OriginSSLProtocols?: Value<string>[];
}
export default class CustomOriginConfig extends ResourceBase {
    constructor(properties: CustomOriginConfigProperties, dependsOn?: Value<string>);
}
