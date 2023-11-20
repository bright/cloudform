import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ProjectProperties {
    ProjectName: Value<string>;
}
export default class Project extends ResourceBase<ProjectProperties> {
    constructor(properties: ProjectProperties);
}
