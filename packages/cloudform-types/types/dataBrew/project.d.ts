import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Sample {
    Type: Value<string>;
    Size?: Value<number>;
    constructor(properties: Sample);
}
export interface ProjectProperties {
    RecipeName: Value<string>;
    DatasetName: Value<string>;
    Sample?: Sample;
    RoleArn: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Project extends ResourceBase<ProjectProperties> {
    static Sample: typeof Sample;
    constructor(properties: ProjectProperties);
}
