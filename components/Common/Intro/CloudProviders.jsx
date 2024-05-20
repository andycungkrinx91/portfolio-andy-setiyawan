import Badge from '../Badge';
import { CLOUD_PROVIDER } from '../../../constants/constants';
const CloudProviders = () => {
  return (
    <div className='flex flex-col space-y-1 pt-6'>
      <div className='flex flex-col gap-y-4'>
        <span className='text-Snow text-xs font-bold'>Cloud Providers</span>
        <div className='flex flex-wrap gap-2'>
          {CLOUD_PROVIDER.map((item, index) => (
            <Badge key={index} title={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CloudProviders;
