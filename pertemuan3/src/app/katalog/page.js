import { daftarParfum } from '@/data/parfum';
import KatalogClient from '@/components/KatalogClient';

export default function KatalogPage() {
  return <KatalogClient data={daftarParfum} />;
}