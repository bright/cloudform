import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface LambdaProperties {
    FunctionArn: Value<string>;
}
export default class Lambda extends ResourceBase {
    constructor(properties: LambdaProperties, dependsOn?: Value<string>);
}
