import { ResourceBase } from '../resource';
import { Value } from '../internal';
import PrimaryKey from './primaryKey';
import ProvisionedThroughput from './provisionedThroughput';
export interface SimpleTableProperties {
    PrimaryKey?: PrimaryKey;
    ProvisionedThroughput?: ProvisionedThroughput;
}
export default class SimpleTable extends ResourceBase {
    constructor(properties: SimpleTableProperties, dependsOn?: Value<string>);
}
