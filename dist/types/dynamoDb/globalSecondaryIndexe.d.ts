import { ResourceBase } from '../resource';
import { Value } from '../internal';
import KeySchema from './keySchema';
import Projection from './projection';
import ProvisionedThroughput from './provisionedThroughput';
import StreamSpecification from './streamSpecification';
export interface GlobalSecondaryIndexeProperties {
    IndexName: Value<string>;
    KeySchema: KeySchema[];
    Projection: Projection;
    ProvisionedThroughput: ProvisionedThroughput;
    StreamSpecification?: StreamSpecification;
}
export default class GlobalSecondaryIndexe extends ResourceBase {
    constructor(properties: GlobalSecondaryIndexeProperties, dependsOn?: Value<string>);
}
