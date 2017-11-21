import { ResourceBase } from '../resource';
import { Value } from '../internal';
import AttributeDefinition from './attributeDefinition';
import GlobalSecondaryIndexe from './globalSecondaryIndexe';
import KeySchema from './keySchema';
import LocalSecondaryIndexe from './localSecondaryIndexe';
import ProvisionedThroughput from './provisionedThroughput';
import StreamSpecification from './streamSpecification';
export interface TableProperties {
    AttributeDefinitions: AttributeDefinition[];
    GlobalSecondaryIndexes?: GlobalSecondaryIndexe[];
    KeySchema: KeySchema[];
    LocalSecondaryIndexes?: LocalSecondaryIndexe[];
    ProvisionedThroughput: ProvisionedThroughput;
    StreamSpecification?: StreamSpecification;
    TableName?: Value<string>;
}
export default class Table extends ResourceBase {
    constructor(properties: TableProperties, dependsOn?: Value<string>);
}
