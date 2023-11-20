import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ModuleDefaultVersionProperties {
    VersionId?: Value<string>;
    ModuleName?: Value<string>;
    Arn?: Value<string>;
}
export default class ModuleDefaultVersion extends ResourceBase<ModuleDefaultVersionProperties> {
    constructor(properties?: ModuleDefaultVersionProperties);
}
