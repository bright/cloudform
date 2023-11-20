import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ModelPackageGroupProperties {
    ModelPackageGroupName: Value<string>;
    ModelPackageGroupDescription?: Value<string>;
    ModelPackageGroupPolicy?: {
        [key: string]: any;
    };
    Tags?: List<ResourceTag>;
}
export default class ModelPackageGroup extends ResourceBase<ModelPackageGroupProperties> {
    constructor(properties: ModelPackageGroupProperties);
}
