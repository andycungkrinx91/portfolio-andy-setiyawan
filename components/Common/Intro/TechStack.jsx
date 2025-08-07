import Badge from '../Badge';
import { TECH_STACK_SECTIONS } from '../../../constants/constants';

const TechSection = ({ title, items }) => (
  <div className='flex flex-col gap-y-4'>
    <span className='text-Snow text-xs font-bold'>{title}</span>
    <div className='flex flex-wrap gap-2'>
      {items.map((item) => (
        <Badge key={item} title={item} />
      ))}
    </div>
  </div>
);

const TechStack = () => {
  return (
    <div className='flex flex-col space-y-6 pt-6'>
      {TECH_STACK_SECTIONS.map((section) => (
        <TechSection
          key={section.title}
          title={section.title}
          items={section.items}
        />
      ))}
    </div>
  );
};

export default TechStack;
