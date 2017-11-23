import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface RepositoryTriggerProperties {
    Events?: Value<string>[];
    Branches?: Value<string>[];
    CustomData?: Value<string>;
    DestinationArn?: Value<string>;
    Name?: Value<string>;
}
export declare class RepositoryTrigger extends ResourceBase {
    constructor(properties: RepositoryTriggerProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface RepositoryProperties {
    RepositoryName: Value<string>;
    Triggers?: RepositoryTrigger[];
    RepositoryDescription?: Value<string>;
}
export default class Repository extends ResourceBase {
    constructor(properties: RepositoryProperties, dependsOn?: Value<string> | Value<string>[]);
}
