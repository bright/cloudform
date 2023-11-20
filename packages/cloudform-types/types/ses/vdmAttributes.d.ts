import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class DashboardAttributes {
    EngagementMetrics?: Value<string>;
    constructor(properties: DashboardAttributes);
}
export declare class GuardianAttributes {
    OptimizedSharedDelivery?: Value<string>;
    constructor(properties: GuardianAttributes);
}
export interface VdmAttributesProperties {
    DashboardAttributes?: DashboardAttributes;
    GuardianAttributes?: GuardianAttributes;
}
export default class VdmAttributes extends ResourceBase<VdmAttributesProperties> {
    static DashboardAttributes: typeof DashboardAttributes;
    static GuardianAttributes: typeof GuardianAttributes;
    constructor(properties?: VdmAttributesProperties);
}
