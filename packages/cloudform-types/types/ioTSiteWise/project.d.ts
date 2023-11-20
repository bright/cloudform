import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ProjectProperties {
    AssetIds?: List<Value<string>>;
    ProjectName: Value<string>;
    PortalId: Value<string>;
    ProjectDescription?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Project extends ResourceBase<ProjectProperties> {
    constructor(properties: ProjectProperties);
}
