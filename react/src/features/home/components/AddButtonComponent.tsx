import PlusIcon from '../../../common-component/icons/PlusIcon';

/**
 * @param {{background: TailwindClass, text: string, onClickCallback: () => void}} props
 */

type Props = {
  background: string,
  fillSpace?: boolean
  onClickCallback: () => void
  text: string,
};

export default function AddButtonComponent({
  background, fillSpace = false, onClickCallback, text,
}: Props) {
  const className = `flex items-center justify-between shadow-md hover:shadow-xl scale-1 hover:scale-[1.005] transition px-6 py-5 
  ${background} ${fillSpace ? 'w-full h-full' : ''}`;

  return (
    <button className={className} type="button" onClick={onClickCallback}>
      <p className="text-xl font-medium text-white transition font-ibm-plex-sans">{text}</p>
      <div className="w-8 h-8 stroke-white stroke-2"><PlusIcon /></div>
    </button>
  );
}
