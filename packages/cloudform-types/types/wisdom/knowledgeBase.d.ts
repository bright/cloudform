import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AppIntegrationsConfiguration {
    ObjectFields?: List<Value<string>>;
    AppIntegrationArn: Value<string>;
    constructor(properties: AppIntegrationsConfiguration);
}
export declare class RenderingConfiguration {
    TemplateUri?: Value<string>;
    constructor(properties: RenderingConfiguration);
}
export declare class ServerSideEncryptionConfiguration {
    KmsKeyId?: Value<string>;
    constructor(properties: ServerSideEncryptionConfiguration);
}
export declare class SourceConfiguration {
    AppIntegrations: AppIntegrationsConfiguration;
    constructor(properties: SourceConfiguration);
}
export interface KnowledgeBaseProperties {
    Description?: Value<string>;
    KnowledgeBaseType: Value<string>;
    SourceConfiguration?: SourceConfiguration;
    ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
    RenderingConfiguration?: RenderingConfiguration;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class KnowledgeBase extends ResourceBase<KnowledgeBaseProperties> {
    static AppIntegrationsConfiguration: typeof AppIntegrationsConfiguration;
    static RenderingConfiguration: typeof RenderingConfiguration;
    static ServerSideEncryptionConfiguration: typeof ServerSideEncryptionConfiguration;
    static SourceConfiguration: typeof SourceConfiguration;
    constructor(properties: KnowledgeBaseProperties);
}
