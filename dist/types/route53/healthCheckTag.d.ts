import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface HealthCheckTagProperties {
    Key: Value<string>;
    Value: Value<string>;
}
export default class HealthCheckTag extends ResourceBase {
    constructor(properties: HealthCheckTagProperties, dependsOn?: Value<string>);
}
