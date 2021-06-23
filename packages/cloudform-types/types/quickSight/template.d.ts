import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ResourcePermission {
    Actions: List<Value<string>>;
    Principal: Value<string>;
    constructor(properties: ResourcePermission);
}
export declare class TemplateSourceTemplate {
    Arn: Value<string>;
    constructor(properties: TemplateSourceTemplate);
}
export declare class DataSetReference {
    DataSetArn: Value<string>;
    DataSetPlaceholder: Value<string>;
    constructor(properties: DataSetReference);
}
export declare class TemplateSourceEntity {
    SourceAnalysis?: TemplateSourceAnalysis;
    SourceTemplate?: TemplateSourceTemplate;
    constructor(properties: TemplateSourceEntity);
}
export declare class TemplateSourceAnalysis {
    DataSetReferences: List<DataSetReference>;
    Arn: Value<string>;
    constructor(properties: TemplateSourceAnalysis);
}
export interface TemplateProperties {
    AwsAccountId: Value<string>;
    Name?: Value<string>;
    Permissions?: List<ResourcePermission>;
    SourceEntity?: TemplateSourceEntity;
    Tags?: List<ResourceTag>;
    TemplateId: Value<string>;
    VersionDescription?: Value<string>;
}
export default class Template extends ResourceBase<TemplateProperties> {
    static ResourcePermission: typeof ResourcePermission;
    static TemplateSourceTemplate: typeof TemplateSourceTemplate;
    static DataSetReference: typeof DataSetReference;
    static TemplateSourceEntity: typeof TemplateSourceEntity;
    static TemplateSourceAnalysis: typeof TemplateSourceAnalysis;
    constructor(properties: TemplateProperties);
}
