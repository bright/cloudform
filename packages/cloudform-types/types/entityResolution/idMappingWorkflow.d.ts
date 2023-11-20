import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class IdMappingTechniques {
    ProviderProperties?: ProviderProperties;
    IdMappingType?: Value<string>;
    constructor(properties: IdMappingTechniques);
}
export declare class IdMappingWorkflowInputSource {
    InputSourceARN: Value<string>;
    SchemaArn: Value<string>;
    constructor(properties: IdMappingWorkflowInputSource);
}
export declare class IdMappingWorkflowOutputSource {
    KMSArn?: Value<string>;
    OutputS3Path: Value<string>;
    constructor(properties: IdMappingWorkflowOutputSource);
}
export declare class IntermediateSourceConfiguration {
    IntermediateS3Path: Value<string>;
    constructor(properties: IntermediateSourceConfiguration);
}
export declare class ProviderProperties {
    IntermediateSourceConfiguration?: IntermediateSourceConfiguration;
    ProviderServiceArn: Value<string>;
    ProviderConfiguration?: {
        [key: string]: Value<string>;
    };
    constructor(properties: ProviderProperties);
}
export interface IdMappingWorkflowProperties {
    Description?: Value<string>;
    InputSourceConfig: List<IdMappingWorkflowInputSource>;
    IdMappingTechniques: IdMappingTechniques;
    WorkflowName: Value<string>;
    OutputSourceConfig: List<IdMappingWorkflowOutputSource>;
    RoleArn: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class IdMappingWorkflow extends ResourceBase<IdMappingWorkflowProperties> {
    static IdMappingTechniques: typeof IdMappingTechniques;
    static IdMappingWorkflowInputSource: typeof IdMappingWorkflowInputSource;
    static IdMappingWorkflowOutputSource: typeof IdMappingWorkflowOutputSource;
    static IntermediateSourceConfiguration: typeof IntermediateSourceConfiguration;
    static ProviderProperties: typeof ProviderProperties;
    constructor(properties: IdMappingWorkflowProperties);
}
