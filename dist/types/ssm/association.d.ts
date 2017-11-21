import { ResourceBase } from '../resource';
import { Value } from '../internal';
import Target from './target';
export interface AssociationProperties {
    DocumentVersion?: Value<string>;
    InstanceId?: Value<string>;
    Name: Value<string>;
    Parameters?: any;
    ScheduleExpression?: Value<string>;
    Targets?: Target[];
}
export default class Association extends ResourceBase {
    constructor(properties: AssociationProperties, dependsOn?: Value<string>);
}
