import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface CustomResourceProperties {
}
export default class CustomResource extends ResourceBase {
    constructor(properties: CustomResourceProperties, dependsOn?: Value<string>);
}
