export declare const ElasticBeanstalk: {
    ConfigurationTemplate: typeof ElasticBeanstalkConfigurationTemplate;
    Application: typeof ElasticBeanstalkApplication;
    Environment: typeof ElasticBeanstalkEnvironment;
    ApplicationVersion: typeof ElasticBeanstalkApplicationVersion;
};
import ElasticBeanstalkConfigurationTemplate from './elasticBeanstalk/configurationTemplate';
import ElasticBeanstalkApplication from './elasticBeanstalk/application';
import ElasticBeanstalkEnvironment from './elasticBeanstalk/environment';
import ElasticBeanstalkApplicationVersion from './elasticBeanstalk/applicationVersion';
export declare const AmazonMQ: {
    Broker: typeof AmazonMQBroker;
    ConfigurationAssociation: typeof AmazonMQConfigurationAssociation;
    Configuration: typeof AmazonMQConfiguration;
};
import AmazonMQBroker from './amazonMq/broker';
import AmazonMQConfigurationAssociation from './amazonMq/configurationAssociation';
import AmazonMQConfiguration from './amazonMq/configuration';
export declare const EC2: {
    RouteTable: typeof EC2RouteTable;
    VPCPeeringConnection: typeof EC2VPCPeeringConnection;
    PlacementGroup: typeof EC2PlacementGroup;
    TransitGateway: typeof EC2TransitGateway;
    VPCEndpointServicePermissions: typeof EC2VPCEndpointServicePermissions;
    NetworkAclEntry: typeof EC2NetworkAclEntry;
    InternetGateway: typeof EC2InternetGateway;
    LaunchTemplate: typeof EC2LaunchTemplate;
    TransitGatewayRouteTableAssociation: typeof EC2TransitGatewayRouteTableAssociation;
    Volume: typeof EC2Volume;
    SpotFleet: typeof EC2SpotFleet;
    VPNConnectionRoute: typeof EC2VPNConnectionRoute;
    NetworkInterfacePermission: typeof EC2NetworkInterfacePermission;
    EIP: typeof EC2EIP;
    SecurityGroupIngress: typeof EC2SecurityGroupIngress;
    SubnetRouteTableAssociation: typeof EC2SubnetRouteTableAssociation;
    Route: typeof EC2Route;
    FlowLog: typeof EC2FlowLog;
    TransitGatewayRouteTablePropagation: typeof EC2TransitGatewayRouteTablePropagation;
    SecurityGroupEgress: typeof EC2SecurityGroupEgress;
    NetworkInterface: typeof EC2NetworkInterface;
    TransitGatewayAttachment: typeof EC2TransitGatewayAttachment;
    SubnetNetworkAclAssociation: typeof EC2SubnetNetworkAclAssociation;
    SubnetCidrBlock: typeof EC2SubnetCidrBlock;
    NatGateway: typeof EC2NatGateway;
    SecurityGroup: typeof EC2SecurityGroup;
    Subnet: typeof EC2Subnet;
    VPC: typeof EC2VPC;
    Instance: typeof EC2Instance;
    TransitGatewayRoute: typeof EC2TransitGatewayRoute;
    DHCPOptions: typeof EC2DHCPOptions;
    NetworkAcl: typeof EC2NetworkAcl;
    VPNGatewayRoutePropagation: typeof EC2VPNGatewayRoutePropagation;
    EgressOnlyInternetGateway: typeof EC2EgressOnlyInternetGateway;
    NetworkInterfaceAttachment: typeof EC2NetworkInterfaceAttachment;
    CustomerGateway: typeof EC2CustomerGateway;
    TrunkInterfaceAssociation: typeof EC2TrunkInterfaceAssociation;
    VolumeAttachment: typeof EC2VolumeAttachment;
    Host: typeof EC2Host;
    EIPAssociation: typeof EC2EIPAssociation;
    VPNGateway: typeof EC2VPNGateway;
    VPCEndpoint: typeof EC2VPCEndpoint;
    VPCGatewayAttachment: typeof EC2VPCGatewayAttachment;
    VPNConnection: typeof EC2VPNConnection;
    VPCCidrBlock: typeof EC2VPCCidrBlock;
    EC2Fleet: typeof EC2EC2Fleet;
    TransitGatewayRouteTable: typeof EC2TransitGatewayRouteTable;
    VPCDHCPOptionsAssociation: typeof EC2VPCDHCPOptionsAssociation;
    VPCEndpointConnectionNotification: typeof EC2VPCEndpointConnectionNotification;
};
import EC2RouteTable from './ec2/routeTable';
import EC2VPCPeeringConnection from './ec2/vpcPeeringConnection';
import EC2PlacementGroup from './ec2/placementGroup';
import EC2TransitGateway from './ec2/transitGateway';
import EC2VPCEndpointServicePermissions from './ec2/vpcEndpointServicePermissions';
import EC2NetworkAclEntry from './ec2/networkAclEntry';
import EC2InternetGateway from './ec2/internetGateway';
import EC2LaunchTemplate from './ec2/launchTemplate';
import EC2TransitGatewayRouteTableAssociation from './ec2/transitGatewayRouteTableAssociation';
import EC2Volume from './ec2/volume';
import EC2SpotFleet from './ec2/spotFleet';
import EC2VPNConnectionRoute from './ec2/vpnConnectionRoute';
import EC2NetworkInterfacePermission from './ec2/networkInterfacePermission';
import EC2EIP from './ec2/eip';
import EC2SecurityGroupIngress from './ec2/securityGroupIngress';
import EC2SubnetRouteTableAssociation from './ec2/subnetRouteTableAssociation';
import EC2Route from './ec2/route';
import EC2FlowLog from './ec2/flowLog';
import EC2TransitGatewayRouteTablePropagation from './ec2/transitGatewayRouteTablePropagation';
import EC2SecurityGroupEgress from './ec2/securityGroupEgress';
import EC2NetworkInterface from './ec2/networkInterface';
import EC2TransitGatewayAttachment from './ec2/transitGatewayAttachment';
import EC2SubnetNetworkAclAssociation from './ec2/subnetNetworkAclAssociation';
import EC2SubnetCidrBlock from './ec2/subnetCidrBlock';
import EC2NatGateway from './ec2/natGateway';
import EC2SecurityGroup from './ec2/securityGroup';
import EC2Subnet from './ec2/subnet';
import EC2VPC from './ec2/vpc';
import EC2Instance from './ec2/instance';
import EC2TransitGatewayRoute from './ec2/transitGatewayRoute';
import EC2DHCPOptions from './ec2/dhcpOptions';
import EC2NetworkAcl from './ec2/networkAcl';
import EC2VPNGatewayRoutePropagation from './ec2/vpnGatewayRoutePropagation';
import EC2EgressOnlyInternetGateway from './ec2/egressOnlyInternetGateway';
import EC2NetworkInterfaceAttachment from './ec2/networkInterfaceAttachment';
import EC2CustomerGateway from './ec2/customerGateway';
import EC2TrunkInterfaceAssociation from './ec2/trunkInterfaceAssociation';
import EC2VolumeAttachment from './ec2/volumeAttachment';
import EC2Host from './ec2/host';
import EC2EIPAssociation from './ec2/eipAssociation';
import EC2VPNGateway from './ec2/vpnGateway';
import EC2VPCEndpoint from './ec2/vpcEndpoint';
import EC2VPCGatewayAttachment from './ec2/vpcGatewayAttachment';
import EC2VPNConnection from './ec2/vpnConnection';
import EC2VPCCidrBlock from './ec2/vpcCidrBlock';
import EC2EC2Fleet from './ec2/ec2Fleet';
import EC2TransitGatewayRouteTable from './ec2/transitGatewayRouteTable';
import EC2VPCDHCPOptionsAssociation from './ec2/vpcdhcpOptionsAssociation';
import EC2VPCEndpointConnectionNotification from './ec2/vpcEndpointConnectionNotification';
export declare const AppSync: {
    DataSource: typeof AppSyncDataSource;
    Resolver: typeof AppSyncResolver;
    GraphQLSchema: typeof AppSyncGraphQLSchema;
    GraphQLApi: typeof AppSyncGraphQLApi;
    FunctionConfiguration: typeof AppSyncFunctionConfiguration;
    ApiKey: typeof AppSyncApiKey;
};
import AppSyncDataSource from './appSync/dataSource';
import AppSyncResolver from './appSync/resolver';
import AppSyncGraphQLSchema from './appSync/graphQlSchema';
import AppSyncGraphQLApi from './appSync/graphQlApi';
import AppSyncFunctionConfiguration from './appSync/functionConfiguration';
import AppSyncApiKey from './appSync/apiKey';
export declare const ServiceCatalog: {
    PortfolioShare: typeof ServiceCatalogPortfolioShare;
    TagOptionAssociation: typeof ServiceCatalogTagOptionAssociation;
    LaunchTemplateConstraint: typeof ServiceCatalogLaunchTemplateConstraint;
    TagOption: typeof ServiceCatalogTagOption;
    PortfolioPrincipalAssociation: typeof ServiceCatalogPortfolioPrincipalAssociation;
    LaunchRoleConstraint: typeof ServiceCatalogLaunchRoleConstraint;
    CloudFormationProvisionedProduct: typeof ServiceCatalogCloudFormationProvisionedProduct;
    CloudFormationProduct: typeof ServiceCatalogCloudFormationProduct;
    PortfolioProductAssociation: typeof ServiceCatalogPortfolioProductAssociation;
    Portfolio: typeof ServiceCatalogPortfolio;
    AcceptedPortfolioShare: typeof ServiceCatalogAcceptedPortfolioShare;
    LaunchNotificationConstraint: typeof ServiceCatalogLaunchNotificationConstraint;
};
import ServiceCatalogPortfolioShare from './serviceCatalog/portfolioShare';
import ServiceCatalogTagOptionAssociation from './serviceCatalog/tagOptionAssociation';
import ServiceCatalogLaunchTemplateConstraint from './serviceCatalog/launchTemplateConstraint';
import ServiceCatalogTagOption from './serviceCatalog/tagOption';
import ServiceCatalogPortfolioPrincipalAssociation from './serviceCatalog/portfolioPrincipalAssociation';
import ServiceCatalogLaunchRoleConstraint from './serviceCatalog/launchRoleConstraint';
import ServiceCatalogCloudFormationProvisionedProduct from './serviceCatalog/cloudFormationProvisionedProduct';
import ServiceCatalogCloudFormationProduct from './serviceCatalog/cloudFormationProduct';
import ServiceCatalogPortfolioProductAssociation from './serviceCatalog/portfolioProductAssociation';
import ServiceCatalogPortfolio from './serviceCatalog/portfolio';
import ServiceCatalogAcceptedPortfolioShare from './serviceCatalog/acceptedPortfolioShare';
import ServiceCatalogLaunchNotificationConstraint from './serviceCatalog/launchNotificationConstraint';
export declare const Cognito: {
    IdentityPoolRoleAttachment: typeof CognitoIdentityPoolRoleAttachment;
    UserPoolGroup: typeof CognitoUserPoolGroup;
    IdentityPool: typeof CognitoIdentityPool;
    UserPoolUser: typeof CognitoUserPoolUser;
    UserPool: typeof CognitoUserPool;
    UserPoolClient: typeof CognitoUserPoolClient;
    UserPoolUserToGroupAttachment: typeof CognitoUserPoolUserToGroupAttachment;
};
import CognitoIdentityPoolRoleAttachment from './cognito/identityPoolRoleAttachment';
import CognitoUserPoolGroup from './cognito/userPoolGroup';
import CognitoIdentityPool from './cognito/identityPool';
import CognitoUserPoolUser from './cognito/userPoolUser';
import CognitoUserPool from './cognito/userPool';
import CognitoUserPoolClient from './cognito/userPoolClient';
import CognitoUserPoolUserToGroupAttachment from './cognito/userPoolUserToGroupAttachment';
export declare const Events: {
    Rule: typeof EventsRule;
    EventBusPolicy: typeof EventsEventBusPolicy;
};
import EventsRule from './events/rule';
import EventsEventBusPolicy from './events/eventBusPolicy';
export declare const WAF: {
    IPSet: typeof WAFIPSet;
    SizeConstraintSet: typeof WAFSizeConstraintSet;
    Rule: typeof WAFRule;
    ByteMatchSet: typeof WAFByteMatchSet;
    SqlInjectionMatchSet: typeof WAFSqlInjectionMatchSet;
    WebACL: typeof WAFWebACL;
    XssMatchSet: typeof WAFXssMatchSet;
};
import WAFIPSet from './waf/ipSet';
import WAFSizeConstraintSet from './waf/sizeConstraintSet';
import WAFRule from './waf/rule';
import WAFByteMatchSet from './waf/byteMatchSet';
import WAFSqlInjectionMatchSet from './waf/sqlInjectionMatchSet';
import WAFWebACL from './waf/webAcl';
import WAFXssMatchSet from './waf/xssMatchSet';
export declare const IAM: {
    Group: typeof IAMGroup;
    Policy: typeof IAMPolicy;
    Role: typeof IAMRole;
    ServiceLinkedRole: typeof IAMServiceLinkedRole;
    UserToGroupAddition: typeof IAMUserToGroupAddition;
    InstanceProfile: typeof IAMInstanceProfile;
    AccessKey: typeof IAMAccessKey;
    User: typeof IAMUser;
    ManagedPolicy: typeof IAMManagedPolicy;
};
import IAMGroup from './iam/group';
import IAMPolicy from './iam/policy';
import IAMRole from './iam/role';
import IAMServiceLinkedRole from './iam/serviceLinkedRole';
import IAMUserToGroupAddition from './iam/userToGroupAddition';
import IAMInstanceProfile from './iam/instanceProfile';
import IAMAccessKey from './iam/accessKey';
import IAMUser from './iam/user';
import IAMManagedPolicy from './iam/managedPolicy';
export declare const CodePipeline: {
    CustomActionType: typeof CodePipelineCustomActionType;
    Webhook: typeof CodePipelineWebhook;
    Pipeline: typeof CodePipelinePipeline;
};
import CodePipelineCustomActionType from './codePipeline/customActionType';
import CodePipelineWebhook from './codePipeline/webhook';
import CodePipelinePipeline from './codePipeline/pipeline';
export declare const Elasticsearch: {
    Domain: typeof ElasticsearchDomain;
};
import ElasticsearchDomain from './elasticsearch/domain';
export declare const WAFRegional: {
    SizeConstraintSet: typeof WAFRegionalSizeConstraintSet;
    SqlInjectionMatchSet: typeof WAFRegionalSqlInjectionMatchSet;
    XssMatchSet: typeof WAFRegionalXssMatchSet;
    ByteMatchSet: typeof WAFRegionalByteMatchSet;
    WebACLAssociation: typeof WAFRegionalWebACLAssociation;
    WebACL: typeof WAFRegionalWebACL;
    Rule: typeof WAFRegionalRule;
    IPSet: typeof WAFRegionalIPSet;
};
import WAFRegionalSizeConstraintSet from './wafRegional/sizeConstraintSet';
import WAFRegionalSqlInjectionMatchSet from './wafRegional/sqlInjectionMatchSet';
import WAFRegionalXssMatchSet from './wafRegional/xssMatchSet';
import WAFRegionalByteMatchSet from './wafRegional/byteMatchSet';
import WAFRegionalWebACLAssociation from './wafRegional/webAclAssociation';
import WAFRegionalWebACL from './wafRegional/webAcl';
import WAFRegionalRule from './wafRegional/rule';
import WAFRegionalIPSet from './wafRegional/ipSet';
export declare const ApiGateway: {
    RequestValidator: typeof ApiGatewayRequestValidator;
    Deployment: typeof ApiGatewayDeployment;
    Authorizer: typeof ApiGatewayAuthorizer;
    DomainName: typeof ApiGatewayDomainName;
    DocumentationPart: typeof ApiGatewayDocumentationPart;
    ApiKey: typeof ApiGatewayApiKey;
    Model: typeof ApiGatewayModel;
    Resource: typeof ApiGatewayResource;
    Account: typeof ApiGatewayAccount;
    RestApi: typeof ApiGatewayRestApi;
    UsagePlan: typeof ApiGatewayUsagePlan;
    BasePathMapping: typeof ApiGatewayBasePathMapping;
    Stage: typeof ApiGatewayStage;
    VpcLink: typeof ApiGatewayVpcLink;
    GatewayResponse: typeof ApiGatewayGatewayResponse;
    ClientCertificate: typeof ApiGatewayClientCertificate;
    Method: typeof ApiGatewayMethod;
    DocumentationVersion: typeof ApiGatewayDocumentationVersion;
    UsagePlanKey: typeof ApiGatewayUsagePlanKey;
};
import ApiGatewayRequestValidator from './apiGateway/requestValidator';
import ApiGatewayDeployment from './apiGateway/deployment';
import ApiGatewayAuthorizer from './apiGateway/authorizer';
import ApiGatewayDomainName from './apiGateway/domainName';
import ApiGatewayDocumentationPart from './apiGateway/documentationPart';
import ApiGatewayApiKey from './apiGateway/apiKey';
import ApiGatewayModel from './apiGateway/model';
import ApiGatewayResource from './apiGateway/resource';
import ApiGatewayAccount from './apiGateway/account';
import ApiGatewayRestApi from './apiGateway/restApi';
import ApiGatewayUsagePlan from './apiGateway/usagePlan';
import ApiGatewayBasePathMapping from './apiGateway/basePathMapping';
import ApiGatewayStage from './apiGateway/stage';
import ApiGatewayVpcLink from './apiGateway/vpcLink';
import ApiGatewayGatewayResponse from './apiGateway/gatewayResponse';
import ApiGatewayClientCertificate from './apiGateway/clientCertificate';
import ApiGatewayMethod from './apiGateway/method';
import ApiGatewayDocumentationVersion from './apiGateway/documentationVersion';
import ApiGatewayUsagePlanKey from './apiGateway/usagePlanKey';
export declare const RDS: {
    DBSecurityGroupIngress: typeof RDSDBSecurityGroupIngress;
    DBCluster: typeof RDSDBCluster;
    DBSubnetGroup: typeof RDSDBSubnetGroup;
    OptionGroup: typeof RDSOptionGroup;
    DBParameterGroup: typeof RDSDBParameterGroup;
    EventSubscription: typeof RDSEventSubscription;
    DBInstance: typeof RDSDBInstance;
    DBSecurityGroup: typeof RDSDBSecurityGroup;
    DBClusterParameterGroup: typeof RDSDBClusterParameterGroup;
};
import RDSDBSecurityGroupIngress from './rds/dbSecurityGroupIngress';
import RDSDBCluster from './rds/dbCluster';
import RDSDBSubnetGroup from './rds/dbSubnetGroup';
import RDSOptionGroup from './rds/optionGroup';
import RDSDBParameterGroup from './rds/dbParameterGroup';
import RDSEventSubscription from './rds/eventSubscription';
import RDSDBInstance from './rds/dbInstance';
import RDSDBSecurityGroup from './rds/dbSecurityGroup';
import RDSDBClusterParameterGroup from './rds/dbClusterParameterGroup';
export declare const WorkSpaces: {
    Workspace: typeof WorkSpacesWorkspace;
};
import WorkSpacesWorkspace from './workSpaces/workspace';
export declare const EMR: {
    InstanceFleetConfig: typeof EMRInstanceFleetConfig;
    Cluster: typeof EMRCluster;
    InstanceGroupConfig: typeof EMRInstanceGroupConfig;
    Step: typeof EMRStep;
    SecurityConfiguration: typeof EMRSecurityConfiguration;
};
import EMRInstanceFleetConfig from './emr/instanceFleetConfig';
import EMRCluster from './emr/cluster';
import EMRInstanceGroupConfig from './emr/instanceGroupConfig';
import EMRStep from './emr/step';
import EMRSecurityConfiguration from './emr/securityConfiguration';
export declare const ApiGatewayV2: {
    Route: typeof ApiGatewayV2Route;
    Integration: typeof ApiGatewayV2Integration;
    Stage: typeof ApiGatewayV2Stage;
    Deployment: typeof ApiGatewayV2Deployment;
    Model: typeof ApiGatewayV2Model;
    Authorizer: typeof ApiGatewayV2Authorizer;
    Api: typeof ApiGatewayV2Api;
    RouteResponse: typeof ApiGatewayV2RouteResponse;
    IntegrationResponse: typeof ApiGatewayV2IntegrationResponse;
};
import ApiGatewayV2Route from './apiGatewayV2/route';
import ApiGatewayV2Integration from './apiGatewayV2/integration';
import ApiGatewayV2Stage from './apiGatewayV2/stage';
import ApiGatewayV2Deployment from './apiGatewayV2/deployment';
import ApiGatewayV2Model from './apiGatewayV2/model';
import ApiGatewayV2Authorizer from './apiGatewayV2/authorizer';
import ApiGatewayV2Api from './apiGatewayV2/api';
import ApiGatewayV2RouteResponse from './apiGatewayV2/routeResponse';
import ApiGatewayV2IntegrationResponse from './apiGatewayV2/integrationResponse';
export declare const Logs: {
    LogGroup: typeof LogsLogGroup;
    MetricFilter: typeof LogsMetricFilter;
    LogStream: typeof LogsLogStream;
    SubscriptionFilter: typeof LogsSubscriptionFilter;
    Destination: typeof LogsDestination;
};
import LogsLogGroup from './logs/logGroup';
import LogsMetricFilter from './logs/metricFilter';
import LogsLogStream from './logs/logStream';
import LogsSubscriptionFilter from './logs/subscriptionFilter';
import LogsDestination from './logs/destination';
export declare const Kinesis: {
    Stream: typeof KinesisStream;
    StreamConsumer: typeof KinesisStreamConsumer;
};
import KinesisStream from './kinesis/stream';
import KinesisStreamConsumer from './kinesis/streamConsumer';
export declare const RAM: {
    ResourceShare: typeof RAMResourceShare;
};
import RAMResourceShare from './ram/resourceShare';
export declare const AutoScaling: {
    LaunchConfiguration: typeof AutoScalingLaunchConfiguration;
    LifecycleHook: typeof AutoScalingLifecycleHook;
    ScalingPolicy: typeof AutoScalingScalingPolicy;
    AutoScalingGroup: typeof AutoScalingAutoScalingGroup;
    ScheduledAction: typeof AutoScalingScheduledAction;
};
import AutoScalingLaunchConfiguration from './autoScaling/launchConfiguration';
import AutoScalingLifecycleHook from './autoScaling/lifecycleHook';
import AutoScalingScalingPolicy from './autoScaling/scalingPolicy';
import AutoScalingAutoScalingGroup from './autoScaling/autoScalingGroup';
import AutoScalingScheduledAction from './autoScaling/scheduledAction';
export declare const SQS: {
    Queue: typeof SQSQueue;
    QueuePolicy: typeof SQSQueuePolicy;
};
import SQSQueue from './sqs/queue';
import SQSQueuePolicy from './sqs/queuePolicy';
export declare const AppStream: {
    ImageBuilder: typeof AppStreamImageBuilder;
    Stack: typeof AppStreamStack;
    DirectoryConfig: typeof AppStreamDirectoryConfig;
    StackFleetAssociation: typeof AppStreamStackFleetAssociation;
    StackUserAssociation: typeof AppStreamStackUserAssociation;
    User: typeof AppStreamUser;
    Fleet: typeof AppStreamFleet;
};
import AppStreamImageBuilder from './appStream/imageBuilder';
import AppStreamStack from './appStream/stack';
import AppStreamDirectoryConfig from './appStream/directoryConfig';
import AppStreamStackFleetAssociation from './appStream/stackFleetAssociation';
import AppStreamStackUserAssociation from './appStream/stackUserAssociation';
import AppStreamUser from './appStream/user';
import AppStreamFleet from './appStream/fleet';
export declare const AutoScalingPlans: {
    ScalingPlan: typeof AutoScalingPlansScalingPlan;
};
import AutoScalingPlansScalingPlan from './autoScalingPlans/scalingPlan';
export declare const Route53: {
    RecordSet: typeof Route53RecordSet;
    HostedZone: typeof Route53HostedZone;
    RecordSetGroup: typeof Route53RecordSetGroup;
    HealthCheck: typeof Route53HealthCheck;
};
import Route53RecordSet from './route53/recordSet';
import Route53HostedZone from './route53/hostedZone';
import Route53RecordSetGroup from './route53/recordSetGroup';
import Route53HealthCheck from './route53/healthCheck';
export declare const CloudWatch: {
    Dashboard: typeof CloudWatchDashboard;
    Alarm: typeof CloudWatchAlarm;
};
import CloudWatchDashboard from './cloudWatch/dashboard';
import CloudWatchAlarm from './cloudWatch/alarm';
export declare const ECS: {
    Cluster: typeof ECSCluster;
    Service: typeof ECSService;
    TaskDefinition: typeof ECSTaskDefinition;
};
import ECSCluster from './ecs/cluster';
import ECSService from './ecs/service';
import ECSTaskDefinition from './ecs/taskDefinition';
export declare const ElasticLoadBalancingV2: {
    ListenerCertificate: typeof ElasticLoadBalancingV2ListenerCertificate;
    LoadBalancer: typeof ElasticLoadBalancingV2LoadBalancer;
    Listener: typeof ElasticLoadBalancingV2Listener;
    ListenerRule: typeof ElasticLoadBalancingV2ListenerRule;
    TargetGroup: typeof ElasticLoadBalancingV2TargetGroup;
};
import ElasticLoadBalancingV2ListenerCertificate from './elasticLoadBalancingV2/listenerCertificate';
import ElasticLoadBalancingV2LoadBalancer from './elasticLoadBalancingV2/loadBalancer';
import ElasticLoadBalancingV2Listener from './elasticLoadBalancingV2/listener';
import ElasticLoadBalancingV2ListenerRule from './elasticLoadBalancingV2/listenerRule';
import ElasticLoadBalancingV2TargetGroup from './elasticLoadBalancingV2/targetGroup';
export declare const StepFunctions: {
    Activity: typeof StepFunctionsActivity;
    StateMachine: typeof StepFunctionsStateMachine;
};
import StepFunctionsActivity from './stepFunctions/activity';
import StepFunctionsStateMachine from './stepFunctions/stateMachine';
export declare const OpsWorks: {
    Volume: typeof OpsWorksVolume;
    App: typeof OpsWorksApp;
    Layer: typeof OpsWorksLayer;
    Stack: typeof OpsWorksStack;
    ElasticLoadBalancerAttachment: typeof OpsWorksElasticLoadBalancerAttachment;
    Instance: typeof OpsWorksInstance;
    UserProfile: typeof OpsWorksUserProfile;
};
import OpsWorksVolume from './opsWorks/volume';
import OpsWorksApp from './opsWorks/app';
import OpsWorksLayer from './opsWorks/layer';
import OpsWorksStack from './opsWorks/stack';
import OpsWorksElasticLoadBalancerAttachment from './opsWorks/elasticLoadBalancerAttachment';
import OpsWorksInstance from './opsWorks/instance';
import OpsWorksUserProfile from './opsWorks/userProfile';
export declare const CloudFront: {
    StreamingDistribution: typeof CloudFrontStreamingDistribution;
    Distribution: typeof CloudFrontDistribution;
    CloudFrontOriginAccessIdentity: typeof CloudFrontCloudFrontOriginAccessIdentity;
};
import CloudFrontStreamingDistribution from './cloudFront/streamingDistribution';
import CloudFrontDistribution from './cloudFront/distribution';
import CloudFrontCloudFrontOriginAccessIdentity from './cloudFront/cloudFrontOriginAccessIdentity';
export declare const GameLift: {
    Alias: typeof GameLiftAlias;
    Build: typeof GameLiftBuild;
    Fleet: typeof GameLiftFleet;
};
import GameLiftAlias from './gameLift/alias';
import GameLiftBuild from './gameLift/build';
import GameLiftFleet from './gameLift/fleet';
export declare const GuardDuty: {
    Filter: typeof GuardDutyFilter;
    ThreatIntelSet: typeof GuardDutyThreatIntelSet;
    Member: typeof GuardDutyMember;
    Detector: typeof GuardDutyDetector;
    IPSet: typeof GuardDutyIPSet;
    Master: typeof GuardDutyMaster;
};
import GuardDutyFilter from './guardDuty/filter';
import GuardDutyThreatIntelSet from './guardDuty/threatIntelSet';
import GuardDutyMember from './guardDuty/member';
import GuardDutyDetector from './guardDuty/detector';
import GuardDutyIPSet from './guardDuty/ipSet';
import GuardDutyMaster from './guardDuty/master';
export declare const DirectoryService: {
    MicrosoftAD: typeof DirectoryServiceMicrosoftAD;
    SimpleAD: typeof DirectoryServiceSimpleAD;
};
import DirectoryServiceMicrosoftAD from './directoryService/microsoftAd';
import DirectoryServiceSimpleAD from './directoryService/simpleAd';
export declare const SNS: {
    Subscription: typeof SNSSubscription;
    Topic: typeof SNSTopic;
    TopicPolicy: typeof SNSTopicPolicy;
};
import SNSSubscription from './sns/subscription';
import SNSTopic from './sns/topic';
import SNSTopicPolicy from './sns/topicPolicy';
export declare const EFS: {
    MountTarget: typeof EFSMountTarget;
    FileSystem: typeof EFSFileSystem;
};
import EFSMountTarget from './efs/mountTarget';
import EFSFileSystem from './efs/fileSystem';
export declare const SSM: {
    Document: typeof SSMDocument;
    PatchBaseline: typeof SSMPatchBaseline;
    MaintenanceWindow: typeof SSMMaintenanceWindow;
    Parameter: typeof SSMParameter;
    ResourceDataSync: typeof SSMResourceDataSync;
    Association: typeof SSMAssociation;
    MaintenanceWindowTask: typeof SSMMaintenanceWindowTask;
    MaintenanceWindowTarget: typeof SSMMaintenanceWindowTarget;
};
import SSMDocument from './ssm/document';
import SSMPatchBaseline from './ssm/patchBaseline';
import SSMMaintenanceWindow from './ssm/maintenanceWindow';
import SSMParameter from './ssm/parameter';
import SSMResourceDataSync from './ssm/resourceDataSync';
import SSMAssociation from './ssm/association';
import SSMMaintenanceWindowTask from './ssm/maintenanceWindowTask';
import SSMMaintenanceWindowTarget from './ssm/maintenanceWindowTarget';
export declare const Config: {
    DeliveryChannel: typeof ConfigDeliveryChannel;
    ConfigurationAggregator: typeof ConfigConfigurationAggregator;
    AggregationAuthorization: typeof ConfigAggregationAuthorization;
    ConfigurationRecorder: typeof ConfigConfigurationRecorder;
    ConfigRule: typeof ConfigConfigRule;
};
import ConfigDeliveryChannel from './config/deliveryChannel';
import ConfigConfigurationAggregator from './config/configurationAggregator';
import ConfigAggregationAuthorization from './config/aggregationAuthorization';
import ConfigConfigurationRecorder from './config/configurationRecorder';
import ConfigConfigRule from './config/configRule';
export declare const SageMaker: {
    Model: typeof SageMakerModel;
    NotebookInstanceLifecycleConfig: typeof SageMakerNotebookInstanceLifecycleConfig;
    EndpointConfig: typeof SageMakerEndpointConfig;
    Endpoint: typeof SageMakerEndpoint;
    NotebookInstance: typeof SageMakerNotebookInstance;
};
import SageMakerModel from './sageMaker/model';
import SageMakerNotebookInstanceLifecycleConfig from './sageMaker/notebookInstanceLifecycleConfig';
import SageMakerEndpointConfig from './sageMaker/endpointConfig';
import SageMakerEndpoint from './sageMaker/endpoint';
import SageMakerNotebookInstance from './sageMaker/notebookInstance';
export declare const KMS: {
    Key: typeof KMSKey;
    Alias: typeof KMSAlias;
};
import KMSKey from './kms/key';
import KMSAlias from './kms/alias';
export declare const Redshift: {
    Cluster: typeof RedshiftCluster;
    ClusterParameterGroup: typeof RedshiftClusterParameterGroup;
    ClusterSecurityGroupIngress: typeof RedshiftClusterSecurityGroupIngress;
    ClusterSubnetGroup: typeof RedshiftClusterSubnetGroup;
    ClusterSecurityGroup: typeof RedshiftClusterSecurityGroup;
};
import RedshiftCluster from './redshift/cluster';
import RedshiftClusterParameterGroup from './redshift/clusterParameterGroup';
import RedshiftClusterSecurityGroupIngress from './redshift/clusterSecurityGroupIngress';
import RedshiftClusterSubnetGroup from './redshift/clusterSubnetGroup';
import RedshiftClusterSecurityGroup from './redshift/clusterSecurityGroup';
export declare const Lambda: {
    EventSourceMapping: typeof LambdaEventSourceMapping;
    LayerVersion: typeof LambdaLayerVersion;
    Alias: typeof LambdaAlias;
    LayerVersionPermission: typeof LambdaLayerVersionPermission;
    Function: typeof LambdaFunction;
    Version: typeof LambdaVersion;
    Permission: typeof LambdaPermission;
};
import LambdaEventSourceMapping from './lambda/eventSourceMapping';
import LambdaLayerVersion from './lambda/layerVersion';
import LambdaAlias from './lambda/alias';
import LambdaLayerVersionPermission from './lambda/layerVersionPermission';
import LambdaFunction from './lambda/function';
import LambdaVersion from './lambda/version';
import LambdaPermission from './lambda/permission';
export declare const CertificateManager: {
    Certificate: typeof CertificateManagerCertificate;
};
import CertificateManagerCertificate from './certificateManager/certificate';
export declare const Inspector: {
    ResourceGroup: typeof InspectorResourceGroup;
    AssessmentTemplate: typeof InspectorAssessmentTemplate;
    AssessmentTarget: typeof InspectorAssessmentTarget;
};
import InspectorResourceGroup from './inspector/resourceGroup';
import InspectorAssessmentTemplate from './inspector/assessmentTemplate';
import InspectorAssessmentTarget from './inspector/assessmentTarget';
export declare const IoT1Click: {
    Project: typeof IoT1ClickProject;
    Device: typeof IoT1ClickDevice;
    Placement: typeof IoT1ClickPlacement;
};
import IoT1ClickProject from './ioT1Click/project';
import IoT1ClickDevice from './ioT1Click/device';
import IoT1ClickPlacement from './ioT1Click/placement';
export declare const IoTAnalytics: {
    Dataset: typeof IoTAnalyticsDataset;
    Channel: typeof IoTAnalyticsChannel;
    Pipeline: typeof IoTAnalyticsPipeline;
    Datastore: typeof IoTAnalyticsDatastore;
};
import IoTAnalyticsDataset from './ioTAnalytics/dataset';
import IoTAnalyticsChannel from './ioTAnalytics/channel';
import IoTAnalyticsPipeline from './ioTAnalytics/pipeline';
import IoTAnalyticsDatastore from './ioTAnalytics/datastore';
export declare const Batch: {
    JobDefinition: typeof BatchJobDefinition;
    JobQueue: typeof BatchJobQueue;
    ComputeEnvironment: typeof BatchComputeEnvironment;
};
import BatchJobDefinition from './batch/jobDefinition';
import BatchJobQueue from './batch/jobQueue';
import BatchComputeEnvironment from './batch/computeEnvironment';
export declare const OpsWorksCM: {
    Server: typeof OpsWorksCMServer;
};
import OpsWorksCMServer from './opsWorksCm/server';
export declare const ElasticLoadBalancing: {
    LoadBalancer: typeof ElasticLoadBalancingLoadBalancer;
};
import ElasticLoadBalancingLoadBalancer from './elasticLoadBalancing/loadBalancer';
export declare const IoT: {
    Thing: typeof IoTThing;
    Policy: typeof IoTPolicy;
    TopicRule: typeof IoTTopicRule;
    PolicyPrincipalAttachment: typeof IoTPolicyPrincipalAttachment;
    ThingPrincipalAttachment: typeof IoTThingPrincipalAttachment;
    Certificate: typeof IoTCertificate;
};
import IoTThing from './iot/thing';
import IoTPolicy from './iot/policy';
import IoTTopicRule from './iot/topicRule';
import IoTPolicyPrincipalAttachment from './iot/policyPrincipalAttachment';
import IoTThingPrincipalAttachment from './iot/thingPrincipalAttachment';
import IoTCertificate from './iot/certificate';
export declare const DMS: {
    Certificate: typeof DMSCertificate;
    ReplicationSubnetGroup: typeof DMSReplicationSubnetGroup;
    EventSubscription: typeof DMSEventSubscription;
    Endpoint: typeof DMSEndpoint;
    ReplicationTask: typeof DMSReplicationTask;
    ReplicationInstance: typeof DMSReplicationInstance;
};
import DMSCertificate from './dms/certificate';
import DMSReplicationSubnetGroup from './dms/replicationSubnetGroup';
import DMSEventSubscription from './dms/eventSubscription';
import DMSEndpoint from './dms/endpoint';
import DMSReplicationTask from './dms/replicationTask';
import DMSReplicationInstance from './dms/replicationInstance';
export declare const Glue: {
    Table: typeof GlueTable;
    Connection: typeof GlueConnection;
    Partition: typeof GluePartition;
    Job: typeof GlueJob;
    Database: typeof GlueDatabase;
    DevEndpoint: typeof GlueDevEndpoint;
    Trigger: typeof GlueTrigger;
    Crawler: typeof GlueCrawler;
    Classifier: typeof GlueClassifier;
};
import GlueTable from './glue/table';
import GlueConnection from './glue/connection';
import GluePartition from './glue/partition';
import GlueJob from './glue/job';
import GlueDatabase from './glue/database';
import GlueDevEndpoint from './glue/devEndpoint';
import GlueTrigger from './glue/trigger';
import GlueCrawler from './glue/crawler';
import GlueClassifier from './glue/classifier';
export declare const ElastiCache: {
    SecurityGroup: typeof ElastiCacheSecurityGroup;
    SubnetGroup: typeof ElastiCacheSubnetGroup;
    SecurityGroupIngress: typeof ElastiCacheSecurityGroupIngress;
    ReplicationGroup: typeof ElastiCacheReplicationGroup;
    ParameterGroup: typeof ElastiCacheParameterGroup;
    CacheCluster: typeof ElastiCacheCacheCluster;
};
import ElastiCacheSecurityGroup from './elastiCache/securityGroup';
import ElastiCacheSubnetGroup from './elastiCache/subnetGroup';
import ElastiCacheSecurityGroupIngress from './elastiCache/securityGroupIngress';
import ElastiCacheReplicationGroup from './elastiCache/replicationGroup';
import ElastiCacheParameterGroup from './elastiCache/parameterGroup';
import ElastiCacheCacheCluster from './elastiCache/cacheCluster';
export declare const CodeDeploy: {
    DeploymentGroup: typeof CodeDeployDeploymentGroup;
    DeploymentConfig: typeof CodeDeployDeploymentConfig;
    Application: typeof CodeDeployApplication;
};
import CodeDeployDeploymentGroup from './codeDeploy/deploymentGroup';
import CodeDeployDeploymentConfig from './codeDeploy/deploymentConfig';
import CodeDeployApplication from './codeDeploy/application';
export declare const SecretsManager: {
    RotationSchedule: typeof SecretsManagerRotationSchedule;
    Secret: typeof SecretsManagerSecret;
    ResourcePolicy: typeof SecretsManagerResourcePolicy;
    SecretTargetAttachment: typeof SecretsManagerSecretTargetAttachment;
};
import SecretsManagerRotationSchedule from './secretsManager/rotationSchedule';
import SecretsManagerSecret from './secretsManager/secret';
import SecretsManagerResourcePolicy from './secretsManager/resourcePolicy';
import SecretsManagerSecretTargetAttachment from './secretsManager/secretTargetAttachment';
export declare const Budgets: {
    Budget: typeof BudgetsBudget;
};
import BudgetsBudget from './budgets/budget';
export declare const DAX: {
    SubnetGroup: typeof DAXSubnetGroup;
    ParameterGroup: typeof DAXParameterGroup;
    Cluster: typeof DAXCluster;
};
import DAXSubnetGroup from './dax/subnetGroup';
import DAXParameterGroup from './dax/parameterGroup';
import DAXCluster from './dax/cluster';
export declare const DataPipeline: {
    Pipeline: typeof DataPipelinePipeline;
};
import DataPipelinePipeline from './dataPipeline/pipeline';
export declare const Route53Resolver: {
    ResolverRule: typeof Route53ResolverResolverRule;
    ResolverRuleAssociation: typeof Route53ResolverResolverRuleAssociation;
    ResolverEndpoint: typeof Route53ResolverResolverEndpoint;
};
import Route53ResolverResolverRule from './route53Resolver/resolverRule';
import Route53ResolverResolverRuleAssociation from './route53Resolver/resolverRuleAssociation';
import Route53ResolverResolverEndpoint from './route53Resolver/resolverEndpoint';
export declare const CloudTrail: {
    Trail: typeof CloudTrailTrail;
};
import CloudTrailTrail from './cloudTrail/trail';
export declare const CloudFormation: {
    WaitCondition: typeof CloudFormationWaitCondition;
    Stack: typeof CloudFormationStack;
    WaitConditionHandle: typeof CloudFormationWaitConditionHandle;
    Macro: typeof CloudFormationMacro;
    CustomResource: typeof CloudFormationCustomResource;
};
import CloudFormationWaitCondition from './cloudFormation/waitCondition';
import CloudFormationStack from './cloudFormation/stack';
import CloudFormationWaitConditionHandle from './cloudFormation/waitConditionHandle';
import CloudFormationMacro from './cloudFormation/macro';
import CloudFormationCustomResource from './cloudFormation/customResource';
export declare const ServiceDiscovery: {
    Instance: typeof ServiceDiscoveryInstance;
    Service: typeof ServiceDiscoveryService;
    PrivateDnsNamespace: typeof ServiceDiscoveryPrivateDnsNamespace;
    PublicDnsNamespace: typeof ServiceDiscoveryPublicDnsNamespace;
    HttpNamespace: typeof ServiceDiscoveryHttpNamespace;
};
import ServiceDiscoveryInstance from './serviceDiscovery/instance';
import ServiceDiscoveryService from './serviceDiscovery/service';
import ServiceDiscoveryPrivateDnsNamespace from './serviceDiscovery/privateDnsNamespace';
import ServiceDiscoveryPublicDnsNamespace from './serviceDiscovery/publicDnsNamespace';
import ServiceDiscoveryHttpNamespace from './serviceDiscovery/httpNamespace';
export declare const ApplicationAutoScaling: {
    ScalingPolicy: typeof ApplicationAutoScalingScalingPolicy;
    ScalableTarget: typeof ApplicationAutoScalingScalableTarget;
};
import ApplicationAutoScalingScalingPolicy from './applicationAutoScaling/scalingPolicy';
import ApplicationAutoScalingScalableTarget from './applicationAutoScaling/scalableTarget';
export declare const S3: {
    Bucket: typeof S3Bucket;
    BucketPolicy: typeof S3BucketPolicy;
};
import S3Bucket from './s3/bucket';
import S3BucketPolicy from './s3/bucketPolicy';
export declare const KinesisFirehose: {
    DeliveryStream: typeof KinesisFirehoseDeliveryStream;
};
import KinesisFirehoseDeliveryStream from './kinesisFirehose/deliveryStream';
export declare const DLM: {
    LifecyclePolicy: typeof DLMLifecyclePolicy;
};
import DLMLifecyclePolicy from './dlm/lifecyclePolicy';
export declare const SDB: {
    Domain: typeof SDBDomain;
};
import SDBDomain from './sdb/domain';
export declare const ECR: {
    Repository: typeof ECRRepository;
};
import ECRRepository from './ecr/repository';
export declare const DynamoDB: {
    Table: typeof DynamoDBTable;
};
import DynamoDBTable from './dynamoDb/table';
export declare const Athena: {
    NamedQuery: typeof AthenaNamedQuery;
};
import AthenaNamedQuery from './athena/namedQuery';
export declare const ASK: {
    Skill: typeof ASKSkill;
};
import ASKSkill from './ask/skill';
export declare const Cloud9: {
    EnvironmentEC2: typeof Cloud9EnvironmentEC2;
};
import Cloud9EnvironmentEC2 from './cloud9/environmentEc2';
export declare const Neptune: {
    DBParameterGroup: typeof NeptuneDBParameterGroup;
    DBClusterParameterGroup: typeof NeptuneDBClusterParameterGroup;
    DBCluster: typeof NeptuneDBCluster;
    DBSubnetGroup: typeof NeptuneDBSubnetGroup;
    DBInstance: typeof NeptuneDBInstance;
};
import NeptuneDBParameterGroup from './neptune/dbParameterGroup';
import NeptuneDBClusterParameterGroup from './neptune/dbClusterParameterGroup';
import NeptuneDBCluster from './neptune/dbCluster';
import NeptuneDBSubnetGroup from './neptune/dbSubnetGroup';
import NeptuneDBInstance from './neptune/dbInstance';
export declare const KinesisAnalytics: {
    ApplicationOutput: typeof KinesisAnalyticsApplicationOutput;
    ApplicationReferenceDataSource: typeof KinesisAnalyticsApplicationReferenceDataSource;
    Application: typeof KinesisAnalyticsApplication;
};
import KinesisAnalyticsApplicationOutput from './kinesisAnalytics/applicationOutput';
import KinesisAnalyticsApplicationReferenceDataSource from './kinesisAnalytics/applicationReferenceDataSource';
import KinesisAnalyticsApplication from './kinesisAnalytics/application';
export declare const DocDB: {
    DBSubnetGroup: typeof DocDBDBSubnetGroup;
    DBInstance: typeof DocDBDBInstance;
    DBCluster: typeof DocDBDBCluster;
    DBClusterParameterGroup: typeof DocDBDBClusterParameterGroup;
};
import DocDBDBSubnetGroup from './docDb/dbSubnetGroup';
import DocDBDBInstance from './docDb/dbInstance';
import DocDBDBCluster from './docDb/dbCluster';
import DocDBDBClusterParameterGroup from './docDb/dbClusterParameterGroup';
export declare const SES: {
    ReceiptFilter: typeof SESReceiptFilter;
    ReceiptRule: typeof SESReceiptRule;
    ConfigurationSetEventDestination: typeof SESConfigurationSetEventDestination;
    Template: typeof SESTemplate;
    ConfigurationSet: typeof SESConfigurationSet;
    ReceiptRuleSet: typeof SESReceiptRuleSet;
};
import SESReceiptFilter from './ses/receiptFilter';
import SESReceiptRule from './ses/receiptRule';
import SESConfigurationSetEventDestination from './ses/configurationSetEventDestination';
import SESTemplate from './ses/template';
import SESConfigurationSet from './ses/configurationSet';
import SESReceiptRuleSet from './ses/receiptRuleSet';
export declare const CodeBuild: {
    Project: typeof CodeBuildProject;
};
import CodeBuildProject from './codeBuild/project';
export declare const FSx: {
    FileSystem: typeof FSxFileSystem;
};
import FSxFileSystem from './fSx/fileSystem';
export declare const RoboMaker: {
    SimulationApplication: typeof RoboMakerSimulationApplication;
    SimulationApplicationVersion: typeof RoboMakerSimulationApplicationVersion;
    RobotApplicationVersion: typeof RoboMakerRobotApplicationVersion;
    RobotApplication: typeof RoboMakerRobotApplication;
    Robot: typeof RoboMakerRobot;
    Fleet: typeof RoboMakerFleet;
};
import RoboMakerSimulationApplication from './roboMaker/simulationApplication';
import RoboMakerSimulationApplicationVersion from './roboMaker/simulationApplicationVersion';
import RoboMakerRobotApplicationVersion from './roboMaker/robotApplicationVersion';
import RoboMakerRobotApplication from './roboMaker/robotApplication';
import RoboMakerRobot from './roboMaker/robot';
import RoboMakerFleet from './roboMaker/fleet';
export declare const KinesisAnalyticsV2: {
    ApplicationOutput: typeof KinesisAnalyticsV2ApplicationOutput;
    ApplicationCloudWatchLoggingOption: typeof KinesisAnalyticsV2ApplicationCloudWatchLoggingOption;
    ApplicationReferenceDataSource: typeof KinesisAnalyticsV2ApplicationReferenceDataSource;
    Application: typeof KinesisAnalyticsV2Application;
};
import KinesisAnalyticsV2ApplicationOutput from './kinesisAnalyticsV2/applicationOutput';
import KinesisAnalyticsV2ApplicationCloudWatchLoggingOption from './kinesisAnalyticsV2/applicationCloudWatchLoggingOption';
import KinesisAnalyticsV2ApplicationReferenceDataSource from './kinesisAnalyticsV2/applicationReferenceDataSource';
import KinesisAnalyticsV2Application from './kinesisAnalyticsV2/application';
export declare const CodeCommit: {
    Repository: typeof CodeCommitRepository;
};
import CodeCommitRepository from './codeCommit/repository';
export declare const EKS: {
    Cluster: typeof EKSCluster;
};
import EKSCluster from './eks/cluster';
declare const _default: {
    ElasticBeanstalk: {
        ConfigurationTemplate: typeof ElasticBeanstalkConfigurationTemplate;
        Application: typeof ElasticBeanstalkApplication;
        Environment: typeof ElasticBeanstalkEnvironment;
        ApplicationVersion: typeof ElasticBeanstalkApplicationVersion;
    };
    AmazonMQ: {
        Broker: typeof AmazonMQBroker;
        ConfigurationAssociation: typeof AmazonMQConfigurationAssociation;
        Configuration: typeof AmazonMQConfiguration;
    };
    EC2: {
        RouteTable: typeof EC2RouteTable;
        VPCPeeringConnection: typeof EC2VPCPeeringConnection;
        PlacementGroup: typeof EC2PlacementGroup;
        TransitGateway: typeof EC2TransitGateway;
        VPCEndpointServicePermissions: typeof EC2VPCEndpointServicePermissions;
        NetworkAclEntry: typeof EC2NetworkAclEntry;
        InternetGateway: typeof EC2InternetGateway;
        LaunchTemplate: typeof EC2LaunchTemplate;
        TransitGatewayRouteTableAssociation: typeof EC2TransitGatewayRouteTableAssociation;
        Volume: typeof EC2Volume;
        SpotFleet: typeof EC2SpotFleet;
        VPNConnectionRoute: typeof EC2VPNConnectionRoute;
        NetworkInterfacePermission: typeof EC2NetworkInterfacePermission;
        EIP: typeof EC2EIP;
        SecurityGroupIngress: typeof EC2SecurityGroupIngress;
        SubnetRouteTableAssociation: typeof EC2SubnetRouteTableAssociation;
        Route: typeof EC2Route;
        FlowLog: typeof EC2FlowLog;
        TransitGatewayRouteTablePropagation: typeof EC2TransitGatewayRouteTablePropagation;
        SecurityGroupEgress: typeof EC2SecurityGroupEgress;
        NetworkInterface: typeof EC2NetworkInterface;
        TransitGatewayAttachment: typeof EC2TransitGatewayAttachment;
        SubnetNetworkAclAssociation: typeof EC2SubnetNetworkAclAssociation;
        SubnetCidrBlock: typeof EC2SubnetCidrBlock;
        NatGateway: typeof EC2NatGateway;
        SecurityGroup: typeof EC2SecurityGroup;
        Subnet: typeof EC2Subnet;
        VPC: typeof EC2VPC;
        Instance: typeof EC2Instance;
        TransitGatewayRoute: typeof EC2TransitGatewayRoute;
        DHCPOptions: typeof EC2DHCPOptions;
        NetworkAcl: typeof EC2NetworkAcl;
        VPNGatewayRoutePropagation: typeof EC2VPNGatewayRoutePropagation;
        EgressOnlyInternetGateway: typeof EC2EgressOnlyInternetGateway;
        NetworkInterfaceAttachment: typeof EC2NetworkInterfaceAttachment;
        CustomerGateway: typeof EC2CustomerGateway;
        TrunkInterfaceAssociation: typeof EC2TrunkInterfaceAssociation;
        VolumeAttachment: typeof EC2VolumeAttachment;
        Host: typeof EC2Host;
        EIPAssociation: typeof EC2EIPAssociation;
        VPNGateway: typeof EC2VPNGateway;
        VPCEndpoint: typeof EC2VPCEndpoint;
        VPCGatewayAttachment: typeof EC2VPCGatewayAttachment;
        VPNConnection: typeof EC2VPNConnection;
        VPCCidrBlock: typeof EC2VPCCidrBlock;
        EC2Fleet: typeof EC2EC2Fleet;
        TransitGatewayRouteTable: typeof EC2TransitGatewayRouteTable;
        VPCDHCPOptionsAssociation: typeof EC2VPCDHCPOptionsAssociation;
        VPCEndpointConnectionNotification: typeof EC2VPCEndpointConnectionNotification;
    };
    AppSync: {
        DataSource: typeof AppSyncDataSource;
        Resolver: typeof AppSyncResolver;
        GraphQLSchema: typeof AppSyncGraphQLSchema;
        GraphQLApi: typeof AppSyncGraphQLApi;
        FunctionConfiguration: typeof AppSyncFunctionConfiguration;
        ApiKey: typeof AppSyncApiKey;
    };
    ServiceCatalog: {
        PortfolioShare: typeof ServiceCatalogPortfolioShare;
        TagOptionAssociation: typeof ServiceCatalogTagOptionAssociation;
        LaunchTemplateConstraint: typeof ServiceCatalogLaunchTemplateConstraint;
        TagOption: typeof ServiceCatalogTagOption;
        PortfolioPrincipalAssociation: typeof ServiceCatalogPortfolioPrincipalAssociation;
        LaunchRoleConstraint: typeof ServiceCatalogLaunchRoleConstraint;
        CloudFormationProvisionedProduct: typeof ServiceCatalogCloudFormationProvisionedProduct;
        CloudFormationProduct: typeof ServiceCatalogCloudFormationProduct;
        PortfolioProductAssociation: typeof ServiceCatalogPortfolioProductAssociation;
        Portfolio: typeof ServiceCatalogPortfolio;
        AcceptedPortfolioShare: typeof ServiceCatalogAcceptedPortfolioShare;
        LaunchNotificationConstraint: typeof ServiceCatalogLaunchNotificationConstraint;
    };
    Cognito: {
        IdentityPoolRoleAttachment: typeof CognitoIdentityPoolRoleAttachment;
        UserPoolGroup: typeof CognitoUserPoolGroup;
        IdentityPool: typeof CognitoIdentityPool;
        UserPoolUser: typeof CognitoUserPoolUser;
        UserPool: typeof CognitoUserPool;
        UserPoolClient: typeof CognitoUserPoolClient;
        UserPoolUserToGroupAttachment: typeof CognitoUserPoolUserToGroupAttachment;
    };
    Events: {
        Rule: typeof EventsRule;
        EventBusPolicy: typeof EventsEventBusPolicy;
    };
    WAF: {
        IPSet: typeof WAFIPSet;
        SizeConstraintSet: typeof WAFSizeConstraintSet;
        Rule: typeof WAFRule;
        ByteMatchSet: typeof WAFByteMatchSet;
        SqlInjectionMatchSet: typeof WAFSqlInjectionMatchSet;
        WebACL: typeof WAFWebACL;
        XssMatchSet: typeof WAFXssMatchSet;
    };
    IAM: {
        Group: typeof IAMGroup;
        Policy: typeof IAMPolicy;
        Role: typeof IAMRole;
        ServiceLinkedRole: typeof IAMServiceLinkedRole;
        UserToGroupAddition: typeof IAMUserToGroupAddition;
        InstanceProfile: typeof IAMInstanceProfile;
        AccessKey: typeof IAMAccessKey;
        User: typeof IAMUser;
        ManagedPolicy: typeof IAMManagedPolicy;
    };
    CodePipeline: {
        CustomActionType: typeof CodePipelineCustomActionType;
        Webhook: typeof CodePipelineWebhook;
        Pipeline: typeof CodePipelinePipeline;
    };
    Elasticsearch: {
        Domain: typeof ElasticsearchDomain;
    };
    WAFRegional: {
        SizeConstraintSet: typeof WAFRegionalSizeConstraintSet;
        SqlInjectionMatchSet: typeof WAFRegionalSqlInjectionMatchSet;
        XssMatchSet: typeof WAFRegionalXssMatchSet;
        ByteMatchSet: typeof WAFRegionalByteMatchSet;
        WebACLAssociation: typeof WAFRegionalWebACLAssociation;
        WebACL: typeof WAFRegionalWebACL;
        Rule: typeof WAFRegionalRule;
        IPSet: typeof WAFRegionalIPSet;
    };
    ApiGateway: {
        RequestValidator: typeof ApiGatewayRequestValidator;
        Deployment: typeof ApiGatewayDeployment;
        Authorizer: typeof ApiGatewayAuthorizer;
        DomainName: typeof ApiGatewayDomainName;
        DocumentationPart: typeof ApiGatewayDocumentationPart;
        ApiKey: typeof ApiGatewayApiKey;
        Model: typeof ApiGatewayModel;
        Resource: typeof ApiGatewayResource;
        Account: typeof ApiGatewayAccount;
        RestApi: typeof ApiGatewayRestApi;
        UsagePlan: typeof ApiGatewayUsagePlan;
        BasePathMapping: typeof ApiGatewayBasePathMapping;
        Stage: typeof ApiGatewayStage;
        VpcLink: typeof ApiGatewayVpcLink;
        GatewayResponse: typeof ApiGatewayGatewayResponse;
        ClientCertificate: typeof ApiGatewayClientCertificate;
        Method: typeof ApiGatewayMethod;
        DocumentationVersion: typeof ApiGatewayDocumentationVersion;
        UsagePlanKey: typeof ApiGatewayUsagePlanKey;
    };
    RDS: {
        DBSecurityGroupIngress: typeof RDSDBSecurityGroupIngress;
        DBCluster: typeof RDSDBCluster;
        DBSubnetGroup: typeof RDSDBSubnetGroup;
        OptionGroup: typeof RDSOptionGroup;
        DBParameterGroup: typeof RDSDBParameterGroup;
        EventSubscription: typeof RDSEventSubscription;
        DBInstance: typeof RDSDBInstance;
        DBSecurityGroup: typeof RDSDBSecurityGroup;
        DBClusterParameterGroup: typeof RDSDBClusterParameterGroup;
    };
    WorkSpaces: {
        Workspace: typeof WorkSpacesWorkspace;
    };
    EMR: {
        InstanceFleetConfig: typeof EMRInstanceFleetConfig;
        Cluster: typeof EMRCluster;
        InstanceGroupConfig: typeof EMRInstanceGroupConfig;
        Step: typeof EMRStep;
        SecurityConfiguration: typeof EMRSecurityConfiguration;
    };
    ApiGatewayV2: {
        Route: typeof ApiGatewayV2Route;
        Integration: typeof ApiGatewayV2Integration;
        Stage: typeof ApiGatewayV2Stage;
        Deployment: typeof ApiGatewayV2Deployment;
        Model: typeof ApiGatewayV2Model;
        Authorizer: typeof ApiGatewayV2Authorizer;
        Api: typeof ApiGatewayV2Api;
        RouteResponse: typeof ApiGatewayV2RouteResponse;
        IntegrationResponse: typeof ApiGatewayV2IntegrationResponse;
    };
    Logs: {
        LogGroup: typeof LogsLogGroup;
        MetricFilter: typeof LogsMetricFilter;
        LogStream: typeof LogsLogStream;
        SubscriptionFilter: typeof LogsSubscriptionFilter;
        Destination: typeof LogsDestination;
    };
    Kinesis: {
        Stream: typeof KinesisStream;
        StreamConsumer: typeof KinesisStreamConsumer;
    };
    RAM: {
        ResourceShare: typeof RAMResourceShare;
    };
    AutoScaling: {
        LaunchConfiguration: typeof AutoScalingLaunchConfiguration;
        LifecycleHook: typeof AutoScalingLifecycleHook;
        ScalingPolicy: typeof AutoScalingScalingPolicy;
        AutoScalingGroup: typeof AutoScalingAutoScalingGroup;
        ScheduledAction: typeof AutoScalingScheduledAction;
    };
    SQS: {
        Queue: typeof SQSQueue;
        QueuePolicy: typeof SQSQueuePolicy;
    };
    AppStream: {
        ImageBuilder: typeof AppStreamImageBuilder;
        Stack: typeof AppStreamStack;
        DirectoryConfig: typeof AppStreamDirectoryConfig;
        StackFleetAssociation: typeof AppStreamStackFleetAssociation;
        StackUserAssociation: typeof AppStreamStackUserAssociation;
        User: typeof AppStreamUser;
        Fleet: typeof AppStreamFleet;
    };
    AutoScalingPlans: {
        ScalingPlan: typeof AutoScalingPlansScalingPlan;
    };
    Route53: {
        RecordSet: typeof Route53RecordSet;
        HostedZone: typeof Route53HostedZone;
        RecordSetGroup: typeof Route53RecordSetGroup;
        HealthCheck: typeof Route53HealthCheck;
    };
    CloudWatch: {
        Dashboard: typeof CloudWatchDashboard;
        Alarm: typeof CloudWatchAlarm;
    };
    ECS: {
        Cluster: typeof ECSCluster;
        Service: typeof ECSService;
        TaskDefinition: typeof ECSTaskDefinition;
    };
    ElasticLoadBalancingV2: {
        ListenerCertificate: typeof ElasticLoadBalancingV2ListenerCertificate;
        LoadBalancer: typeof ElasticLoadBalancingV2LoadBalancer;
        Listener: typeof ElasticLoadBalancingV2Listener;
        ListenerRule: typeof ElasticLoadBalancingV2ListenerRule;
        TargetGroup: typeof ElasticLoadBalancingV2TargetGroup;
    };
    StepFunctions: {
        Activity: typeof StepFunctionsActivity;
        StateMachine: typeof StepFunctionsStateMachine;
    };
    OpsWorks: {
        Volume: typeof OpsWorksVolume;
        App: typeof OpsWorksApp;
        Layer: typeof OpsWorksLayer;
        Stack: typeof OpsWorksStack;
        ElasticLoadBalancerAttachment: typeof OpsWorksElasticLoadBalancerAttachment;
        Instance: typeof OpsWorksInstance;
        UserProfile: typeof OpsWorksUserProfile;
    };
    CloudFront: {
        StreamingDistribution: typeof CloudFrontStreamingDistribution;
        Distribution: typeof CloudFrontDistribution;
        CloudFrontOriginAccessIdentity: typeof CloudFrontCloudFrontOriginAccessIdentity;
    };
    GameLift: {
        Alias: typeof GameLiftAlias;
        Build: typeof GameLiftBuild;
        Fleet: typeof GameLiftFleet;
    };
    GuardDuty: {
        Filter: typeof GuardDutyFilter;
        ThreatIntelSet: typeof GuardDutyThreatIntelSet;
        Member: typeof GuardDutyMember;
        Detector: typeof GuardDutyDetector;
        IPSet: typeof GuardDutyIPSet;
        Master: typeof GuardDutyMaster;
    };
    DirectoryService: {
        MicrosoftAD: typeof DirectoryServiceMicrosoftAD;
        SimpleAD: typeof DirectoryServiceSimpleAD;
    };
    SNS: {
        Subscription: typeof SNSSubscription;
        Topic: typeof SNSTopic;
        TopicPolicy: typeof SNSTopicPolicy;
    };
    EFS: {
        MountTarget: typeof EFSMountTarget;
        FileSystem: typeof EFSFileSystem;
    };
    SSM: {
        Document: typeof SSMDocument;
        PatchBaseline: typeof SSMPatchBaseline;
        MaintenanceWindow: typeof SSMMaintenanceWindow;
        Parameter: typeof SSMParameter;
        ResourceDataSync: typeof SSMResourceDataSync;
        Association: typeof SSMAssociation;
        MaintenanceWindowTask: typeof SSMMaintenanceWindowTask;
        MaintenanceWindowTarget: typeof SSMMaintenanceWindowTarget;
    };
    Config: {
        DeliveryChannel: typeof ConfigDeliveryChannel;
        ConfigurationAggregator: typeof ConfigConfigurationAggregator;
        AggregationAuthorization: typeof ConfigAggregationAuthorization;
        ConfigurationRecorder: typeof ConfigConfigurationRecorder;
        ConfigRule: typeof ConfigConfigRule;
    };
    SageMaker: {
        Model: typeof SageMakerModel;
        NotebookInstanceLifecycleConfig: typeof SageMakerNotebookInstanceLifecycleConfig;
        EndpointConfig: typeof SageMakerEndpointConfig;
        Endpoint: typeof SageMakerEndpoint;
        NotebookInstance: typeof SageMakerNotebookInstance;
    };
    KMS: {
        Key: typeof KMSKey;
        Alias: typeof KMSAlias;
    };
    Redshift: {
        Cluster: typeof RedshiftCluster;
        ClusterParameterGroup: typeof RedshiftClusterParameterGroup;
        ClusterSecurityGroupIngress: typeof RedshiftClusterSecurityGroupIngress;
        ClusterSubnetGroup: typeof RedshiftClusterSubnetGroup;
        ClusterSecurityGroup: typeof RedshiftClusterSecurityGroup;
    };
    Lambda: {
        EventSourceMapping: typeof LambdaEventSourceMapping;
        LayerVersion: typeof LambdaLayerVersion;
        Alias: typeof LambdaAlias;
        LayerVersionPermission: typeof LambdaLayerVersionPermission;
        Function: typeof LambdaFunction;
        Version: typeof LambdaVersion;
        Permission: typeof LambdaPermission;
    };
    CertificateManager: {
        Certificate: typeof CertificateManagerCertificate;
    };
    Inspector: {
        ResourceGroup: typeof InspectorResourceGroup;
        AssessmentTemplate: typeof InspectorAssessmentTemplate;
        AssessmentTarget: typeof InspectorAssessmentTarget;
    };
    IoT1Click: {
        Project: typeof IoT1ClickProject;
        Device: typeof IoT1ClickDevice;
        Placement: typeof IoT1ClickPlacement;
    };
    IoTAnalytics: {
        Dataset: typeof IoTAnalyticsDataset;
        Channel: typeof IoTAnalyticsChannel;
        Pipeline: typeof IoTAnalyticsPipeline;
        Datastore: typeof IoTAnalyticsDatastore;
    };
    Batch: {
        JobDefinition: typeof BatchJobDefinition;
        JobQueue: typeof BatchJobQueue;
        ComputeEnvironment: typeof BatchComputeEnvironment;
    };
    OpsWorksCM: {
        Server: typeof OpsWorksCMServer;
    };
    ElasticLoadBalancing: {
        LoadBalancer: typeof ElasticLoadBalancingLoadBalancer;
    };
    IoT: {
        Thing: typeof IoTThing;
        Policy: typeof IoTPolicy;
        TopicRule: typeof IoTTopicRule;
        PolicyPrincipalAttachment: typeof IoTPolicyPrincipalAttachment;
        ThingPrincipalAttachment: typeof IoTThingPrincipalAttachment;
        Certificate: typeof IoTCertificate;
    };
    DMS: {
        Certificate: typeof DMSCertificate;
        ReplicationSubnetGroup: typeof DMSReplicationSubnetGroup;
        EventSubscription: typeof DMSEventSubscription;
        Endpoint: typeof DMSEndpoint;
        ReplicationTask: typeof DMSReplicationTask;
        ReplicationInstance: typeof DMSReplicationInstance;
    };
    Glue: {
        Table: typeof GlueTable;
        Connection: typeof GlueConnection;
        Partition: typeof GluePartition;
        Job: typeof GlueJob;
        Database: typeof GlueDatabase;
        DevEndpoint: typeof GlueDevEndpoint;
        Trigger: typeof GlueTrigger;
        Crawler: typeof GlueCrawler;
        Classifier: typeof GlueClassifier;
    };
    ElastiCache: {
        SecurityGroup: typeof ElastiCacheSecurityGroup;
        SubnetGroup: typeof ElastiCacheSubnetGroup;
        SecurityGroupIngress: typeof ElastiCacheSecurityGroupIngress;
        ReplicationGroup: typeof ElastiCacheReplicationGroup;
        ParameterGroup: typeof ElastiCacheParameterGroup;
        CacheCluster: typeof ElastiCacheCacheCluster;
    };
    CodeDeploy: {
        DeploymentGroup: typeof CodeDeployDeploymentGroup;
        DeploymentConfig: typeof CodeDeployDeploymentConfig;
        Application: typeof CodeDeployApplication;
    };
    SecretsManager: {
        RotationSchedule: typeof SecretsManagerRotationSchedule;
        Secret: typeof SecretsManagerSecret;
        ResourcePolicy: typeof SecretsManagerResourcePolicy;
        SecretTargetAttachment: typeof SecretsManagerSecretTargetAttachment;
    };
    Budgets: {
        Budget: typeof BudgetsBudget;
    };
    DAX: {
        SubnetGroup: typeof DAXSubnetGroup;
        ParameterGroup: typeof DAXParameterGroup;
        Cluster: typeof DAXCluster;
    };
    DataPipeline: {
        Pipeline: typeof DataPipelinePipeline;
    };
    Route53Resolver: {
        ResolverRule: typeof Route53ResolverResolverRule;
        ResolverRuleAssociation: typeof Route53ResolverResolverRuleAssociation;
        ResolverEndpoint: typeof Route53ResolverResolverEndpoint;
    };
    CloudTrail: {
        Trail: typeof CloudTrailTrail;
    };
    CloudFormation: {
        WaitCondition: typeof CloudFormationWaitCondition;
        Stack: typeof CloudFormationStack;
        WaitConditionHandle: typeof CloudFormationWaitConditionHandle;
        Macro: typeof CloudFormationMacro;
        CustomResource: typeof CloudFormationCustomResource;
    };
    ServiceDiscovery: {
        Instance: typeof ServiceDiscoveryInstance;
        Service: typeof ServiceDiscoveryService;
        PrivateDnsNamespace: typeof ServiceDiscoveryPrivateDnsNamespace;
        PublicDnsNamespace: typeof ServiceDiscoveryPublicDnsNamespace;
        HttpNamespace: typeof ServiceDiscoveryHttpNamespace;
    };
    ApplicationAutoScaling: {
        ScalingPolicy: typeof ApplicationAutoScalingScalingPolicy;
        ScalableTarget: typeof ApplicationAutoScalingScalableTarget;
    };
    S3: {
        Bucket: typeof S3Bucket;
        BucketPolicy: typeof S3BucketPolicy;
    };
    KinesisFirehose: {
        DeliveryStream: typeof KinesisFirehoseDeliveryStream;
    };
    DLM: {
        LifecyclePolicy: typeof DLMLifecyclePolicy;
    };
    SDB: {
        Domain: typeof SDBDomain;
    };
    ECR: {
        Repository: typeof ECRRepository;
    };
    DynamoDB: {
        Table: typeof DynamoDBTable;
    };
    Athena: {
        NamedQuery: typeof AthenaNamedQuery;
    };
    ASK: {
        Skill: typeof ASKSkill;
    };
    Cloud9: {
        EnvironmentEC2: typeof Cloud9EnvironmentEC2;
    };
    Neptune: {
        DBParameterGroup: typeof NeptuneDBParameterGroup;
        DBClusterParameterGroup: typeof NeptuneDBClusterParameterGroup;
        DBCluster: typeof NeptuneDBCluster;
        DBSubnetGroup: typeof NeptuneDBSubnetGroup;
        DBInstance: typeof NeptuneDBInstance;
    };
    KinesisAnalytics: {
        ApplicationOutput: typeof KinesisAnalyticsApplicationOutput;
        ApplicationReferenceDataSource: typeof KinesisAnalyticsApplicationReferenceDataSource;
        Application: typeof KinesisAnalyticsApplication;
    };
    DocDB: {
        DBSubnetGroup: typeof DocDBDBSubnetGroup;
        DBInstance: typeof DocDBDBInstance;
        DBCluster: typeof DocDBDBCluster;
        DBClusterParameterGroup: typeof DocDBDBClusterParameterGroup;
    };
    SES: {
        ReceiptFilter: typeof SESReceiptFilter;
        ReceiptRule: typeof SESReceiptRule;
        ConfigurationSetEventDestination: typeof SESConfigurationSetEventDestination;
        Template: typeof SESTemplate;
        ConfigurationSet: typeof SESConfigurationSet;
        ReceiptRuleSet: typeof SESReceiptRuleSet;
    };
    CodeBuild: {
        Project: typeof CodeBuildProject;
    };
    FSx: {
        FileSystem: typeof FSxFileSystem;
    };
    RoboMaker: {
        SimulationApplication: typeof RoboMakerSimulationApplication;
        SimulationApplicationVersion: typeof RoboMakerSimulationApplicationVersion;
        RobotApplicationVersion: typeof RoboMakerRobotApplicationVersion;
        RobotApplication: typeof RoboMakerRobotApplication;
        Robot: typeof RoboMakerRobot;
        Fleet: typeof RoboMakerFleet;
    };
    KinesisAnalyticsV2: {
        ApplicationOutput: typeof KinesisAnalyticsV2ApplicationOutput;
        ApplicationCloudWatchLoggingOption: typeof KinesisAnalyticsV2ApplicationCloudWatchLoggingOption;
        ApplicationReferenceDataSource: typeof KinesisAnalyticsV2ApplicationReferenceDataSource;
        Application: typeof KinesisAnalyticsV2Application;
    };
    CodeCommit: {
        Repository: typeof CodeCommitRepository;
    };
    EKS: {
        Cluster: typeof EKSCluster;
    };
};
export default _default;
