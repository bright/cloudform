import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class GatewayCapabilitySummary {
    CapabilityNamespace: Value<string>;
    CapabilityConfiguration?: Value<string>;
    constructor(properties: GatewayCapabilitySummary);
}
export declare class GatewayPlatform {
    GreengrassV2?: GreengrassV2;
    Greengrass?: Greengrass;
    constructor(properties: GatewayPlatform);
}
export declare class Greengrass {
    GroupArn: Value<string>;
    constructor(properties: Greengrass);
}
export declare class GreengrassV2 {
    CoreDeviceThingName: Value<string>;
    constructor(properties: GreengrassV2);
}
export interface GatewayProperties {
    GatewayCapabilitySummaries?: List<GatewayCapabilitySummary>;
    GatewayName: Value<string>;
    GatewayPlatform: GatewayPlatform;
    Tags?: List<ResourceTag>;
}
export default class Gateway extends ResourceBase<GatewayProperties> {
    static GatewayCapabilitySummary: typeof GatewayCapabilitySummary;
    static GatewayPlatform: typeof GatewayPlatform;
    static Greengrass: typeof Greengrass;
    static GreengrassV2: typeof GreengrassV2;
    constructor(properties: GatewayProperties);
}
