import { ResourceBase } from '../resource';
import { Value } from '../internal';
import ApplicationVersion from './applicationVersion';
import ConfigurationTemplate from './configurationTemplate';
export interface ApplicationProperties {
    ApplicationName?: Value<string>;
    Description?: Value<string>;
    ApplicationVersions?: ApplicationVersion[];
    ConfigurationTemplates?: ConfigurationTemplate[];
}
export default class Application extends ResourceBase {
    constructor(properties: ApplicationProperties, dependsOn?: Value<string>);
}
