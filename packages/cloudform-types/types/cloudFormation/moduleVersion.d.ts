import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ModuleVersionProperties {
    ModulePackage: Value<string>;
    ModuleName: Value<string>;
}
export default class ModuleVersion extends ResourceBase<ModuleVersionProperties> {
    constructor(properties: ModuleVersionProperties);
}
