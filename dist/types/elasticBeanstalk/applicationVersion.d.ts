import { ResourceBase } from '../resource';
import { Value } from '../internal';
import SourceBundle from './sourceBundle';
export interface ApplicationVersionProperties {
    ApplicationName: Value<string>;
    Description?: Value<string>;
    SourceBundle?: SourceBundle;
}
export default class ApplicationVersion extends ResourceBase {
    constructor(properties: ApplicationVersionProperties, dependsOn?: Value<string>);
}
