import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Sample {
    Size?: Value<number>;
    Type: Value<string>;
    constructor(properties: Sample);
}
export interface ProjectProperties {
    DatasetName: Value<string>;
    Name: Value<string>;
    RecipeName: Value<string>;
    RoleArn: Value<string>;
    Sample?: Sample;
    Tags?: List<ResourceTag>;
}
export default class Project extends ResourceBase<ProjectProperties> {
    static Sample: typeof Sample;
    constructor(properties: ProjectProperties);
}
