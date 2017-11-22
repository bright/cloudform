import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface SubnetGroupProperties {
    Description?: Value<string>;
    SubnetGroupName?: Value<string>;
    SubnetIds: Value<string>[];
}
export default class SubnetGroup extends ResourceBase {
    constructor(properties: SubnetGroupProperties, dependsOn?: Value<string>);
}
