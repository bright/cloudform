import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ServerConfiguration {
    ServerHostname: Value<string>;
    ServerPort?: Value<number>;
    constructor(properties: ServerConfiguration);
}
export declare class ServerCredentials {
    Username: Value<string>;
    Password: Value<string>;
    constructor(properties: ServerCredentials);
}
export interface StorageSystemProperties {
    ServerCredentials?: ServerCredentials;
    ServerConfiguration: ServerConfiguration;
    CloudWatchLogGroupArn?: Value<string>;
    SystemType: Value<string>;
    AgentArns: List<Value<string>>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class StorageSystem extends ResourceBase<StorageSystemProperties> {
    static ServerConfiguration: typeof ServerConfiguration;
    static ServerCredentials: typeof ServerCredentials;
    constructor(properties: StorageSystemProperties);
}
