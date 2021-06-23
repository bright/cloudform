import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Greengrass {
    GroupArn: Value<string>;
    constructor(properties: Greengrass);
}
export declare class GatewayCapabilitySummary {
    CapabilityNamespace: Value<string>;
    CapabilityConfiguration?: Value<string>;
    constructor(properties: GatewayCapabilitySummary);
}
export declare class GatewayPlatform {
    Greengrass: Greengrass;
    constructor(properties: GatewayPlatform);
}
export interface GatewayProperties {
    GatewayName: Value<string>;
    GatewayPlatform: GatewayPlatform;
    Tags?: List<ResourceTag>;
    GatewayCapabilitySummaries?: List<GatewayCapabilitySummary>;
}
export default class Gateway extends ResourceBase<GatewayProperties> {
    static Greengrass: typeof Greengrass;
    static GatewayCapabilitySummary: typeof GatewayCapabilitySummary;
    static GatewayPlatform: typeof GatewayPlatform;
    constructor(properties: GatewayProperties);
}
