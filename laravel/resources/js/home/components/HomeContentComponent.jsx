import PropTypes from 'prop-types';
import ItemTileComponent from './ItemTileComponent';

export default function HomeContentComponent(props) {
  const { receivedData } = props;
  const content = receivedData.map((element) => (
    <ItemTileComponent
      key={element.shortDescription}
      title={element.title}
      tag={element.tag}
      shortDescription={element.shortDescription}
    />
  ));

  return (
    <div className="grid grid-cols-4 gap-4 px-16 w-full">
      {content}
    </div>
  );
}

HomeContentComponent.propTypes = {
  receivedData: PropTypes.arrayOf(PropTypes.element).isRequired,
};
