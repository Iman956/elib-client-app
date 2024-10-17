// When ever you add any folder in brackets then next js will not route the files of
// that folder this it the best approach for grouping
import Banner from '@/app/(home)/components/Banner';

export default function Home() {
  return (
    <>
      <Banner />
    </>
  );
}
