import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LogConfiguration {
    LogGroupName?: Value<string>;
    constructor(properties: LogConfiguration);
}
export interface ChannelProperties {
    Id: Value<string>;
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
    EgressAccessLogs?: LogConfiguration;
    IngressAccessLogs?: LogConfiguration;
}
export default class Channel extends ResourceBase<ChannelProperties> {
    static LogConfiguration: typeof LogConfiguration;
    constructor(properties: ChannelProperties);
}
