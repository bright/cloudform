import AccessPoint_ from './accessPoint';
import StorageLens_ from './storageLens';
import Bucket_ from './bucket';
import BucketPolicy_ from './bucketPolicy';
export declare namespace S3 {
    const AccessPoint: typeof AccessPoint_;
    const StorageLens: typeof StorageLens_;
    const Bucket: typeof Bucket_;
    const BucketPolicy: typeof BucketPolicy_;
    type AccessPoint = AccessPoint_;
    type StorageLens = StorageLens_;
    type Bucket = Bucket_;
    type BucketPolicy = BucketPolicy_;
}
