import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ModuleDefaultVersionProperties {
    Arn?: Value<string>;
    ModuleName?: Value<string>;
    VersionId?: Value<string>;
}
export default class ModuleDefaultVersion extends ResourceBase<ModuleDefaultVersionProperties> {
    constructor(properties?: ModuleDefaultVersionProperties);
}
