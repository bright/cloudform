import AccessPoint_ from './accessPoint';
import Bucket_ from './bucket';
import BucketPolicy_ from './bucketPolicy';
import MultiRegionAccessPoint_ from './multiRegionAccessPoint';
import MultiRegionAccessPointPolicy_ from './multiRegionAccessPointPolicy';
import StorageLens_ from './storageLens';
export declare namespace S3 {
    const AccessPoint: typeof AccessPoint_;
    const Bucket: typeof Bucket_;
    const BucketPolicy: typeof BucketPolicy_;
    const MultiRegionAccessPoint: typeof MultiRegionAccessPoint_;
    const MultiRegionAccessPointPolicy: typeof MultiRegionAccessPointPolicy_;
    const StorageLens: typeof StorageLens_;
    type AccessPoint = AccessPoint_;
    type Bucket = Bucket_;
    type BucketPolicy = BucketPolicy_;
    type MultiRegionAccessPoint = MultiRegionAccessPoint_;
    type MultiRegionAccessPointPolicy = MultiRegionAccessPointPolicy_;
    type StorageLens = StorageLens_;
}
