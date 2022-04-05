import PropertiesList from '../components/PropertiesList';
import PropertyFilter from '../components/PropertyFilter';
import PropertyHeader from '../components/PropertyHeader';

function Property() {
  return (
    <div>
      <PropertyHeader />
      <PropertyFilter />
      <PropertiesList />
    </div>
  );
}

export default Property;
