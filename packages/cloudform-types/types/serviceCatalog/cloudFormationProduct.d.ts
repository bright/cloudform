import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CodeStarParameters {
    ArtifactPath: Value<string>;
    Repository: Value<string>;
    Branch: Value<string>;
    ConnectionArn: Value<string>;
    constructor(properties: CodeStarParameters);
}
export declare class ConnectionParameters {
    CodeStar?: CodeStarParameters;
    constructor(properties: ConnectionParameters);
}
export declare class ProvisioningArtifactProperties {
    Type?: Value<string>;
    Description?: Value<string>;
    DisableTemplateValidation?: Value<boolean>;
    Info: {
        [key: string]: any;
    };
    Name?: Value<string>;
    constructor(properties: ProvisioningArtifactProperties);
}
export declare class SourceConnection {
    Type: Value<string>;
    ConnectionParameters: ConnectionParameters;
    constructor(properties: SourceConnection);
}
export interface CloudFormationProductProperties {
    Owner: Value<string>;
    Description?: Value<string>;
    SupportEmail?: Value<string>;
    ProductType?: Value<string>;
    Name: Value<string>;
    ReplaceProvisioningArtifacts?: Value<boolean>;
    SupportDescription?: Value<string>;
    Distributor?: Value<string>;
    AcceptLanguage?: Value<string>;
    SupportUrl?: Value<string>;
    SourceConnection?: SourceConnection;
    Tags?: List<ResourceTag>;
    ProvisioningArtifactParameters?: List<ProvisioningArtifactProperties>;
}
export default class CloudFormationProduct extends ResourceBase<CloudFormationProductProperties> {
    static CodeStarParameters: typeof CodeStarParameters;
    static ConnectionParameters: typeof ConnectionParameters;
    static ProvisioningArtifactProperties: typeof ProvisioningArtifactProperties;
    static SourceConnection: typeof SourceConnection;
    constructor(properties: CloudFormationProductProperties);
}
