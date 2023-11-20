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
exports.TriggerConfig = exports.TrafficRoute = exports.TargetGroupPairInfo = exports.TargetGroupInfo = exports.TagFilter = exports.S3Location = exports.RevisionLocation = exports.OnPremisesTagSetListObject = exports.OnPremisesTagSet = exports.LoadBalancerInfo = exports.GreenFleetProvisioningOption = exports.GitHubLocation = exports.ELBInfo = exports.ECSService = exports.EC2TagSetListObject = exports.EC2TagSet = exports.EC2TagFilter = exports.DeploymentStyle = exports.DeploymentReadyOption = exports.Deployment = exports.BlueInstanceTerminationOption = exports.BlueGreenDeploymentConfiguration = exports.AutoRollbackConfiguration = exports.AlarmConfiguration = exports.Alarm = void 0;
const resource_1 = require("../resource");
class Alarm {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Alarm = Alarm;
class AlarmConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AlarmConfiguration = AlarmConfiguration;
class AutoRollbackConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AutoRollbackConfiguration = AutoRollbackConfiguration;
class BlueGreenDeploymentConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BlueGreenDeploymentConfiguration = BlueGreenDeploymentConfiguration;
class BlueInstanceTerminationOption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BlueInstanceTerminationOption = BlueInstanceTerminationOption;
class Deployment {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Deployment = Deployment;
class DeploymentReadyOption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeploymentReadyOption = DeploymentReadyOption;
class DeploymentStyle {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeploymentStyle = DeploymentStyle;
class EC2TagFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EC2TagFilter = EC2TagFilter;
class EC2TagSet {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EC2TagSet = EC2TagSet;
class EC2TagSetListObject {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EC2TagSetListObject = EC2TagSetListObject;
class ECSService {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ECSService = ECSService;
class ELBInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ELBInfo = ELBInfo;
class GitHubLocation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GitHubLocation = GitHubLocation;
class GreenFleetProvisioningOption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GreenFleetProvisioningOption = GreenFleetProvisioningOption;
class LoadBalancerInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LoadBalancerInfo = LoadBalancerInfo;
class OnPremisesTagSet {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OnPremisesTagSet = OnPremisesTagSet;
class OnPremisesTagSetListObject {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OnPremisesTagSetListObject = OnPremisesTagSetListObject;
class RevisionLocation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RevisionLocation = RevisionLocation;
class S3Location {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3Location = S3Location;
class TagFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TagFilter = TagFilter;
class TargetGroupInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TargetGroupInfo = TargetGroupInfo;
class TargetGroupPairInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TargetGroupPairInfo = TargetGroupPairInfo;
class TrafficRoute {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TrafficRoute = TrafficRoute;
class TriggerConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TriggerConfig = TriggerConfig;
class DeploymentGroup extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::CodeDeploy::DeploymentGroup', properties);
    }
}
exports.default = DeploymentGroup;
DeploymentGroup.Alarm = Alarm;
DeploymentGroup.AlarmConfiguration = AlarmConfiguration;
DeploymentGroup.AutoRollbackConfiguration = AutoRollbackConfiguration;
DeploymentGroup.BlueGreenDeploymentConfiguration = BlueGreenDeploymentConfiguration;
DeploymentGroup.BlueInstanceTerminationOption = BlueInstanceTerminationOption;
DeploymentGroup.Deployment = Deployment;
DeploymentGroup.DeploymentReadyOption = DeploymentReadyOption;
DeploymentGroup.DeploymentStyle = DeploymentStyle;
DeploymentGroup.EC2TagFilter = EC2TagFilter;
DeploymentGroup.EC2TagSet = EC2TagSet;
DeploymentGroup.EC2TagSetListObject = EC2TagSetListObject;
DeploymentGroup.ECSService = ECSService;
DeploymentGroup.ELBInfo = ELBInfo;
DeploymentGroup.GitHubLocation = GitHubLocation;
DeploymentGroup.GreenFleetProvisioningOption = GreenFleetProvisioningOption;
DeploymentGroup.LoadBalancerInfo = LoadBalancerInfo;
DeploymentGroup.OnPremisesTagSet = OnPremisesTagSet;
DeploymentGroup.OnPremisesTagSetListObject = OnPremisesTagSetListObject;
DeploymentGroup.RevisionLocation = RevisionLocation;
DeploymentGroup.S3Location = S3Location;
DeploymentGroup.TagFilter = TagFilter;
DeploymentGroup.TargetGroupInfo = TargetGroupInfo;
DeploymentGroup.TargetGroupPairInfo = TargetGroupPairInfo;
DeploymentGroup.TrafficRoute = TrafficRoute;
DeploymentGroup.TriggerConfig = TriggerConfig;
