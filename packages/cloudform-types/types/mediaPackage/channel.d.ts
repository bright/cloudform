import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class HlsIngest {
    ingestEndpoints?: List<IngestEndpoint>;
    constructor(properties: HlsIngest);
}
export declare class IngestEndpoint {
    Username: Value<string>;
    Id: Value<string>;
    Url: Value<string>;
    Password: Value<string>;
    constructor(properties: IngestEndpoint);
}
export declare class LogConfiguration {
    LogGroupName?: Value<string>;
    constructor(properties: LogConfiguration);
}
export interface ChannelProperties {
    Description?: Value<string>;
    IngressAccessLogs?: LogConfiguration;
    HlsIngest?: HlsIngest;
    Id: Value<string>;
    EgressAccessLogs?: LogConfiguration;
    Tags?: List<ResourceTag>;
}
export default class Channel extends ResourceBase<ChannelProperties> {
    static HlsIngest: typeof HlsIngest;
    static IngestEndpoint: typeof IngestEndpoint;
    static LogConfiguration: typeof LogConfiguration;
    constructor(properties: ChannelProperties);
}
