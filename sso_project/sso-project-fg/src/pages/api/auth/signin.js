import { signIn } from 'next-auth/client';

export default async (req, res) => {
  try {
    const { provider } = req.query;
    await signIn(provider);
    return res.status(200).end();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Sign in failed' });
  }
};
