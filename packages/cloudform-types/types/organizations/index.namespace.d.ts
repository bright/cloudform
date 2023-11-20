import Account_ from './account';
import Organization_ from './organization';
import OrganizationalUnit_ from './organizationalUnit';
import Policy_ from './policy';
import ResourcePolicy_ from './resourcePolicy';
export declare namespace Organizations {
    const Account: typeof Account_;
    const Organization: typeof Organization_;
    const OrganizationalUnit: typeof OrganizationalUnit_;
    const Policy: typeof Policy_;
    const ResourcePolicy: typeof ResourcePolicy_;
    type Account = Account_;
    type Organization = Organization_;
    type OrganizationalUnit = OrganizationalUnit_;
    type Policy = Policy_;
    type ResourcePolicy = ResourcePolicy_;
}
