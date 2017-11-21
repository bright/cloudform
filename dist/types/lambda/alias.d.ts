import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface AliasProperties {
    Description?: Value<string>;
    FunctionName: Value<string>;
    FunctionVersion: Value<string>;
    Name: Value<string>;
}
export default class Alias extends ResourceBase {
    constructor(properties: AliasProperties, dependsOn?: Value<string>);
}
