import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ActionParams {
    UpdateDeviceCertificateParams?: UpdateDeviceCertificateParams;
    AddThingsToThingGroupParams?: AddThingsToThingGroupParams;
    PublishFindingToSnsParams?: PublishFindingToSnsParams;
    EnableIoTLoggingParams?: EnableIoTLoggingParams;
    ReplaceDefaultPolicyVersionParams?: ReplaceDefaultPolicyVersionParams;
    UpdateCACertificateParams?: UpdateCACertificateParams;
    constructor(properties: ActionParams);
}
export declare class AddThingsToThingGroupParams {
    OverrideDynamicGroups?: Value<boolean>;
    ThingGroupNames: List<Value<string>>;
    constructor(properties: AddThingsToThingGroupParams);
}
export declare class EnableIoTLoggingParams {
    RoleArnForLogging: Value<string>;
    LogLevel: Value<string>;
    constructor(properties: EnableIoTLoggingParams);
}
export declare class PublishFindingToSnsParams {
    TopicArn: Value<string>;
    constructor(properties: PublishFindingToSnsParams);
}
export declare class ReplaceDefaultPolicyVersionParams {
    TemplateName: Value<string>;
    constructor(properties: ReplaceDefaultPolicyVersionParams);
}
export declare class UpdateCACertificateParams {
    Action: Value<string>;
    constructor(properties: UpdateCACertificateParams);
}
export declare class UpdateDeviceCertificateParams {
    Action: Value<string>;
    constructor(properties: UpdateDeviceCertificateParams);
}
export interface MitigationActionProperties {
    ActionName?: Value<string>;
    ActionParams: ActionParams;
    RoleArn: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class MitigationAction extends ResourceBase<MitigationActionProperties> {
    static ActionParams: typeof ActionParams;
    static AddThingsToThingGroupParams: typeof AddThingsToThingGroupParams;
    static EnableIoTLoggingParams: typeof EnableIoTLoggingParams;
    static PublishFindingToSnsParams: typeof PublishFindingToSnsParams;
    static ReplaceDefaultPolicyVersionParams: typeof ReplaceDefaultPolicyVersionParams;
    static UpdateCACertificateParams: typeof UpdateCACertificateParams;
    static UpdateDeviceCertificateParams: typeof UpdateDeviceCertificateParams;
    constructor(properties: MitigationActionProperties);
}
