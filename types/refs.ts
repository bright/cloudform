import {Ref} from "./functions"
import {CFFunction} from "./dataTypes"

export const AccountId: CFFunction = Ref('AWS::AccountId')
export const NotificationARNs: CFFunction = Ref("AWS::NotificationARNs")
export const NoValue: CFFunction = Ref('AWS::NoValue')
export const Partition: CFFunction = Ref('AWS::Partition')
export const Region: CFFunction = Ref('AWS::Region')
export const StackId: CFFunction = Ref('AWS::StackId')
export const StackName: CFFunction = Ref('AWS::StackName')
export const URLSuffix: CFFunction = Ref('AWS::URLSuffix')