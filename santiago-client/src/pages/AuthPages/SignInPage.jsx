import { Link } from 'react-router-dom';
import Button from '../../components/Button';

// Enhanced classes with Brand Colors (Deep Blue focus and Yellow accents)
const inputClasses =
  'mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-blue-900 focus:ring-4 focus:ring-blue-900/10';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-200';

const SignInPage = () => {
  return (
    <div className="mx-auto w-full max-w-md">
      {/* Header Section */}
      <div className="text-center sm:text-left">
        <h1 className="text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
          Welcome Back <span className="text-yellow-500">.</span>
        </h1>
        <p className="mt-3 text-sm leading-6 text-zinc-500">
          Log in to access your student essentials and track your campus orders.
        </p>
      </div>

      <form className="mt-8 space-y-5">
        {/* Email Field */}
        <div>
          <label htmlFor="signin-email" className="text-xs font-bold uppercase tracking-wider text-blue-900">
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="e.g. bulldog@nu-ph.edu"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        {/* Password Field */}
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="signin-password" className="text-xs font-bold uppercase tracking-wider text-blue-900">
              Password
            </label>
          </div>
          <input
            id="signin-password"
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
            className={inputClasses}
          />
          <div className="mt-3 flex items-center justify-between text-xs">
             <p className="text-zinc-400">Min. 8 characters</p>
             <button type="button" className="font-bold text-blue-800 hover:text-blue-600 hover:underline">
              Forgot Password?
            </button>
          </div>
        </div>

        {/* Remember Me */}
        <div className="flex items-center gap-2 py-1">
          <input 
            type="checkbox" 
            id="remember"
            className="h-4 w-4 rounded border-zinc-300 text-blue-900 focus:ring-blue-900 accent-blue-950" 
          />
          <label htmlFor="remember" className="text-sm font-medium text-zinc-600 cursor-pointer select-none">
            Keep me logged in
          </label>
        </div>

        {/* Primary Log In Button - Now using Brand Yellow */}
        <Button 
          type="submit" 
          variant="primary" 
          className={`${actionButtonClassName} bg-yellow-500 text-blue-950 hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20 active:scale-95`}
        >
          Log In to Shop
        </Button>

        {/* Divider */}
        <div className="relative flex items-center py-4">
          <div className="flex-grow border-t border-zinc-200"></div>
          <span className="mx-4 flex-shrink text-[10px] font-bold uppercase tracking-widest text-zinc-400">Or continue with</span>
          <div className="flex-grow border-t border-zinc-200"></div>
        </div>

        {/* Social Logins - Styled as secondary/outline */}
        <div className="grid gap-3 sm:grid-cols-2">
          <button 
            type="button" 
            className="flex items-center justify-center gap-2 rounded-xl border-2 border-zinc-100 py-3 text-[10px] font-bold uppercase tracking-widest text-zinc-700 transition hover:bg-zinc-50 hover:border-zinc-200"
          >
            <span>Google</span>
          </button>
          <button 
            type="button" 
            className="flex items-center justify-center gap-2 rounded-xl border-2 border-zinc-100 py-3 text-[10px] font-bold uppercase tracking-widest text-zinc-700 transition hover:bg-zinc-50 hover:border-zinc-200"
          >
            <span>Apple</span>
          </button>
        </div>
      </form>

      {/* Footer Link */}
      <div className="mt-10 rounded-2xl bg-zinc-50 p-6 text-center text-sm text-zinc-600">
        New to the community?{' '}
        <Link 
          to="/auth/signup" 
          className="font-bold text-blue-900 transition hover:text-blue-700 underline underline-offset-4 decoration-yellow-500/50 hover:decoration-yellow-500"
        >
          Create an Account
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;