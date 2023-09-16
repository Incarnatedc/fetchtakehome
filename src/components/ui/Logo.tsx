import logoImage from '../../assets/logo.png';

type logoProps = {
  className?: string
}

export default function Logo({className}: logoProps) {
  return (
    <img className={className} src={logoImage} alt="Dogs" />
  );
}