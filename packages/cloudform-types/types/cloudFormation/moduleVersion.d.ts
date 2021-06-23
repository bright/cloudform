import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ModuleVersionProperties {
    ModuleName: Value<string>;
    ModulePackage: Value<string>;
}
export default class ModuleVersion extends ResourceBase<ModuleVersionProperties> {
    constructor(properties: ModuleVersionProperties);
}
