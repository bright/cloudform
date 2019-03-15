import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface GroupVersionProperties {
    LoggerDefinitionVersionArn?: Value<string>;
    DeviceDefinitionVersionArn?: Value<string>;
    FunctionDefinitionVersionArn?: Value<string>;
    CoreDefinitionVersionArn?: Value<string>;
    ResourceDefinitionVersionArn?: Value<string>;
    ConnectorDefinitionVersionArn?: Value<string>;
    SubscriptionDefinitionVersionArn?: Value<string>;
    GroupId: Value<string>;
}
export default class GroupVersion extends ResourceBase<GroupVersionProperties> {
    constructor(properties: GroupVersionProperties);
}
