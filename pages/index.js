import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const route = router.query.route || '/';

  return (
    <div>
      <h1>Hello World</h1>
      <p>Current Route: {route}</p>
    </div>
  );
}
