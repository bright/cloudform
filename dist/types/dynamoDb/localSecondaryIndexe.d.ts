import { ResourceBase } from '../resource';
import { Value } from '../internal';
import KeySchema from './keySchema';
import Projection from './projection';
export interface LocalSecondaryIndexeProperties {
    IndexName: Value<string>;
    KeySchema: KeySchema[];
    Projection: Projection;
}
export default class LocalSecondaryIndexe extends ResourceBase {
    constructor(properties: LocalSecondaryIndexeProperties, dependsOn?: Value<string>);
}
