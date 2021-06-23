import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ContactTargetInfo {
    ContactId: Value<string>;
    IsEssential: Value<boolean>;
    constructor(properties: ContactTargetInfo);
}
export declare class Targets {
    ContactTargetInfo?: ContactTargetInfo;
    ChannelTargetInfo?: ChannelTargetInfo;
    constructor(properties: Targets);
}
export declare class ChannelTargetInfo {
    ChannelId: Value<string>;
    RetryIntervalInMinutes: Value<number>;
    constructor(properties: ChannelTargetInfo);
}
export declare class Stage {
    DurationInMinutes: Value<number>;
    Targets?: List<Targets>;
    constructor(properties: Stage);
}
export interface ContactProperties {
    Alias: Value<string>;
    DisplayName: Value<string>;
    Type: Value<string>;
    Plan: List<Stage>;
}
export default class Contact extends ResourceBase<ContactProperties> {
    static ContactTargetInfo: typeof ContactTargetInfo;
    static Targets: typeof Targets;
    static ChannelTargetInfo: typeof ChannelTargetInfo;
    static Stage: typeof Stage;
    constructor(properties: ContactProperties);
}
