import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class TagsEntry {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: TagsEntry);
}
export interface StateMachineProperties {
    DefinitionString: Value<string>;
    StateMachineName?: Value<string>;
    RoleArn: Value<string>;
    Tags?: List<TagsEntry>;
}
export default class StateMachine extends ResourceBase<StateMachineProperties> {
    static TagsEntry: typeof TagsEntry;
    constructor(properties: StateMachineProperties);
}
