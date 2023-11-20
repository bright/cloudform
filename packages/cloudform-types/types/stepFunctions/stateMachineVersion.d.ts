import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface StateMachineVersionProperties {
    Description?: Value<string>;
    StateMachineRevisionId?: Value<string>;
    StateMachineArn: Value<string>;
}
export default class StateMachineVersion extends ResourceBase<StateMachineVersionProperties> {
    constructor(properties: StateMachineVersionProperties);
}
