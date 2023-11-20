"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connect = exports.Config = exports.Comprehend = exports.Cognito = exports.CodeStarNotifications = exports.CodeStarConnections = exports.CodeStar = exports.CodePipeline = exports.CodeGuruReviewer = exports.CodeGuruProfiler = exports.CodeDeploy = exports.CodeCommit = exports.CodeBuild = exports.CodeArtifact = exports.CloudWatch = exports.CloudTrail = exports.CloudFront = exports.CloudFormation = exports.Cloud9 = exports.CleanRooms = exports.Chatbot = exports.CertificateManager = exports.Cassandra = exports.CE = exports.Budgets = exports.Batch = exports.BackupGateway = exports.Backup = exports.AutoScalingPlans = exports.AutoScaling = exports.AuditManager = exports.Athena = exports.ApplicationInsights = exports.ApplicationAutoScaling = exports.AppSync = exports.AppStream = exports.AppRunner = exports.AppMesh = exports.AppIntegrations = exports.AppFlow = exports.AppConfig = exports.ApiGatewayV2 = exports.ApiGateway = exports.AmplifyUIBuilder = exports.Amplify = exports.AmazonMQ = exports.AccessAnalyzer = exports.APS = exports.ACMPCA = exports.SDC = void 0;
exports.InternetMonitor = exports.InspectorV2 = exports.Inspector = exports.ImageBuilder = exports.IdentityStore = exports.IVSChat = exports.IVS = exports.IAM = exports.GuardDuty = exports.GreengrassV2 = exports.Greengrass = exports.Grafana = exports.Glue = exports.GlobalAccelerator = exports.GameLift = exports.Forecast = exports.FSx = exports.FMS = exports.FIS = exports.Evidently = exports.Events = exports.EventSchemas = exports.EntityResolution = exports.Elasticsearch = exports.ElasticLoadBalancingV2 = exports.ElasticLoadBalancing = exports.ElasticBeanstalk = exports.ElastiCache = exports.EMRServerless = exports.EMRContainers = exports.EMR = exports.EKS = exports.EFS = exports.ECS = exports.ECR = exports.EC2 = exports.DynamoDB = exports.DocDBElastic = exports.DocDB = exports.DirectoryService = exports.DevOpsGuru = exports.Detective = exports.DataSync = exports.DataPipeline = exports.DataBrew = exports.DMS = exports.DLM = exports.DAX = exports.CustomerProfiles = exports.ControlTower = void 0;
exports.OpsWorks = exports.OpenSearchService = exports.OpenSearchServerless = exports.Oam = exports.OSIS = exports.NimbleStudio = exports.NetworkManager = exports.NetworkFirewall = exports.Neptune = exports.MemoryDB = exports.MediaTailor = exports.MediaStore = exports.MediaPackageV2 = exports.MediaPackage = exports.MediaLive = exports.MediaConvert = exports.MediaConnect = exports.ManagedBlockchain = exports.Macie = exports.MWAA = exports.MSK = exports.M2 = exports.LookoutVision = exports.LookoutMetrics = exports.Logs = exports.Location = exports.Lightsail = exports.LicenseManager = exports.Lex = exports.Lambda = exports.LakeFormation = exports.KinesisVideo = exports.KinesisFirehose = exports.KinesisAnalyticsV2 = exports.KinesisAnalytics = exports.Kinesis = exports.KendraRanking = exports.Kendra = exports.KafkaConnect = exports.KMS = exports.IoTWireless = exports.IoTTwinMaker = exports.IoTThingsGraph = exports.IoTSiteWise = exports.IoTFleetHub = exports.IoTEvents = exports.IoTCoreDeviceAdvisor = exports.IoTAnalytics = exports.IoT = exports.IoT1Click = void 0;
exports.VerifiedPermissions = exports.Transfer = exports.Timestream = exports.SystemsManagerSAP = exports.Synthetics = exports.SupportApp = exports.StepFunctions = exports.Signer = exports.Shield = exports.ServiceDiscovery = exports.ServiceCatalogAppRegistry = exports.ServiceCatalog = exports.SecurityHub = exports.SecretsManager = exports.Scheduler = exports.SageMaker = exports.SSO = exports.SSMIncidents = exports.SSMContacts = exports.SSM = exports.SQS = exports.SNS = exports.SES = exports.SDB = exports.S3Outposts = exports.S3ObjectLambda = exports.S3 = exports.Route53Resolver = exports.Route53 = exports.RolesAnywhere = exports.RoboMaker = exports.ResourceGroups = exports.ResourceExplorer2 = exports.ResilienceHub = exports.Rekognition = exports.RefactorSpaces = exports.RedshiftServerless = exports.Redshift = exports.RUM = exports.RDS = exports.RAM = exports.QuickSight = exports.QLDB = exports.Proton = exports.Pipes = exports.Pinpoint = exports.Personalize = exports.PCAConnectorAD = exports.Organizations = exports.OpsWorksCM = void 0;
exports.DeviceFarm = exports.Route53RecoveryReadiness = exports.Route53RecoveryControl = exports.CUR = exports.BillingConductor = exports.IoTFleetWise = exports.FinSpace = exports.HealthImaging = exports.ConnectCampaigns = exports.SimSpaceWeaver = exports.Panorama = exports.Omics = exports.GammaDilithium = exports.FraudDetector = exports.PinpointEmail = exports.HealthLake = exports.CodeTest = exports.LookoutEquipment = exports.GroundStation = exports.ASK = exports.XRay = exports.WorkSpacesWeb = exports.WorkSpaces = exports.Wisdom = exports.WAFv2 = exports.WAFRegional = exports.WAF = exports.VpcLattice = exports.VoiceID = void 0;
const sdc_1 = require("./sdc");
exports.SDC = sdc_1.default;
const acmpca_1 = require("./acmpca");
exports.ACMPCA = acmpca_1.default;
const aps_1 = require("./aps");
exports.APS = aps_1.default;
const accessAnalyzer_1 = require("./accessAnalyzer");
exports.AccessAnalyzer = accessAnalyzer_1.default;
const amazonMq_1 = require("./amazonMq");
exports.AmazonMQ = amazonMq_1.default;
const amplify_1 = require("./amplify");
exports.Amplify = amplify_1.default;
const amplifyUiBuilder_1 = require("./amplifyUiBuilder");
exports.AmplifyUIBuilder = amplifyUiBuilder_1.default;
const apiGateway_1 = require("./apiGateway");
exports.ApiGateway = apiGateway_1.default;
const apiGatewayV2_1 = require("./apiGatewayV2");
exports.ApiGatewayV2 = apiGatewayV2_1.default;
const appConfig_1 = require("./appConfig");
exports.AppConfig = appConfig_1.default;
const appFlow_1 = require("./appFlow");
exports.AppFlow = appFlow_1.default;
const appIntegrations_1 = require("./appIntegrations");
exports.AppIntegrations = appIntegrations_1.default;
const appMesh_1 = require("./appMesh");
exports.AppMesh = appMesh_1.default;
const appRunner_1 = require("./appRunner");
exports.AppRunner = appRunner_1.default;
const appStream_1 = require("./appStream");
exports.AppStream = appStream_1.default;
const appSync_1 = require("./appSync");
exports.AppSync = appSync_1.default;
const applicationAutoScaling_1 = require("./applicationAutoScaling");
exports.ApplicationAutoScaling = applicationAutoScaling_1.default;
const applicationInsights_1 = require("./applicationInsights");
exports.ApplicationInsights = applicationInsights_1.default;
const athena_1 = require("./athena");
exports.Athena = athena_1.default;
const auditManager_1 = require("./auditManager");
exports.AuditManager = auditManager_1.default;
const autoScaling_1 = require("./autoScaling");
exports.AutoScaling = autoScaling_1.default;
const autoScalingPlans_1 = require("./autoScalingPlans");
exports.AutoScalingPlans = autoScalingPlans_1.default;
const backup_1 = require("./backup");
exports.Backup = backup_1.default;
const backupGateway_1 = require("./backupGateway");
exports.BackupGateway = backupGateway_1.default;
const batch_1 = require("./batch");
exports.Batch = batch_1.default;
const budgets_1 = require("./budgets");
exports.Budgets = budgets_1.default;
const ce_1 = require("./ce");
exports.CE = ce_1.default;
const cassandra_1 = require("./cassandra");
exports.Cassandra = cassandra_1.default;
const certificateManager_1 = require("./certificateManager");
exports.CertificateManager = certificateManager_1.default;
const chatbot_1 = require("./chatbot");
exports.Chatbot = chatbot_1.default;
const cleanRooms_1 = require("./cleanRooms");
exports.CleanRooms = cleanRooms_1.default;
const cloud9_1 = require("./cloud9");
exports.Cloud9 = cloud9_1.default;
const cloudFormation_1 = require("./cloudFormation");
exports.CloudFormation = cloudFormation_1.default;
const cloudFront_1 = require("./cloudFront");
exports.CloudFront = cloudFront_1.default;
const cloudTrail_1 = require("./cloudTrail");
exports.CloudTrail = cloudTrail_1.default;
const cloudWatch_1 = require("./cloudWatch");
exports.CloudWatch = cloudWatch_1.default;
const codeArtifact_1 = require("./codeArtifact");
exports.CodeArtifact = codeArtifact_1.default;
const codeBuild_1 = require("./codeBuild");
exports.CodeBuild = codeBuild_1.default;
const codeCommit_1 = require("./codeCommit");
exports.CodeCommit = codeCommit_1.default;
const codeDeploy_1 = require("./codeDeploy");
exports.CodeDeploy = codeDeploy_1.default;
const codeGuruProfiler_1 = require("./codeGuruProfiler");
exports.CodeGuruProfiler = codeGuruProfiler_1.default;
const codeGuruReviewer_1 = require("./codeGuruReviewer");
exports.CodeGuruReviewer = codeGuruReviewer_1.default;
const codePipeline_1 = require("./codePipeline");
exports.CodePipeline = codePipeline_1.default;
const codeStar_1 = require("./codeStar");
exports.CodeStar = codeStar_1.default;
const codeStarConnections_1 = require("./codeStarConnections");
exports.CodeStarConnections = codeStarConnections_1.default;
const codeStarNotifications_1 = require("./codeStarNotifications");
exports.CodeStarNotifications = codeStarNotifications_1.default;
const cognito_1 = require("./cognito");
exports.Cognito = cognito_1.default;
const comprehend_1 = require("./comprehend");
exports.Comprehend = comprehend_1.default;
const config_1 = require("./config");
exports.Config = config_1.default;
const connect_1 = require("./connect");
exports.Connect = connect_1.default;
const controlTower_1 = require("./controlTower");
exports.ControlTower = controlTower_1.default;
const customerProfiles_1 = require("./customerProfiles");
exports.CustomerProfiles = customerProfiles_1.default;
const dax_1 = require("./dax");
exports.DAX = dax_1.default;
const dlm_1 = require("./dlm");
exports.DLM = dlm_1.default;
const dms_1 = require("./dms");
exports.DMS = dms_1.default;
const dataBrew_1 = require("./dataBrew");
exports.DataBrew = dataBrew_1.default;
const dataPipeline_1 = require("./dataPipeline");
exports.DataPipeline = dataPipeline_1.default;
const dataSync_1 = require("./dataSync");
exports.DataSync = dataSync_1.default;
const detective_1 = require("./detective");
exports.Detective = detective_1.default;
const devOpsGuru_1 = require("./devOpsGuru");
exports.DevOpsGuru = devOpsGuru_1.default;
const directoryService_1 = require("./directoryService");
exports.DirectoryService = directoryService_1.default;
const docDb_1 = require("./docDb");
exports.DocDB = docDb_1.default;
const docDbElastic_1 = require("./docDbElastic");
exports.DocDBElastic = docDbElastic_1.default;
const dynamoDb_1 = require("./dynamoDb");
exports.DynamoDB = dynamoDb_1.default;
const ec2_1 = require("./ec2");
exports.EC2 = ec2_1.default;
const ecr_1 = require("./ecr");
exports.ECR = ecr_1.default;
const ecs_1 = require("./ecs");
exports.ECS = ecs_1.default;
const efs_1 = require("./efs");
exports.EFS = efs_1.default;
const eks_1 = require("./eks");
exports.EKS = eks_1.default;
const emr_1 = require("./emr");
exports.EMR = emr_1.default;
const emrContainers_1 = require("./emrContainers");
exports.EMRContainers = emrContainers_1.default;
const emrServerless_1 = require("./emrServerless");
exports.EMRServerless = emrServerless_1.default;
const elastiCache_1 = require("./elastiCache");
exports.ElastiCache = elastiCache_1.default;
const elasticBeanstalk_1 = require("./elasticBeanstalk");
exports.ElasticBeanstalk = elasticBeanstalk_1.default;
const elasticLoadBalancing_1 = require("./elasticLoadBalancing");
exports.ElasticLoadBalancing = elasticLoadBalancing_1.default;
const elasticLoadBalancingV2_1 = require("./elasticLoadBalancingV2");
exports.ElasticLoadBalancingV2 = elasticLoadBalancingV2_1.default;
const elasticsearch_1 = require("./elasticsearch");
exports.Elasticsearch = elasticsearch_1.default;
const entityResolution_1 = require("./entityResolution");
exports.EntityResolution = entityResolution_1.default;
const eventSchemas_1 = require("./eventSchemas");
exports.EventSchemas = eventSchemas_1.default;
const events_1 = require("./events");
exports.Events = events_1.default;
const evidently_1 = require("./evidently");
exports.Evidently = evidently_1.default;
const fis_1 = require("./fis");
exports.FIS = fis_1.default;
const fms_1 = require("./fms");
exports.FMS = fms_1.default;
const fSx_1 = require("./fSx");
exports.FSx = fSx_1.default;
const forecast_1 = require("./forecast");
exports.Forecast = forecast_1.default;
const gameLift_1 = require("./gameLift");
exports.GameLift = gameLift_1.default;
const globalAccelerator_1 = require("./globalAccelerator");
exports.GlobalAccelerator = globalAccelerator_1.default;
const glue_1 = require("./glue");
exports.Glue = glue_1.default;
const grafana_1 = require("./grafana");
exports.Grafana = grafana_1.default;
const greengrass_1 = require("./greengrass");
exports.Greengrass = greengrass_1.default;
const greengrassV2_1 = require("./greengrassV2");
exports.GreengrassV2 = greengrassV2_1.default;
const guardDuty_1 = require("./guardDuty");
exports.GuardDuty = guardDuty_1.default;
const iam_1 = require("./iam");
exports.IAM = iam_1.default;
const ivs_1 = require("./ivs");
exports.IVS = ivs_1.default;
const ivsChat_1 = require("./ivsChat");
exports.IVSChat = ivsChat_1.default;
const identityStore_1 = require("./identityStore");
exports.IdentityStore = identityStore_1.default;
const imageBuilder_1 = require("./imageBuilder");
exports.ImageBuilder = imageBuilder_1.default;
const inspector_1 = require("./inspector");
exports.Inspector = inspector_1.default;
const inspectorV2_1 = require("./inspectorV2");
exports.InspectorV2 = inspectorV2_1.default;
const internetMonitor_1 = require("./internetMonitor");
exports.InternetMonitor = internetMonitor_1.default;
const ioT1Click_1 = require("./ioT1Click");
exports.IoT1Click = ioT1Click_1.default;
const iot_1 = require("./iot");
exports.IoT = iot_1.default;
const ioTAnalytics_1 = require("./ioTAnalytics");
exports.IoTAnalytics = ioTAnalytics_1.default;
const ioTCoreDeviceAdvisor_1 = require("./ioTCoreDeviceAdvisor");
exports.IoTCoreDeviceAdvisor = ioTCoreDeviceAdvisor_1.default;
const ioTEvents_1 = require("./ioTEvents");
exports.IoTEvents = ioTEvents_1.default;
const ioTFleetHub_1 = require("./ioTFleetHub");
exports.IoTFleetHub = ioTFleetHub_1.default;
const ioTSiteWise_1 = require("./ioTSiteWise");
exports.IoTSiteWise = ioTSiteWise_1.default;
const ioTThingsGraph_1 = require("./ioTThingsGraph");
exports.IoTThingsGraph = ioTThingsGraph_1.default;
const ioTTwinMaker_1 = require("./ioTTwinMaker");
exports.IoTTwinMaker = ioTTwinMaker_1.default;
const ioTWireless_1 = require("./ioTWireless");
exports.IoTWireless = ioTWireless_1.default;
const kms_1 = require("./kms");
exports.KMS = kms_1.default;
const kafkaConnect_1 = require("./kafkaConnect");
exports.KafkaConnect = kafkaConnect_1.default;
const kendra_1 = require("./kendra");
exports.Kendra = kendra_1.default;
const kendraRanking_1 = require("./kendraRanking");
exports.KendraRanking = kendraRanking_1.default;
const kinesis_1 = require("./kinesis");
exports.Kinesis = kinesis_1.default;
const kinesisAnalytics_1 = require("./kinesisAnalytics");
exports.KinesisAnalytics = kinesisAnalytics_1.default;
const kinesisAnalyticsV2_1 = require("./kinesisAnalyticsV2");
exports.KinesisAnalyticsV2 = kinesisAnalyticsV2_1.default;
const kinesisFirehose_1 = require("./kinesisFirehose");
exports.KinesisFirehose = kinesisFirehose_1.default;
const kinesisVideo_1 = require("./kinesisVideo");
exports.KinesisVideo = kinesisVideo_1.default;
const lakeFormation_1 = require("./lakeFormation");
exports.LakeFormation = lakeFormation_1.default;
const lambda_1 = require("./lambda");
exports.Lambda = lambda_1.default;
const lex_1 = require("./lex");
exports.Lex = lex_1.default;
const licenseManager_1 = require("./licenseManager");
exports.LicenseManager = licenseManager_1.default;
const lightsail_1 = require("./lightsail");
exports.Lightsail = lightsail_1.default;
const location_1 = require("./location");
exports.Location = location_1.default;
const logs_1 = require("./logs");
exports.Logs = logs_1.default;
const lookoutMetrics_1 = require("./lookoutMetrics");
exports.LookoutMetrics = lookoutMetrics_1.default;
const lookoutVision_1 = require("./lookoutVision");
exports.LookoutVision = lookoutVision_1.default;
const m2_1 = require("./m2");
exports.M2 = m2_1.default;
const msk_1 = require("./msk");
exports.MSK = msk_1.default;
const mwaa_1 = require("./mwaa");
exports.MWAA = mwaa_1.default;
const macie_1 = require("./macie");
exports.Macie = macie_1.default;
const managedBlockchain_1 = require("./managedBlockchain");
exports.ManagedBlockchain = managedBlockchain_1.default;
const mediaConnect_1 = require("./mediaConnect");
exports.MediaConnect = mediaConnect_1.default;
const mediaConvert_1 = require("./mediaConvert");
exports.MediaConvert = mediaConvert_1.default;
const mediaLive_1 = require("./mediaLive");
exports.MediaLive = mediaLive_1.default;
const mediaPackage_1 = require("./mediaPackage");
exports.MediaPackage = mediaPackage_1.default;
const mediaPackageV2_1 = require("./mediaPackageV2");
exports.MediaPackageV2 = mediaPackageV2_1.default;
const mediaStore_1 = require("./mediaStore");
exports.MediaStore = mediaStore_1.default;
const mediaTailor_1 = require("./mediaTailor");
exports.MediaTailor = mediaTailor_1.default;
const memoryDb_1 = require("./memoryDb");
exports.MemoryDB = memoryDb_1.default;
const neptune_1 = require("./neptune");
exports.Neptune = neptune_1.default;
const networkFirewall_1 = require("./networkFirewall");
exports.NetworkFirewall = networkFirewall_1.default;
const networkManager_1 = require("./networkManager");
exports.NetworkManager = networkManager_1.default;
const nimbleStudio_1 = require("./nimbleStudio");
exports.NimbleStudio = nimbleStudio_1.default;
const osis_1 = require("./osis");
exports.OSIS = osis_1.default;
const oam_1 = require("./oam");
exports.Oam = oam_1.default;
const openSearchServerless_1 = require("./openSearchServerless");
exports.OpenSearchServerless = openSearchServerless_1.default;
const openSearchService_1 = require("./openSearchService");
exports.OpenSearchService = openSearchService_1.default;
const opsWorks_1 = require("./opsWorks");
exports.OpsWorks = opsWorks_1.default;
const opsWorksCm_1 = require("./opsWorksCm");
exports.OpsWorksCM = opsWorksCm_1.default;
const organizations_1 = require("./organizations");
exports.Organizations = organizations_1.default;
const pcaConnectorAd_1 = require("./pcaConnectorAd");
exports.PCAConnectorAD = pcaConnectorAd_1.default;
const personalize_1 = require("./personalize");
exports.Personalize = personalize_1.default;
const pinpoint_1 = require("./pinpoint");
exports.Pinpoint = pinpoint_1.default;
const pipes_1 = require("./pipes");
exports.Pipes = pipes_1.default;
const proton_1 = require("./proton");
exports.Proton = proton_1.default;
const qldb_1 = require("./qldb");
exports.QLDB = qldb_1.default;
const quickSight_1 = require("./quickSight");
exports.QuickSight = quickSight_1.default;
const ram_1 = require("./ram");
exports.RAM = ram_1.default;
const rds_1 = require("./rds");
exports.RDS = rds_1.default;
const rum_1 = require("./rum");
exports.RUM = rum_1.default;
const redshift_1 = require("./redshift");
exports.Redshift = redshift_1.default;
const redshiftServerless_1 = require("./redshiftServerless");
exports.RedshiftServerless = redshiftServerless_1.default;
const refactorSpaces_1 = require("./refactorSpaces");
exports.RefactorSpaces = refactorSpaces_1.default;
const rekognition_1 = require("./rekognition");
exports.Rekognition = rekognition_1.default;
const resilienceHub_1 = require("./resilienceHub");
exports.ResilienceHub = resilienceHub_1.default;
const resourceExplorer2_1 = require("./resourceExplorer2");
exports.ResourceExplorer2 = resourceExplorer2_1.default;
const resourceGroups_1 = require("./resourceGroups");
exports.ResourceGroups = resourceGroups_1.default;
const roboMaker_1 = require("./roboMaker");
exports.RoboMaker = roboMaker_1.default;
const rolesAnywhere_1 = require("./rolesAnywhere");
exports.RolesAnywhere = rolesAnywhere_1.default;
const route53_1 = require("./route53");
exports.Route53 = route53_1.default;
const route53Resolver_1 = require("./route53Resolver");
exports.Route53Resolver = route53Resolver_1.default;
const s3_1 = require("./s3");
exports.S3 = s3_1.default;
const s3ObjectLambda_1 = require("./s3ObjectLambda");
exports.S3ObjectLambda = s3ObjectLambda_1.default;
const s3Outposts_1 = require("./s3Outposts");
exports.S3Outposts = s3Outposts_1.default;
const sdb_1 = require("./sdb");
exports.SDB = sdb_1.default;
const ses_1 = require("./ses");
exports.SES = ses_1.default;
const sns_1 = require("./sns");
exports.SNS = sns_1.default;
const sqs_1 = require("./sqs");
exports.SQS = sqs_1.default;
const ssm_1 = require("./ssm");
exports.SSM = ssm_1.default;
const ssmContacts_1 = require("./ssmContacts");
exports.SSMContacts = ssmContacts_1.default;
const ssmIncidents_1 = require("./ssmIncidents");
exports.SSMIncidents = ssmIncidents_1.default;
const sso_1 = require("./sso");
exports.SSO = sso_1.default;
const sageMaker_1 = require("./sageMaker");
exports.SageMaker = sageMaker_1.default;
const scheduler_1 = require("./scheduler");
exports.Scheduler = scheduler_1.default;
const secretsManager_1 = require("./secretsManager");
exports.SecretsManager = secretsManager_1.default;
const securityHub_1 = require("./securityHub");
exports.SecurityHub = securityHub_1.default;
const serviceCatalog_1 = require("./serviceCatalog");
exports.ServiceCatalog = serviceCatalog_1.default;
const serviceCatalogAppRegistry_1 = require("./serviceCatalogAppRegistry");
exports.ServiceCatalogAppRegistry = serviceCatalogAppRegistry_1.default;
const serviceDiscovery_1 = require("./serviceDiscovery");
exports.ServiceDiscovery = serviceDiscovery_1.default;
const shield_1 = require("./shield");
exports.Shield = shield_1.default;
const signer_1 = require("./signer");
exports.Signer = signer_1.default;
const stepFunctions_1 = require("./stepFunctions");
exports.StepFunctions = stepFunctions_1.default;
const supportApp_1 = require("./supportApp");
exports.SupportApp = supportApp_1.default;
const synthetics_1 = require("./synthetics");
exports.Synthetics = synthetics_1.default;
const systemsManagerSap_1 = require("./systemsManagerSap");
exports.SystemsManagerSAP = systemsManagerSap_1.default;
const timestream_1 = require("./timestream");
exports.Timestream = timestream_1.default;
const transfer_1 = require("./transfer");
exports.Transfer = transfer_1.default;
const verifiedPermissions_1 = require("./verifiedPermissions");
exports.VerifiedPermissions = verifiedPermissions_1.default;
const voiceId_1 = require("./voiceId");
exports.VoiceID = voiceId_1.default;
const vpcLattice_1 = require("./vpcLattice");
exports.VpcLattice = vpcLattice_1.default;
const waf_1 = require("./waf");
exports.WAF = waf_1.default;
const wafRegional_1 = require("./wafRegional");
exports.WAFRegional = wafRegional_1.default;
const waFv2_1 = require("./waFv2");
exports.WAFv2 = waFv2_1.default;
const wisdom_1 = require("./wisdom");
exports.Wisdom = wisdom_1.default;
const workSpaces_1 = require("./workSpaces");
exports.WorkSpaces = workSpaces_1.default;
const workSpacesWeb_1 = require("./workSpacesWeb");
exports.WorkSpacesWeb = workSpacesWeb_1.default;
const xRay_1 = require("./xRay");
exports.XRay = xRay_1.default;
const ask_1 = require("./ask");
exports.ASK = ask_1.default;
const groundStation_1 = require("./groundStation");
exports.GroundStation = groundStation_1.default;
const lookoutEquipment_1 = require("./lookoutEquipment");
exports.LookoutEquipment = lookoutEquipment_1.default;
const codeTest_1 = require("./codeTest");
exports.CodeTest = codeTest_1.default;
const healthLake_1 = require("./healthLake");
exports.HealthLake = healthLake_1.default;
const pinpointEmail_1 = require("./pinpointEmail");
exports.PinpointEmail = pinpointEmail_1.default;
const fraudDetector_1 = require("./fraudDetector");
exports.FraudDetector = fraudDetector_1.default;
const gammaDilithium_1 = require("./gammaDilithium");
exports.GammaDilithium = gammaDilithium_1.default;
const omics_1 = require("./omics");
exports.Omics = omics_1.default;
const panorama_1 = require("./panorama");
exports.Panorama = panorama_1.default;
const simSpaceWeaver_1 = require("./simSpaceWeaver");
exports.SimSpaceWeaver = simSpaceWeaver_1.default;
const connectCampaigns_1 = require("./connectCampaigns");
exports.ConnectCampaigns = connectCampaigns_1.default;
const healthImaging_1 = require("./healthImaging");
exports.HealthImaging = healthImaging_1.default;
const finSpace_1 = require("./finSpace");
exports.FinSpace = finSpace_1.default;
const ioTFleetWise_1 = require("./ioTFleetWise");
exports.IoTFleetWise = ioTFleetWise_1.default;
const billingConductor_1 = require("./billingConductor");
exports.BillingConductor = billingConductor_1.default;
const cur_1 = require("./cur");
exports.CUR = cur_1.default;
const route53RecoveryControl_1 = require("./route53RecoveryControl");
exports.Route53RecoveryControl = route53RecoveryControl_1.default;
const route53RecoveryReadiness_1 = require("./route53RecoveryReadiness");
exports.Route53RecoveryReadiness = route53RecoveryReadiness_1.default;
const deviceFarm_1 = require("./deviceFarm");
exports.DeviceFarm = deviceFarm_1.default;
exports.default = {
    SDC: sdc_1.default,
    ACMPCA: acmpca_1.default,
    APS: aps_1.default,
    AccessAnalyzer: accessAnalyzer_1.default,
    AmazonMQ: amazonMq_1.default,
    Amplify: amplify_1.default,
    AmplifyUIBuilder: amplifyUiBuilder_1.default,
    ApiGateway: apiGateway_1.default,
    ApiGatewayV2: apiGatewayV2_1.default,
    AppConfig: appConfig_1.default,
    AppFlow: appFlow_1.default,
    AppIntegrations: appIntegrations_1.default,
    AppMesh: appMesh_1.default,
    AppRunner: appRunner_1.default,
    AppStream: appStream_1.default,
    AppSync: appSync_1.default,
    ApplicationAutoScaling: applicationAutoScaling_1.default,
    ApplicationInsights: applicationInsights_1.default,
    Athena: athena_1.default,
    AuditManager: auditManager_1.default,
    AutoScaling: autoScaling_1.default,
    AutoScalingPlans: autoScalingPlans_1.default,
    Backup: backup_1.default,
    BackupGateway: backupGateway_1.default,
    Batch: batch_1.default,
    Budgets: budgets_1.default,
    CE: ce_1.default,
    Cassandra: cassandra_1.default,
    CertificateManager: certificateManager_1.default,
    Chatbot: chatbot_1.default,
    CleanRooms: cleanRooms_1.default,
    Cloud9: cloud9_1.default,
    CloudFormation: cloudFormation_1.default,
    CloudFront: cloudFront_1.default,
    CloudTrail: cloudTrail_1.default,
    CloudWatch: cloudWatch_1.default,
    CodeArtifact: codeArtifact_1.default,
    CodeBuild: codeBuild_1.default,
    CodeCommit: codeCommit_1.default,
    CodeDeploy: codeDeploy_1.default,
    CodeGuruProfiler: codeGuruProfiler_1.default,
    CodeGuruReviewer: codeGuruReviewer_1.default,
    CodePipeline: codePipeline_1.default,
    CodeStar: codeStar_1.default,
    CodeStarConnections: codeStarConnections_1.default,
    CodeStarNotifications: codeStarNotifications_1.default,
    Cognito: cognito_1.default,
    Comprehend: comprehend_1.default,
    Config: config_1.default,
    Connect: connect_1.default,
    ControlTower: controlTower_1.default,
    CustomerProfiles: customerProfiles_1.default,
    DAX: dax_1.default,
    DLM: dlm_1.default,
    DMS: dms_1.default,
    DataBrew: dataBrew_1.default,
    DataPipeline: dataPipeline_1.default,
    DataSync: dataSync_1.default,
    Detective: detective_1.default,
    DevOpsGuru: devOpsGuru_1.default,
    DirectoryService: directoryService_1.default,
    DocDB: docDb_1.default,
    DocDBElastic: docDbElastic_1.default,
    DynamoDB: dynamoDb_1.default,
    EC2: ec2_1.default,
    ECR: ecr_1.default,
    ECS: ecs_1.default,
    EFS: efs_1.default,
    EKS: eks_1.default,
    EMR: emr_1.default,
    EMRContainers: emrContainers_1.default,
    EMRServerless: emrServerless_1.default,
    ElastiCache: elastiCache_1.default,
    ElasticBeanstalk: elasticBeanstalk_1.default,
    ElasticLoadBalancing: elasticLoadBalancing_1.default,
    ElasticLoadBalancingV2: elasticLoadBalancingV2_1.default,
    Elasticsearch: elasticsearch_1.default,
    EntityResolution: entityResolution_1.default,
    EventSchemas: eventSchemas_1.default,
    Events: events_1.default,
    Evidently: evidently_1.default,
    FIS: fis_1.default,
    FMS: fms_1.default,
    FSx: fSx_1.default,
    Forecast: forecast_1.default,
    GameLift: gameLift_1.default,
    GlobalAccelerator: globalAccelerator_1.default,
    Glue: glue_1.default,
    Grafana: grafana_1.default,
    Greengrass: greengrass_1.default,
    GreengrassV2: greengrassV2_1.default,
    GuardDuty: guardDuty_1.default,
    IAM: iam_1.default,
    IVS: ivs_1.default,
    IVSChat: ivsChat_1.default,
    IdentityStore: identityStore_1.default,
    ImageBuilder: imageBuilder_1.default,
    Inspector: inspector_1.default,
    InspectorV2: inspectorV2_1.default,
    InternetMonitor: internetMonitor_1.default,
    IoT1Click: ioT1Click_1.default,
    IoT: iot_1.default,
    IoTAnalytics: ioTAnalytics_1.default,
    IoTCoreDeviceAdvisor: ioTCoreDeviceAdvisor_1.default,
    IoTEvents: ioTEvents_1.default,
    IoTFleetHub: ioTFleetHub_1.default,
    IoTSiteWise: ioTSiteWise_1.default,
    IoTThingsGraph: ioTThingsGraph_1.default,
    IoTTwinMaker: ioTTwinMaker_1.default,
    IoTWireless: ioTWireless_1.default,
    KMS: kms_1.default,
    KafkaConnect: kafkaConnect_1.default,
    Kendra: kendra_1.default,
    KendraRanking: kendraRanking_1.default,
    Kinesis: kinesis_1.default,
    KinesisAnalytics: kinesisAnalytics_1.default,
    KinesisAnalyticsV2: kinesisAnalyticsV2_1.default,
    KinesisFirehose: kinesisFirehose_1.default,
    KinesisVideo: kinesisVideo_1.default,
    LakeFormation: lakeFormation_1.default,
    Lambda: lambda_1.default,
    Lex: lex_1.default,
    LicenseManager: licenseManager_1.default,
    Lightsail: lightsail_1.default,
    Location: location_1.default,
    Logs: logs_1.default,
    LookoutMetrics: lookoutMetrics_1.default,
    LookoutVision: lookoutVision_1.default,
    M2: m2_1.default,
    MSK: msk_1.default,
    MWAA: mwaa_1.default,
    Macie: macie_1.default,
    ManagedBlockchain: managedBlockchain_1.default,
    MediaConnect: mediaConnect_1.default,
    MediaConvert: mediaConvert_1.default,
    MediaLive: mediaLive_1.default,
    MediaPackage: mediaPackage_1.default,
    MediaPackageV2: mediaPackageV2_1.default,
    MediaStore: mediaStore_1.default,
    MediaTailor: mediaTailor_1.default,
    MemoryDB: memoryDb_1.default,
    Neptune: neptune_1.default,
    NetworkFirewall: networkFirewall_1.default,
    NetworkManager: networkManager_1.default,
    NimbleStudio: nimbleStudio_1.default,
    OSIS: osis_1.default,
    Oam: oam_1.default,
    OpenSearchServerless: openSearchServerless_1.default,
    OpenSearchService: openSearchService_1.default,
    OpsWorks: opsWorks_1.default,
    OpsWorksCM: opsWorksCm_1.default,
    Organizations: organizations_1.default,
    PCAConnectorAD: pcaConnectorAd_1.default,
    Personalize: personalize_1.default,
    Pinpoint: pinpoint_1.default,
    Pipes: pipes_1.default,
    Proton: proton_1.default,
    QLDB: qldb_1.default,
    QuickSight: quickSight_1.default,
    RAM: ram_1.default,
    RDS: rds_1.default,
    RUM: rum_1.default,
    Redshift: redshift_1.default,
    RedshiftServerless: redshiftServerless_1.default,
    RefactorSpaces: refactorSpaces_1.default,
    Rekognition: rekognition_1.default,
    ResilienceHub: resilienceHub_1.default,
    ResourceExplorer2: resourceExplorer2_1.default,
    ResourceGroups: resourceGroups_1.default,
    RoboMaker: roboMaker_1.default,
    RolesAnywhere: rolesAnywhere_1.default,
    Route53: route53_1.default,
    Route53Resolver: route53Resolver_1.default,
    S3: s3_1.default,
    S3ObjectLambda: s3ObjectLambda_1.default,
    S3Outposts: s3Outposts_1.default,
    SDB: sdb_1.default,
    SES: ses_1.default,
    SNS: sns_1.default,
    SQS: sqs_1.default,
    SSM: ssm_1.default,
    SSMContacts: ssmContacts_1.default,
    SSMIncidents: ssmIncidents_1.default,
    SSO: sso_1.default,
    SageMaker: sageMaker_1.default,
    Scheduler: scheduler_1.default,
    SecretsManager: secretsManager_1.default,
    SecurityHub: securityHub_1.default,
    ServiceCatalog: serviceCatalog_1.default,
    ServiceCatalogAppRegistry: serviceCatalogAppRegistry_1.default,
    ServiceDiscovery: serviceDiscovery_1.default,
    Shield: shield_1.default,
    Signer: signer_1.default,
    StepFunctions: stepFunctions_1.default,
    SupportApp: supportApp_1.default,
    Synthetics: synthetics_1.default,
    SystemsManagerSAP: systemsManagerSap_1.default,
    Timestream: timestream_1.default,
    Transfer: transfer_1.default,
    VerifiedPermissions: verifiedPermissions_1.default,
    VoiceID: voiceId_1.default,
    VpcLattice: vpcLattice_1.default,
    WAF: waf_1.default,
    WAFRegional: wafRegional_1.default,
    WAFv2: waFv2_1.default,
    Wisdom: wisdom_1.default,
    WorkSpaces: workSpaces_1.default,
    WorkSpacesWeb: workSpacesWeb_1.default,
    XRay: xRay_1.default,
    ASK: ask_1.default,
    GroundStation: groundStation_1.default,
    LookoutEquipment: lookoutEquipment_1.default,
    CodeTest: codeTest_1.default,
    HealthLake: healthLake_1.default,
    PinpointEmail: pinpointEmail_1.default,
    FraudDetector: fraudDetector_1.default,
    GammaDilithium: gammaDilithium_1.default,
    Omics: omics_1.default,
    Panorama: panorama_1.default,
    SimSpaceWeaver: simSpaceWeaver_1.default,
    ConnectCampaigns: connectCampaigns_1.default,
    HealthImaging: healthImaging_1.default,
    FinSpace: finSpace_1.default,
    IoTFleetWise: ioTFleetWise_1.default,
    BillingConductor: billingConductor_1.default,
    CUR: cur_1.default,
    Route53RecoveryControl: route53RecoveryControl_1.default,
    Route53RecoveryReadiness: route53RecoveryReadiness_1.default,
    DeviceFarm: deviceFarm_1.default
};
