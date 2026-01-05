import GithubSignInButton from "../components/GithubSignInButton";

export default async function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-foreground font-bold text-3xl">Welcome</h1>
          <p className="text-muted mt-2">Sign in or create a new account</p>
        </div>
        <div className="card p-8">
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-muted mb-6">
                Use your github account to login or create a new account
              </p>
            </div>
            <GithubSignInButton />
            <div>
              <p>
                By siging in, you are agreeing to our terms of services and
                privacy policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
