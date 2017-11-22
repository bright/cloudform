import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface CustomResourceProperties {
    ServiceToken: Value<string>;
}
export default class CustomResource extends ResourceBase {
    constructor(properties: CustomResourceProperties, dependsOn?: Value<string>);
}
