import styles from './BrandHeader.module.css';

/* eslint-disable-next-line */
export interface BrandHeaderProps { }

export function BrandHeader(props: BrandHeaderProps) {
  return (
    <>
      <span className="text-5xl text-purple-900  font-black">
        Yasak Kelime
      </span>
    </>
  );
}

export default BrandHeader;
