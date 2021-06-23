import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AddThingsToThingGroupParams {
    OverrideDynamicGroups?: Value<boolean>;
    ThingGroupNames: List<Value<string>>;
    constructor(properties: AddThingsToThingGroupParams);
}
export declare class UpdateCACertificateParams {
    Action: Value<string>;
    constructor(properties: UpdateCACertificateParams);
}
export declare class UpdateDeviceCertificateParams {
    Action: Value<string>;
    constructor(properties: UpdateDeviceCertificateParams);
}
export declare class ReplaceDefaultPolicyVersionParams {
    TemplateName: Value<string>;
    constructor(properties: ReplaceDefaultPolicyVersionParams);
}
export declare class EnableIoTLoggingParams {
    LogLevel: Value<string>;
    RoleArnForLogging: Value<string>;
    constructor(properties: EnableIoTLoggingParams);
}
export declare class ActionParams {
    AddThingsToThingGroupParams?: AddThingsToThingGroupParams;
    EnableIoTLoggingParams?: EnableIoTLoggingParams;
    PublishFindingToSnsParams?: PublishFindingToSnsParams;
    ReplaceDefaultPolicyVersionParams?: ReplaceDefaultPolicyVersionParams;
    UpdateCACertificateParams?: UpdateCACertificateParams;
    UpdateDeviceCertificateParams?: UpdateDeviceCertificateParams;
    constructor(properties: ActionParams);
}
export declare class PublishFindingToSnsParams {
    TopicArn: Value<string>;
    constructor(properties: PublishFindingToSnsParams);
}
export interface MitigationActionProperties {
    ActionName?: Value<string>;
    RoleArn: Value<string>;
    Tags?: List<ResourceTag>;
    ActionParams: ActionParams;
}
export default class MitigationAction extends ResourceBase<MitigationActionProperties> {
    static AddThingsToThingGroupParams: typeof AddThingsToThingGroupParams;
    static UpdateCACertificateParams: typeof UpdateCACertificateParams;
    static UpdateDeviceCertificateParams: typeof UpdateDeviceCertificateParams;
    static ReplaceDefaultPolicyVersionParams: typeof ReplaceDefaultPolicyVersionParams;
    static EnableIoTLoggingParams: typeof EnableIoTLoggingParams;
    static ActionParams: typeof ActionParams;
    static PublishFindingToSnsParams: typeof PublishFindingToSnsParams;
    constructor(properties: MitigationActionProperties);
}
