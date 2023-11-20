import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AccessControlListConfiguration {
    KeyPath?: Value<string>;
    constructor(properties: AccessControlListConfiguration);
}
export declare class AclConfiguration {
    AllowedGroupsColumnName: Value<string>;
    constructor(properties: AclConfiguration);
}
export declare class ColumnConfiguration {
    ChangeDetectingColumns: List<Value<string>>;
    DocumentTitleColumnName?: Value<string>;
    DocumentIdColumnName: Value<string>;
    DocumentDataColumnName: Value<string>;
    FieldMappings?: List<DataSourceToIndexFieldMapping>;
    constructor(properties: ColumnConfiguration);
}
export declare class ConfluenceAttachmentConfiguration {
    AttachmentFieldMappings?: List<ConfluenceAttachmentToIndexFieldMapping>;
    CrawlAttachments?: Value<boolean>;
    constructor(properties: ConfluenceAttachmentConfiguration);
}
export declare class ConfluenceAttachmentToIndexFieldMapping {
    DateFieldFormat?: Value<string>;
    IndexFieldName: Value<string>;
    DataSourceFieldName: Value<string>;
    constructor(properties: ConfluenceAttachmentToIndexFieldMapping);
}
export declare class ConfluenceBlogConfiguration {
    BlogFieldMappings?: List<ConfluenceBlogToIndexFieldMapping>;
    constructor(properties: ConfluenceBlogConfiguration);
}
export declare class ConfluenceBlogToIndexFieldMapping {
    DateFieldFormat?: Value<string>;
    IndexFieldName: Value<string>;
    DataSourceFieldName: Value<string>;
    constructor(properties: ConfluenceBlogToIndexFieldMapping);
}
export declare class ConfluenceConfiguration {
    SecretArn: Value<string>;
    AttachmentConfiguration?: ConfluenceAttachmentConfiguration;
    ServerUrl: Value<string>;
    PageConfiguration?: ConfluencePageConfiguration;
    BlogConfiguration?: ConfluenceBlogConfiguration;
    Version: Value<string>;
    VpcConfiguration?: DataSourceVpcConfiguration;
    InclusionPatterns?: List<Value<string>>;
    ExclusionPatterns?: List<Value<string>>;
    SpaceConfiguration?: ConfluenceSpaceConfiguration;
    constructor(properties: ConfluenceConfiguration);
}
export declare class ConfluencePageConfiguration {
    PageFieldMappings?: List<ConfluencePageToIndexFieldMapping>;
    constructor(properties: ConfluencePageConfiguration);
}
export declare class ConfluencePageToIndexFieldMapping {
    DateFieldFormat?: Value<string>;
    IndexFieldName: Value<string>;
    DataSourceFieldName: Value<string>;
    constructor(properties: ConfluencePageToIndexFieldMapping);
}
export declare class ConfluenceSpaceConfiguration {
    ExcludeSpaces?: List<Value<string>>;
    SpaceFieldMappings?: List<ConfluenceSpaceToIndexFieldMapping>;
    CrawlPersonalSpaces?: Value<boolean>;
    CrawlArchivedSpaces?: Value<boolean>;
    IncludeSpaces?: List<Value<string>>;
    constructor(properties: ConfluenceSpaceConfiguration);
}
export declare class ConfluenceSpaceToIndexFieldMapping {
    DateFieldFormat?: Value<string>;
    IndexFieldName: Value<string>;
    DataSourceFieldName: Value<string>;
    constructor(properties: ConfluenceSpaceToIndexFieldMapping);
}
export declare class ConnectionConfiguration {
    SecretArn: Value<string>;
    TableName: Value<string>;
    DatabasePort: Value<number>;
    DatabaseHost: Value<string>;
    DatabaseName: Value<string>;
    constructor(properties: ConnectionConfiguration);
}
export declare class CustomDocumentEnrichmentConfiguration {
    InlineConfigurations?: List<InlineCustomDocumentEnrichmentConfiguration>;
    PreExtractionHookConfiguration?: HookConfiguration;
    PostExtractionHookConfiguration?: HookConfiguration;
    RoleArn?: Value<string>;
    constructor(properties: CustomDocumentEnrichmentConfiguration);
}
export declare class DataSourceConfiguration {
    GoogleDriveConfiguration?: GoogleDriveConfiguration;
    WebCrawlerConfiguration?: WebCrawlerConfiguration;
    S3Configuration?: S3DataSourceConfiguration;
    SalesforceConfiguration?: SalesforceConfiguration;
    DatabaseConfiguration?: DatabaseConfiguration;
    SharePointConfiguration?: SharePointConfiguration;
    ConfluenceConfiguration?: ConfluenceConfiguration;
    WorkDocsConfiguration?: WorkDocsConfiguration;
    OneDriveConfiguration?: OneDriveConfiguration;
    ServiceNowConfiguration?: ServiceNowConfiguration;
    constructor(properties: DataSourceConfiguration);
}
export declare class DataSourceToIndexFieldMapping {
    DateFieldFormat?: Value<string>;
    IndexFieldName: Value<string>;
    DataSourceFieldName: Value<string>;
    constructor(properties: DataSourceToIndexFieldMapping);
}
export declare class DataSourceVpcConfiguration {
    SubnetIds: List<Value<string>>;
    SecurityGroupIds: List<Value<string>>;
    constructor(properties: DataSourceVpcConfiguration);
}
export declare class DatabaseConfiguration {
    SqlConfiguration?: SqlConfiguration;
    DatabaseEngineType: Value<string>;
    ConnectionConfiguration: ConnectionConfiguration;
    ColumnConfiguration: ColumnConfiguration;
    VpcConfiguration?: DataSourceVpcConfiguration;
    AclConfiguration?: AclConfiguration;
    constructor(properties: DatabaseConfiguration);
}
export declare class DocumentAttributeCondition {
    Operator: Value<string>;
    ConditionDocumentAttributeKey: Value<string>;
    ConditionOnValue?: DocumentAttributeValue;
    constructor(properties: DocumentAttributeCondition);
}
export declare class DocumentAttributeTarget {
    TargetDocumentAttributeKey: Value<string>;
    TargetDocumentAttributeValueDeletion?: Value<boolean>;
    TargetDocumentAttributeValue?: DocumentAttributeValue;
    constructor(properties: DocumentAttributeTarget);
}
export declare class DocumentAttributeValue {
    DateValue?: Value<string>;
    LongValue?: Value<number>;
    StringValue?: Value<string>;
    StringListValue?: List<Value<string>>;
    constructor(properties: DocumentAttributeValue);
}
export declare class DocumentsMetadataConfiguration {
    S3Prefix?: Value<string>;
    constructor(properties: DocumentsMetadataConfiguration);
}
export declare class GoogleDriveConfiguration {
    SecretArn: Value<string>;
    ExcludeSharedDrives?: List<Value<string>>;
    ExcludeUserAccounts?: List<Value<string>>;
    InclusionPatterns?: List<Value<string>>;
    ExcludeMimeTypes?: List<Value<string>>;
    FieldMappings?: List<DataSourceToIndexFieldMapping>;
    ExclusionPatterns?: List<Value<string>>;
    constructor(properties: GoogleDriveConfiguration);
}
export declare class HookConfiguration {
    S3Bucket: Value<string>;
    LambdaArn: Value<string>;
    InvocationCondition?: DocumentAttributeCondition;
    constructor(properties: HookConfiguration);
}
export declare class InlineCustomDocumentEnrichmentConfiguration {
    Condition?: DocumentAttributeCondition;
    Target?: DocumentAttributeTarget;
    DocumentContentDeletion?: Value<boolean>;
    constructor(properties: InlineCustomDocumentEnrichmentConfiguration);
}
export declare class OneDriveConfiguration {
    TenantDomain: Value<string>;
    SecretArn: Value<string>;
    DisableLocalGroups?: Value<boolean>;
    OneDriveUsers: OneDriveUsers;
    InclusionPatterns?: List<Value<string>>;
    FieldMappings?: List<DataSourceToIndexFieldMapping>;
    ExclusionPatterns?: List<Value<string>>;
    constructor(properties: OneDriveConfiguration);
}
export declare class OneDriveUsers {
    OneDriveUserList?: List<Value<string>>;
    OneDriveUserS3Path?: S3Path;
    constructor(properties: OneDriveUsers);
}
export declare class ProxyConfiguration {
    Port: Value<number>;
    Host: Value<string>;
    Credentials?: Value<string>;
    constructor(properties: ProxyConfiguration);
}
export declare class S3DataSourceConfiguration {
    BucketName: Value<string>;
    InclusionPatterns?: List<Value<string>>;
    InclusionPrefixes?: List<Value<string>>;
    AccessControlListConfiguration?: AccessControlListConfiguration;
    ExclusionPatterns?: List<Value<string>>;
    DocumentsMetadataConfiguration?: DocumentsMetadataConfiguration;
    constructor(properties: S3DataSourceConfiguration);
}
export declare class S3Path {
    Bucket: Value<string>;
    Key: Value<string>;
    constructor(properties: S3Path);
}
export declare class SalesforceChatterFeedConfiguration {
    DocumentTitleFieldName?: Value<string>;
    IncludeFilterTypes?: List<Value<string>>;
    FieldMappings?: List<DataSourceToIndexFieldMapping>;
    DocumentDataFieldName: Value<string>;
    constructor(properties: SalesforceChatterFeedConfiguration);
}
export declare class SalesforceConfiguration {
    SecretArn: Value<string>;
    ServerUrl: Value<string>;
    IncludeAttachmentFilePatterns?: List<Value<string>>;
    StandardObjectConfigurations?: List<SalesforceStandardObjectConfiguration>;
    StandardObjectAttachmentConfiguration?: SalesforceStandardObjectAttachmentConfiguration;
    ExcludeAttachmentFilePatterns?: List<Value<string>>;
    CrawlAttachments?: Value<boolean>;
    ChatterFeedConfiguration?: SalesforceChatterFeedConfiguration;
    KnowledgeArticleConfiguration?: SalesforceKnowledgeArticleConfiguration;
    constructor(properties: SalesforceConfiguration);
}
export declare class SalesforceCustomKnowledgeArticleTypeConfiguration {
    DocumentTitleFieldName?: Value<string>;
    FieldMappings?: List<DataSourceToIndexFieldMapping>;
    Name: Value<string>;
    DocumentDataFieldName: Value<string>;
    constructor(properties: SalesforceCustomKnowledgeArticleTypeConfiguration);
}
export declare class SalesforceKnowledgeArticleConfiguration {
    IncludedStates: List<Value<string>>;
    StandardKnowledgeArticleTypeConfiguration?: SalesforceStandardKnowledgeArticleTypeConfiguration;
    CustomKnowledgeArticleTypeConfigurations?: List<SalesforceCustomKnowledgeArticleTypeConfiguration>;
    constructor(properties: SalesforceKnowledgeArticleConfiguration);
}
export declare class SalesforceStandardKnowledgeArticleTypeConfiguration {
    DocumentTitleFieldName?: Value<string>;
    FieldMappings?: List<DataSourceToIndexFieldMapping>;
    DocumentDataFieldName: Value<string>;
    constructor(properties: SalesforceStandardKnowledgeArticleTypeConfiguration);
}
export declare class SalesforceStandardObjectAttachmentConfiguration {
    DocumentTitleFieldName?: Value<string>;
    FieldMappings?: List<DataSourceToIndexFieldMapping>;
    constructor(properties: SalesforceStandardObjectAttachmentConfiguration);
}
export declare class SalesforceStandardObjectConfiguration {
    DocumentTitleFieldName?: Value<string>;
    FieldMappings?: List<DataSourceToIndexFieldMapping>;
    Name: Value<string>;
    DocumentDataFieldName: Value<string>;
    constructor(properties: SalesforceStandardObjectConfiguration);
}
export declare class ServiceNowConfiguration {
    SecretArn: Value<string>;
    HostUrl: Value<string>;
    ServiceCatalogConfiguration?: ServiceNowServiceCatalogConfiguration;
    ServiceNowBuildVersion: Value<string>;
    KnowledgeArticleConfiguration?: ServiceNowKnowledgeArticleConfiguration;
    AuthenticationType?: Value<string>;
    constructor(properties: ServiceNowConfiguration);
}
export declare class ServiceNowKnowledgeArticleConfiguration {
    DocumentTitleFieldName?: Value<string>;
    IncludeAttachmentFilePatterns?: List<Value<string>>;
    ExcludeAttachmentFilePatterns?: List<Value<string>>;
    FilterQuery?: Value<string>;
    CrawlAttachments?: Value<boolean>;
    FieldMappings?: List<DataSourceToIndexFieldMapping>;
    DocumentDataFieldName: Value<string>;
    constructor(properties: ServiceNowKnowledgeArticleConfiguration);
}
export declare class ServiceNowServiceCatalogConfiguration {
    DocumentTitleFieldName?: Value<string>;
    IncludeAttachmentFilePatterns?: List<Value<string>>;
    ExcludeAttachmentFilePatterns?: List<Value<string>>;
    CrawlAttachments?: Value<boolean>;
    FieldMappings?: List<DataSourceToIndexFieldMapping>;
    DocumentDataFieldName: Value<string>;
    constructor(properties: ServiceNowServiceCatalogConfiguration);
}
export declare class SharePointConfiguration {
    SecretArn: Value<string>;
    DocumentTitleFieldName?: Value<string>;
    SslCertificateS3Path?: S3Path;
    DisableLocalGroups?: Value<boolean>;
    CrawlAttachments?: Value<boolean>;
    InclusionPatterns?: List<Value<string>>;
    VpcConfiguration?: DataSourceVpcConfiguration;
    Urls: List<Value<string>>;
    UseChangeLog?: Value<boolean>;
    FieldMappings?: List<DataSourceToIndexFieldMapping>;
    ExclusionPatterns?: List<Value<string>>;
    SharePointVersion: Value<string>;
    constructor(properties: SharePointConfiguration);
}
export declare class SqlConfiguration {
    QueryIdentifiersEnclosingOption?: Value<string>;
    constructor(properties: SqlConfiguration);
}
export declare class WebCrawlerAuthenticationConfiguration {
    BasicAuthentication?: List<WebCrawlerBasicAuthentication>;
    constructor(properties: WebCrawlerAuthenticationConfiguration);
}
export declare class WebCrawlerBasicAuthentication {
    Port: Value<number>;
    Host: Value<string>;
    Credentials: Value<string>;
    constructor(properties: WebCrawlerBasicAuthentication);
}
export declare class WebCrawlerConfiguration {
    AuthenticationConfiguration?: WebCrawlerAuthenticationConfiguration;
    MaxLinksPerPage?: Value<number>;
    ProxyConfiguration?: ProxyConfiguration;
    UrlExclusionPatterns?: List<Value<string>>;
    MaxUrlsPerMinuteCrawlRate?: Value<number>;
    UrlInclusionPatterns?: List<Value<string>>;
    Urls: WebCrawlerUrls;
    MaxContentSizePerPageInMegaBytes?: Value<number>;
    CrawlDepth?: Value<number>;
    constructor(properties: WebCrawlerConfiguration);
}
export declare class WebCrawlerSeedUrlConfiguration {
    WebCrawlerMode?: Value<string>;
    SeedUrls: List<Value<string>>;
    constructor(properties: WebCrawlerSeedUrlConfiguration);
}
export declare class WebCrawlerSiteMapsConfiguration {
    SiteMaps: List<Value<string>>;
    constructor(properties: WebCrawlerSiteMapsConfiguration);
}
export declare class WebCrawlerUrls {
    SiteMapsConfiguration?: WebCrawlerSiteMapsConfiguration;
    SeedUrlConfiguration?: WebCrawlerSeedUrlConfiguration;
    constructor(properties: WebCrawlerUrls);
}
export declare class WorkDocsConfiguration {
    CrawlComments?: Value<boolean>;
    OrganizationId: Value<string>;
    InclusionPatterns?: List<Value<string>>;
    UseChangeLog?: Value<boolean>;
    FieldMappings?: List<DataSourceToIndexFieldMapping>;
    ExclusionPatterns?: List<Value<string>>;
    constructor(properties: WorkDocsConfiguration);
}
export interface DataSourceProperties {
    CustomDocumentEnrichmentConfiguration?: CustomDocumentEnrichmentConfiguration;
    IndexId: Value<string>;
    LanguageCode?: Value<string>;
    Type: Value<string>;
    Description?: Value<string>;
    Schedule?: Value<string>;
    DataSourceConfiguration?: DataSourceConfiguration;
    RoleArn?: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class DataSource extends ResourceBase<DataSourceProperties> {
    static AccessControlListConfiguration: typeof AccessControlListConfiguration;
    static AclConfiguration: typeof AclConfiguration;
    static ColumnConfiguration: typeof ColumnConfiguration;
    static ConfluenceAttachmentConfiguration: typeof ConfluenceAttachmentConfiguration;
    static ConfluenceAttachmentToIndexFieldMapping: typeof ConfluenceAttachmentToIndexFieldMapping;
    static ConfluenceBlogConfiguration: typeof ConfluenceBlogConfiguration;
    static ConfluenceBlogToIndexFieldMapping: typeof ConfluenceBlogToIndexFieldMapping;
    static ConfluenceConfiguration: typeof ConfluenceConfiguration;
    static ConfluencePageConfiguration: typeof ConfluencePageConfiguration;
    static ConfluencePageToIndexFieldMapping: typeof ConfluencePageToIndexFieldMapping;
    static ConfluenceSpaceConfiguration: typeof ConfluenceSpaceConfiguration;
    static ConfluenceSpaceToIndexFieldMapping: typeof ConfluenceSpaceToIndexFieldMapping;
    static ConnectionConfiguration: typeof ConnectionConfiguration;
    static CustomDocumentEnrichmentConfiguration: typeof CustomDocumentEnrichmentConfiguration;
    static DataSourceConfiguration: typeof DataSourceConfiguration;
    static DataSourceToIndexFieldMapping: typeof DataSourceToIndexFieldMapping;
    static DataSourceVpcConfiguration: typeof DataSourceVpcConfiguration;
    static DatabaseConfiguration: typeof DatabaseConfiguration;
    static DocumentAttributeCondition: typeof DocumentAttributeCondition;
    static DocumentAttributeTarget: typeof DocumentAttributeTarget;
    static DocumentAttributeValue: typeof DocumentAttributeValue;
    static DocumentsMetadataConfiguration: typeof DocumentsMetadataConfiguration;
    static GoogleDriveConfiguration: typeof GoogleDriveConfiguration;
    static HookConfiguration: typeof HookConfiguration;
    static InlineCustomDocumentEnrichmentConfiguration: typeof InlineCustomDocumentEnrichmentConfiguration;
    static OneDriveConfiguration: typeof OneDriveConfiguration;
    static OneDriveUsers: typeof OneDriveUsers;
    static ProxyConfiguration: typeof ProxyConfiguration;
    static S3DataSourceConfiguration: typeof S3DataSourceConfiguration;
    static S3Path: typeof S3Path;
    static SalesforceChatterFeedConfiguration: typeof SalesforceChatterFeedConfiguration;
    static SalesforceConfiguration: typeof SalesforceConfiguration;
    static SalesforceCustomKnowledgeArticleTypeConfiguration: typeof SalesforceCustomKnowledgeArticleTypeConfiguration;
    static SalesforceKnowledgeArticleConfiguration: typeof SalesforceKnowledgeArticleConfiguration;
    static SalesforceStandardKnowledgeArticleTypeConfiguration: typeof SalesforceStandardKnowledgeArticleTypeConfiguration;
    static SalesforceStandardObjectAttachmentConfiguration: typeof SalesforceStandardObjectAttachmentConfiguration;
    static SalesforceStandardObjectConfiguration: typeof SalesforceStandardObjectConfiguration;
    static ServiceNowConfiguration: typeof ServiceNowConfiguration;
    static ServiceNowKnowledgeArticleConfiguration: typeof ServiceNowKnowledgeArticleConfiguration;
    static ServiceNowServiceCatalogConfiguration: typeof ServiceNowServiceCatalogConfiguration;
    static SharePointConfiguration: typeof SharePointConfiguration;
    static SqlConfiguration: typeof SqlConfiguration;
    static WebCrawlerAuthenticationConfiguration: typeof WebCrawlerAuthenticationConfiguration;
    static WebCrawlerBasicAuthentication: typeof WebCrawlerBasicAuthentication;
    static WebCrawlerConfiguration: typeof WebCrawlerConfiguration;
    static WebCrawlerSeedUrlConfiguration: typeof WebCrawlerSeedUrlConfiguration;
    static WebCrawlerSiteMapsConfiguration: typeof WebCrawlerSiteMapsConfiguration;
    static WebCrawlerUrls: typeof WebCrawlerUrls;
    static WorkDocsConfiguration: typeof WorkDocsConfiguration;
    constructor(properties: DataSourceProperties);
}
