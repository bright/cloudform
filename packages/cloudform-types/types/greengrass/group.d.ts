import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class GroupVersion {
    LoggerDefinitionVersionArn?: Value<string>;
    DeviceDefinitionVersionArn?: Value<string>;
    FunctionDefinitionVersionArn?: Value<string>;
    CoreDefinitionVersionArn?: Value<string>;
    ResourceDefinitionVersionArn?: Value<string>;
    ConnectorDefinitionVersionArn?: Value<string>;
    SubscriptionDefinitionVersionArn?: Value<string>;
    constructor(properties: GroupVersion);
}
export interface GroupProperties {
    InitialVersion?: GroupVersion;
    RoleArn?: Value<string>;
    Name: Value<string>;
}
export default class Group extends ResourceBase<GroupProperties> {
    static GroupVersion: typeof GroupVersion;
    constructor(properties: GroupProperties);
}
