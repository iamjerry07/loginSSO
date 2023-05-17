import { signOut } from 'next-auth/client';

export default async (req, res) => {
  try {
    await signOut({ redirect: false });
    return res.status(200).end();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Sign out failed' });
  }
};
