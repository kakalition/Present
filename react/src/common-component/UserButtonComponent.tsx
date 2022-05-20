import UserIcon from './icons/UserIcon';

type Props = {
  size: string,
  adjustmentClass: string,
  onClick: () => void,
}

export default function UserButtonComponent({ size = 'w-16 h-16', adjustmentClass = 'p-2', onClick }: Props) {
  const className = `flex justify-center items-center rounded-full ${size} ${adjustmentClass}`;

  return (
    <button
      className={className}
      type="button"
      onClick={onClick}
    >
      <UserIcon />
    </button>
  );
}
