import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ChannelTargetInfo {
    RetryIntervalInMinutes: Value<number>;
    ChannelId: Value<string>;
    constructor(properties: ChannelTargetInfo);
}
export declare class ContactTargetInfo {
    ContactId: Value<string>;
    IsEssential: Value<boolean>;
    constructor(properties: ContactTargetInfo);
}
export declare class Stage {
    DurationInMinutes?: Value<number>;
    RotationIds?: List<Value<string>>;
    Targets?: List<Targets>;
    constructor(properties: Stage);
}
export declare class Targets {
    ChannelTargetInfo?: ChannelTargetInfo;
    ContactTargetInfo?: ContactTargetInfo;
    constructor(properties: Targets);
}
export interface ContactProperties {
    Type: Value<string>;
    Alias: Value<string>;
    DisplayName: Value<string>;
    Plan?: List<Stage>;
}
export default class Contact extends ResourceBase<ContactProperties> {
    static ChannelTargetInfo: typeof ChannelTargetInfo;
    static ContactTargetInfo: typeof ContactTargetInfo;
    static Stage: typeof Stage;
    static Targets: typeof Targets;
    constructor(properties: ContactProperties);
}
