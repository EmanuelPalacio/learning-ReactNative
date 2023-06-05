export default function userDataAdapter({ user }) {
  return {
    fullname: user.displayName,
    email: user.email,
    token: user.accessToken,
    userId: user.uid,
    profileImage: user.photoUrl,
    emailVerified: user.emailVerified,
  }
}
