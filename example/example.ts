import cloudform, {Fn, Refs, EC2, StringParameter, ResourceTag} from ".." // you should import from cloudform here instead
import {NetworkingConfig} from './config'

const DeployEnv = Fn.Ref('DeployEnv')

export default cloudform({
    Description: 'My template',
    Parameters: {
        DeployEnv: new StringParameter({
            Description: 'Deploy environment name',
            AllowedValues: ['stage', 'production']
        })
    },
    Mappings: {
        SomeGroup: {
            stage: {
                SomeValue: 'one'
            },
            production: {
                SomeValue: 'two'
            }
        }
    },
    Conditions: {
        FirstCondition: Fn.Equals(1, 2),
        TestCondition: Fn.And([
            {Condition: 'FirstCondition'},
            Fn.Equals(Fn.FindInMap('SomeGroup', DeployEnv, 'SomeValue'), 'three')
        ])
    },
    Resources: {
        VPC: new EC2.VPC({
            CidrBlock: NetworkingConfig.VPC.CIDR,
            EnableDnsHostnames: true,
            Tags: [
                new ResourceTag('Application', Refs.StackName),
                new ResourceTag('Network', 'Public'),
                new ResourceTag('Name', Fn.Join('-', [Refs.StackId, 'VPC']))
            ]
        }).condition('TestCondition'),

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
    },
    Outputs: {
        VPCIpv6CidrBlocks: {
            Value: Fn.GetAtt('VPC', 'Ipv6CidrBlocks')
        }
    }
})
