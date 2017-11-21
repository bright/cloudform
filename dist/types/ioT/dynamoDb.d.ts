import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface DynamoDBProperties {
    HashKeyField: Value<string>;
    HashKeyValue: Value<string>;
    PayloadField?: Value<string>;
    RangeKeyField: Value<string>;
    RangeKeyValue: Value<string>;
    RoleArn: Value<string>;
    TableName: Value<string>;
}
export default class DynamoDB extends ResourceBase {
    constructor(properties: DynamoDBProperties, dependsOn?: Value<string>);
}
