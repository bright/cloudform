import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface SourceConfigurationProperties {
    ApplicationName: Value<string>;
    TemplateName: Value<string>;
}
export default class SourceConfiguration extends ResourceBase {
    constructor(properties: SourceConfigurationProperties, dependsOn?: Value<string>);
}
