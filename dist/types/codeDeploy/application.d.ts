import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface ApplicationProperties {
    ApplicationName?: Value<string>;
}
export default class Application extends ResourceBase {
    constructor(properties: ApplicationProperties, dependsOn?: Value<string>);
}
