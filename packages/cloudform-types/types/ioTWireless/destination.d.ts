import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface DestinationProperties {
    Name: Value<string>;
    Expression: Value<string>;
    ExpressionType: Value<string>;
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
    RoleArn: Value<string>;
}
export default class Destination extends ResourceBase<DestinationProperties> {
    constructor(properties: DestinationProperties);
}
