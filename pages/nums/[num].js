import { useRouter } from 'next/router';

export default function Nums() {
  const router = useRouter();
  const { num } = router.query;

  return (
    <div>
      <h1>Number: {num}</h1>
    </div>
  );
}