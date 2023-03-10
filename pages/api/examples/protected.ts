import { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    console.log(
      'This is protected content from the /api/examples/protected API route. You can access this content because you are signed in.'
    );

    return res.send({
      content:
        'This is protected content from the /api/examples/protected API route. You can access this content because you are signed in.',
    });
  }

  res.send({
    error:
      'You must be signed in to view the content from the /api/examples/protected API route.',
  });

  console.log(
    'You must be signed in to view the content from the /api/examples/protected API route.'
  );
}
