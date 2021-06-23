import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ModelPackageGroupProperties {
    Tags?: List<ResourceTag>;
    ModelPackageGroupName: Value<string>;
    ModelPackageGroupDescription?: Value<string>;
    ModelPackageGroupPolicy?: {
        [key: string]: any;
    };
}
export default class ModelPackageGroup extends ResourceBase<ModelPackageGroupProperties> {
    constructor(properties: ModelPackageGroupProperties);
}
