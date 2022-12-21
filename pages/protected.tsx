import { useSession } from 'next-auth/react';
import Layout from '../components/Layout';

export default function ProtectedPage() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <Layout>
        <h2>Access Denied</h2>
        <p>Login to view the content of this page.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h2>Permission Granted</h2>
      <p>You are seeing this page because you are logged in.</p>
    </Layout>
  );
}
