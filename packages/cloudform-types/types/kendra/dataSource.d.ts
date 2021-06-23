import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ConfluenceAttachmentToIndexFieldMapping {
    DataSourceFieldName: Value<string>;
    DateFieldFormat?: Value<string>;
    IndexFieldName: Value<string>;
    constructor(properties: ConfluenceAttachmentToIndexFieldMapping);
}
export declare class SalesforceStandardObjectConfiguration {
    Name: Value<string>;
    DocumentDataFieldName: Value<string>;
    DocumentTitleFieldName?: Value<string>;
    FieldMappings?: List<DataSourceToIndexFieldMapping>;
    constructor(properties: SalesforceStandardObjectConfiguration);
}
export declare class SalesforceChatterFeedConfiguration {
    DocumentDataFieldName: Value<string>;
    DocumentTitleFieldName?: Value<string>;
    FieldMappings?: List<DataSourceToIndexFieldMapping>;
    IncludeFilterTypes?: List<Value<string>>;
    constructor(properties: SalesforceChatterFeedConfiguration);
}
export declare class SalesforceConfiguration {
    ServerUrl: Value<string>;
    SecretArn: Value<string>;
    StandardObjectConfigurations?: List<SalesforceStandardObjectConfiguration>;
    KnowledgeArticleConfiguration?: SalesforceKnowledgeArticleConfiguration;
    ChatterFeedConfiguration?: SalesforceChatterFeedConfiguration;
    CrawlAttachments?: Value<boolean>;
    StandardObjectAttachmentConfiguration?: SalesforceStandardObjectAttachmentConfiguration;
    IncludeAttachmentFilePatterns?: List<Value<string>>;
    ExcludeAttachmentFilePatterns?: List<Value<string>>;
    constructor(properties: SalesforceConfiguration);
}
export declare class ColumnConfiguration {
    DocumentIdColumnName: Value<string>;
    DocumentDataColumnName: Value<string>;
    DocumentTitleColumnName?: Value<string>;
    FieldMappings?: List<DataSourceToIndexFieldMapping>;
    ChangeDetectingColumns: List<Value<string>>;
    constructor(properties: ColumnConfiguration);
}
export declare class ServiceNowKnowledgeArticleConfiguration {
    CrawlAttachments?: Value<boolean>;
    IncludeAttachmentFilePatterns?: List<Value<string>>;
    ExcludeAttachmentFilePatterns?: List<Value<string>>;
    DocumentDataFieldName: Value<string>;
    DocumentTitleFieldName?: Value<string>;
    FieldMappings?: List<DataSourceToIndexFieldMapping>;
    FilterQuery?: Value<string>;
    constructor(properties: ServiceNowKnowledgeArticleConfiguration);
}
export declare class ConfluenceSpaceConfiguration {
    CrawlPersonalSpaces?: Value<boolean>;
    CrawlArchivedSpaces?: Value<boolean>;
    IncludeSpaces?: List<Value<string>>;
    ExcludeSpaces?: List<Value<string>>;
    SpaceFieldMappings?: List<ConfluenceSpaceToIndexFieldMapping>;
    constructor(properties: ConfluenceSpaceConfiguration);
}
export declare class GoogleDriveConfiguration {
    SecretArn: Value<string>;
    InclusionPatterns?: List<Value<string>>;
    ExclusionPatterns?: List<Value<string>>;
    FieldMappings?: List<DataSourceToIndexFieldMapping>;
    ExcludeMimeTypes?: List<Value<string>>;
    ExcludeUserAccounts?: List<Value<string>>;
    ExcludeSharedDrives?: List<Value<string>>;
    constructor(properties: GoogleDriveConfiguration);
}
export declare class S3Path {
    Bucket: Value<string>;
    Key: Value<string>;
    constructor(properties: S3Path);
}
export declare class ServiceNowConfiguration {
    HostUrl: Value<string>;
    SecretArn: Value<string>;
    ServiceNowBuildVersion: Value<string>;
    AuthenticationType?: Value<string>;
    KnowledgeArticleConfiguration?: ServiceNowKnowledgeArticleConfiguration;
    ServiceCatalogConfiguration?: ServiceNowServiceCatalogConfiguration;
    constructor(properties: ServiceNowConfiguration);
}
export declare class ConfluenceConfiguration {
    ServerUrl: Value<string>;
    SecretArn: Value<string>;
    Version: Value<string>;
    SpaceConfiguration?: ConfluenceSpaceConfiguration;
    PageConfiguration?: ConfluencePageConfiguration;
    BlogConfiguration?: ConfluenceBlogConfiguration;
    AttachmentConfiguration?: ConfluenceAttachmentConfiguration;
    VpcConfiguration?: DataSourceVpcConfiguration;
    InclusionPatterns?: List<Value<string>>;
    ExclusionPatterns?: List<Value<string>>;
    constructor(properties: ConfluenceConfiguration);
}
export declare class ConfluencePageToIndexFieldMapping {
    DataSourceFieldName: Value<string>;
    DateFieldFormat?: Value<string>;
    IndexFieldName: Value<string>;
    constructor(properties: ConfluencePageToIndexFieldMapping);
}
export declare class DatabaseConfiguration {
    DatabaseEngineType: Value<string>;
    ConnectionConfiguration: ConnectionConfiguration;
    VpcConfiguration?: DataSourceVpcConfiguration;
    ColumnConfiguration: ColumnConfiguration;
    AclConfiguration?: AclConfiguration;
    SqlConfiguration?: SqlConfiguration;
    constructor(properties: DatabaseConfiguration);
}
export declare class SqlConfiguration {
    QueryIdentifiersEnclosingOption?: Value<string>;
    constructor(properties: SqlConfiguration);
}
export declare class S3DataSourceConfiguration {
    BucketName: Value<string>;
    InclusionPrefixes?: List<Value<string>>;
    InclusionPatterns?: List<Value<string>>;
    ExclusionPatterns?: List<Value<string>>;
    DocumentsMetadataConfiguration?: DocumentsMetadataConfiguration;
    AccessControlListConfiguration?: AccessControlListConfiguration;
    constructor(properties: S3DataSourceConfiguration);
}
export declare class ConfluenceBlogConfiguration {
    BlogFieldMappings?: List<ConfluenceBlogToIndexFieldMapping>;
    constructor(properties: ConfluenceBlogConfiguration);
}
export declare class ConfluencePageConfiguration {
    PageFieldMappings?: List<ConfluencePageToIndexFieldMapping>;
    constructor(properties: ConfluencePageConfiguration);
}
export declare class ConnectionConfiguration {
    DatabaseHost: Value<string>;
    DatabasePort: Value<number>;
    DatabaseName: Value<string>;
    TableName: Value<string>;
    SecretArn: Value<string>;
    constructor(properties: ConnectionConfiguration);
}
export declare class ServiceNowServiceCatalogConfiguration {
    CrawlAttachments?: Value<boolean>;
    IncludeAttachmentFilePatterns?: List<Value<string>>;
    ExcludeAttachmentFilePatterns?: List<Value<string>>;
    DocumentDataFieldName: Value<string>;
    DocumentTitleFieldName?: Value<string>;
    FieldMappings?: List<DataSourceToIndexFieldMapping>;
    constructor(properties: ServiceNowServiceCatalogConfiguration);
}
export declare class SalesforceStandardObjectAttachmentConfiguration {
    DocumentTitleFieldName?: Value<string>;
    FieldMappings?: List<DataSourceToIndexFieldMapping>;
    constructor(properties: SalesforceStandardObjectAttachmentConfiguration);
}
export declare class SalesforceCustomKnowledgeArticleTypeConfiguration {
    Name: Value<string>;
    DocumentDataFieldName: Value<string>;
    DocumentTitleFieldName?: Value<string>;
    FieldMappings?: List<DataSourceToIndexFieldMapping>;
    constructor(properties: SalesforceCustomKnowledgeArticleTypeConfiguration);
}
export declare class ConfluenceBlogToIndexFieldMapping {
    DataSourceFieldName: Value<string>;
    DateFieldFormat?: Value<string>;
    IndexFieldName: Value<string>;
    constructor(properties: ConfluenceBlogToIndexFieldMapping);
}
export declare class OneDriveUsers {
    OneDriveUserList?: List<Value<string>>;
    OneDriveUserS3Path?: S3Path;
    constructor(properties: OneDriveUsers);
}
export declare class AclConfiguration {
    AllowedGroupsColumnName: Value<string>;
    constructor(properties: AclConfiguration);
}
export declare class SalesforceStandardKnowledgeArticleTypeConfiguration {
    DocumentDataFieldName: Value<string>;
    DocumentTitleFieldName?: Value<string>;
    FieldMappings?: List<DataSourceToIndexFieldMapping>;
    constructor(properties: SalesforceStandardKnowledgeArticleTypeConfiguration);
}
export declare class ConfluenceAttachmentConfiguration {
    CrawlAttachments?: Value<boolean>;
    AttachmentFieldMappings?: List<ConfluenceAttachmentToIndexFieldMapping>;
    constructor(properties: ConfluenceAttachmentConfiguration);
}
export declare class DataSourceVpcConfiguration {
    SubnetIds: List<Value<string>>;
    SecurityGroupIds: List<Value<string>>;
    constructor(properties: DataSourceVpcConfiguration);
}
export declare class SalesforceKnowledgeArticleConfiguration {
    IncludedStates: List<Value<string>>;
    StandardKnowledgeArticleTypeConfiguration?: SalesforceStandardKnowledgeArticleTypeConfiguration;
    CustomKnowledgeArticleTypeConfigurations?: List<SalesforceCustomKnowledgeArticleTypeConfiguration>;
    constructor(properties: SalesforceKnowledgeArticleConfiguration);
}
export declare class AccessControlListConfiguration {
    KeyPath?: Value<string>;
    constructor(properties: AccessControlListConfiguration);
}
export declare class DataSourceToIndexFieldMapping {
    DataSourceFieldName: Value<string>;
    DateFieldFormat?: Value<string>;
    IndexFieldName: Value<string>;
    constructor(properties: DataSourceToIndexFieldMapping);
}
export declare class ConfluenceSpaceToIndexFieldMapping {
    DataSourceFieldName: Value<string>;
    DateFieldFormat?: Value<string>;
    IndexFieldName: Value<string>;
    constructor(properties: ConfluenceSpaceToIndexFieldMapping);
}
export declare class OneDriveConfiguration {
    TenantDomain: Value<string>;
    SecretArn: Value<string>;
    OneDriveUsers: OneDriveUsers;
    InclusionPatterns?: List<Value<string>>;
    ExclusionPatterns?: List<Value<string>>;
    FieldMappings?: List<DataSourceToIndexFieldMapping>;
    DisableLocalGroups?: Value<boolean>;
    constructor(properties: OneDriveConfiguration);
}
export declare class DataSourceConfiguration {
    S3Configuration?: S3DataSourceConfiguration;
    SharePointConfiguration?: SharePointConfiguration;
    SalesforceConfiguration?: SalesforceConfiguration;
    OneDriveConfiguration?: OneDriveConfiguration;
    ServiceNowConfiguration?: ServiceNowConfiguration;
    DatabaseConfiguration?: DatabaseConfiguration;
    ConfluenceConfiguration?: ConfluenceConfiguration;
    GoogleDriveConfiguration?: GoogleDriveConfiguration;
    constructor(properties: DataSourceConfiguration);
}
export declare class SharePointConfiguration {
    SharePointVersion: Value<string>;
    Urls: List<Value<string>>;
    SecretArn: Value<string>;
    CrawlAttachments?: Value<boolean>;
    UseChangeLog?: Value<boolean>;
    InclusionPatterns?: List<Value<string>>;
    ExclusionPatterns?: List<Value<string>>;
    VpcConfiguration?: DataSourceVpcConfiguration;
    FieldMappings?: List<DataSourceToIndexFieldMapping>;
    DocumentTitleFieldName?: Value<string>;
    DisableLocalGroups?: Value<boolean>;
    constructor(properties: SharePointConfiguration);
}
export declare class DocumentsMetadataConfiguration {
    S3Prefix?: Value<string>;
    constructor(properties: DocumentsMetadataConfiguration);
}
export interface DataSourceProperties {
    Name: Value<string>;
    IndexId: Value<string>;
    Type: Value<string>;
    DataSourceConfiguration?: DataSourceConfiguration;
    Description?: Value<string>;
    Schedule?: Value<string>;
    RoleArn?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class DataSource extends ResourceBase<DataSourceProperties> {
    static ConfluenceAttachmentToIndexFieldMapping: typeof ConfluenceAttachmentToIndexFieldMapping;
    static SalesforceStandardObjectConfiguration: typeof SalesforceStandardObjectConfiguration;
    static SalesforceChatterFeedConfiguration: typeof SalesforceChatterFeedConfiguration;
    static SalesforceConfiguration: typeof SalesforceConfiguration;
    static ColumnConfiguration: typeof ColumnConfiguration;
    static ServiceNowKnowledgeArticleConfiguration: typeof ServiceNowKnowledgeArticleConfiguration;
    static ConfluenceSpaceConfiguration: typeof ConfluenceSpaceConfiguration;
    static GoogleDriveConfiguration: typeof GoogleDriveConfiguration;
    static S3Path: typeof S3Path;
    static ServiceNowConfiguration: typeof ServiceNowConfiguration;
    static ConfluenceConfiguration: typeof ConfluenceConfiguration;
    static ConfluencePageToIndexFieldMapping: typeof ConfluencePageToIndexFieldMapping;
    static DatabaseConfiguration: typeof DatabaseConfiguration;
    static SqlConfiguration: typeof SqlConfiguration;
    static S3DataSourceConfiguration: typeof S3DataSourceConfiguration;
    static ConfluenceBlogConfiguration: typeof ConfluenceBlogConfiguration;
    static ConfluencePageConfiguration: typeof ConfluencePageConfiguration;
    static ConnectionConfiguration: typeof ConnectionConfiguration;
    static ServiceNowServiceCatalogConfiguration: typeof ServiceNowServiceCatalogConfiguration;
    static SalesforceStandardObjectAttachmentConfiguration: typeof SalesforceStandardObjectAttachmentConfiguration;
    static SalesforceCustomKnowledgeArticleTypeConfiguration: typeof SalesforceCustomKnowledgeArticleTypeConfiguration;
    static ConfluenceBlogToIndexFieldMapping: typeof ConfluenceBlogToIndexFieldMapping;
    static OneDriveUsers: typeof OneDriveUsers;
    static AclConfiguration: typeof AclConfiguration;
    static SalesforceStandardKnowledgeArticleTypeConfiguration: typeof SalesforceStandardKnowledgeArticleTypeConfiguration;
    static ConfluenceAttachmentConfiguration: typeof ConfluenceAttachmentConfiguration;
    static DataSourceVpcConfiguration: typeof DataSourceVpcConfiguration;
    static SalesforceKnowledgeArticleConfiguration: typeof SalesforceKnowledgeArticleConfiguration;
    static AccessControlListConfiguration: typeof AccessControlListConfiguration;
    static DataSourceToIndexFieldMapping: typeof DataSourceToIndexFieldMapping;
    static ConfluenceSpaceToIndexFieldMapping: typeof ConfluenceSpaceToIndexFieldMapping;
    static OneDriveConfiguration: typeof OneDriveConfiguration;
    static DataSourceConfiguration: typeof DataSourceConfiguration;
    static SharePointConfiguration: typeof SharePointConfiguration;
    static DocumentsMetadataConfiguration: typeof DocumentsMetadataConfiguration;
    constructor(properties: DataSourceProperties);
}
