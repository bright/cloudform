import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ProjectProperties {
    Tags?: List<ResourceTag>;
    ProjectName: Value<string>;
    ProjectDescription?: Value<string>;
    ServiceCatalogProvisioningDetails: {
        [key: string]: any;
    };
}
export default class Project extends ResourceBase<ProjectProperties> {
    constructor(properties: ProjectProperties);
}
