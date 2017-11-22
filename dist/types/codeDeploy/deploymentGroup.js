"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class LoadBalancerInfo extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeDeploy::LoadBalancerInfo', properties, dependsOn);
    }
}
exports.LoadBalancerInfo = LoadBalancerInfo;
class RevisionLocation extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeDeploy::RevisionLocation', properties, dependsOn);
    }
}
exports.RevisionLocation = RevisionLocation;
class S3Location extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeDeploy::S3Location', properties, dependsOn);
    }
}
exports.S3Location = S3Location;
class TriggerConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeDeploy::TriggerConfig', properties, dependsOn);
    }
}
exports.TriggerConfig = TriggerConfig;
class TagFilter extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeDeploy::TagFilter', properties, dependsOn);
    }
}
exports.TagFilter = TagFilter;
class GitHubLocation extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeDeploy::GitHubLocation', properties, dependsOn);
    }
}
exports.GitHubLocation = GitHubLocation;
class TargetGroupInfo extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeDeploy::TargetGroupInfo', properties, dependsOn);
    }
}
exports.TargetGroupInfo = TargetGroupInfo;
class ELBInfo extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeDeploy::ELBInfo', properties, dependsOn);
    }
}
exports.ELBInfo = ELBInfo;
class AlarmConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeDeploy::AlarmConfiguration', properties, dependsOn);
    }
}
exports.AlarmConfiguration = AlarmConfiguration;
class DeploymentStyle extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeDeploy::DeploymentStyle', properties, dependsOn);
    }
}
exports.DeploymentStyle = DeploymentStyle;
class Alarm extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeDeploy::Alarm', properties, dependsOn);
    }
}
exports.Alarm = Alarm;
class EC2TagFilter extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeDeploy::EC2TagFilter', properties, dependsOn);
    }
}
exports.EC2TagFilter = EC2TagFilter;
class AutoRollbackConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeDeploy::AutoRollbackConfiguration', properties, dependsOn);
    }
}
exports.AutoRollbackConfiguration = AutoRollbackConfiguration;
class Deployment extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeDeploy::Deployment', properties, dependsOn);
    }
}
exports.Deployment = Deployment;
class DeploymentGroup extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeDeploy::DeploymentGroup', properties, dependsOn);
    }
}
exports.default = DeploymentGroup;
