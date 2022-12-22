import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

export default function ProtectedPage() {
  const { data: session } = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/examples/protected');
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      } else if (json.error) {
        setContent(json.error);
      }
    };
    fetchData();
  }, [session]);

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
      <p>{content}</p>
    </Layout>
  );
}
