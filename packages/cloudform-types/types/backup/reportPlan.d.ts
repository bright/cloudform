import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ReportDeliveryChannel {
    S3KeyPrefix?: Value<string>;
    Formats?: List<Value<string>>;
    S3BucketName: Value<string>;
    constructor(properties: ReportDeliveryChannel);
}
export declare class ReportSetting {
    FrameworkArns?: List<Value<string>>;
    ReportTemplate: Value<string>;
    OrganizationUnits?: List<Value<string>>;
    Regions?: List<Value<string>>;
    Accounts?: List<Value<string>>;
    constructor(properties: ReportSetting);
}
export interface ReportPlanProperties {
    ReportSetting: ReportSetting;
    ReportPlanDescription?: Value<string>;
    ReportPlanName?: Value<string>;
    ReportDeliveryChannel: ReportDeliveryChannel;
    ReportPlanTags?: List<ResourceTag>;
}
export default class ReportPlan extends ResourceBase<ReportPlanProperties> {
    static ReportDeliveryChannel: typeof ReportDeliveryChannel;
    static ReportSetting: typeof ReportSetting;
    constructor(properties: ReportPlanProperties);
}
