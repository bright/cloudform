import cloudform, {Fn, Refs} from "../index"
import {StringParameter} from "../types/parameter"
import VPC from "../types/ec2/vpc"
import {ResourceTag} from "../types/resource"

cloudform({
    Description: 'My template',
    Parameters: {
        DeployEnv: new StringParameter({
            Description: 'Deploy environment name',
            AllowedValues: ['dev', 'stage', 'production']
        })
    },
    Mappings: {
        SubnetConfig: {
            VPC: {
                CIDR: '10.0.0.0/16'
            }
        }
    },
    Resources: {
        VPC: new VPC({
            CidrBlock: Fn.FindInMap('SubnetConfig', 'VPC', 'CIDR'),
            EnableDnsHostnames: true,
            Tags: [
                new ResourceTag('Application', Refs.StackName),
                new ResourceTag('Network', 'Public'),
                new ResourceTag('Name', Fn.Join('-', [Refs.StackId, 'VPC']))
            ]
        }),

        // can handle raw data pasted from existing JSON templates - convenient for transition phase
        "ECSSecurityGroup": {
            "Type": "AWS::EC2::SecurityGroup",
            "Properties": {
                "GroupDescription": "ECS Security Group",
                "VpcId": {
                    "Ref": "VPC"
                }
            }
        }
    }
})
