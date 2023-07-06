import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import connect from 'src/utils/db';
import User from 'src/models/User';
import bcrypt from 'bcryptjs';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'credentials',

      async authorize(credentials) {
        // check user exists
        await connect();

        try {
          const user = await User.findOne({
            email: credentials.email,
          });

          if (user) {
            // check password
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error('Wrong Credentials!');
            }
          } else {
            throw new Error('User not found!');
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
