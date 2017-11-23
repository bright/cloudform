import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface RepositoryTriggerProperties {
    Events?: List<Value<string>>;
    Branches?: List<Value<string>>;
    CustomData?: Value<string>;
    DestinationArn?: Value<string>;
    Name?: Value<string>;
}
export declare class RepositoryTrigger extends ResourceBase {
    constructor(properties: RepositoryTriggerProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface RepositoryProperties {
    RepositoryName: Value<string>;
    Triggers?: List<RepositoryTrigger>;
    RepositoryDescription?: Value<string>;
}
export default class Repository extends ResourceBase {
    constructor(properties: RepositoryProperties, dependsOn?: Value<string> | Value<string>[]);
}
