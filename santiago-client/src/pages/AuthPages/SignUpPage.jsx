import { Link } from 'react-router-dom';
import Button from '../../components/Button';

// Enhanced input classes with school-themed focus rings
const inputClasses =
  'mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 focus:bg-zinc-50';

const actionButtonClassName = 'w-full rounded-xl py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] shadow-sm transition-all active:scale-[0.98]';

const SignUpPage = () => {
  return (
    <>
      {/* Brand Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
          Join the Pack
        </h1>
        <p className="mt-3 text-sm leading-6 text-zinc-600">
          Create your <span className="font-semibold text-blue-900">BulldogEx</span> account to shop uniforms and campus essentials.
        </p>
      </div>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        {/* Name Grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="Ex. Juan"
              autoComplete="given-name"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="last-name" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="Dela Cruz"
              autoComplete="family-name"
              className={inputClasses}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="signup-email" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            Email Address
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="student@nu-manila.edu.ph"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="signup-password" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            Create Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="••••••••"
            autoComplete="new-password"
            className={inputClasses}
          />
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-start gap-3 px-1">
          <input
            id="terms"
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-zinc-300 accent-blue-900 transition"
          />
          <label htmlFor="terms" className="text-xs leading-5 text-zinc-500">
            I agree to the <Link to="/terms" className="font-medium text-blue-900 hover:underline">Terms of Service</Link> and <Link to="/privacy" className="font-medium text-blue-900 hover:underline">Privacy Policy</Link>.
          </label>
        </div>

        {/* Submit Button - Changed to Yellow to match Footer action style */}
        <Button 
          type="submit" 
          variant="primary" 
          className={`${actionButtonClassName} bg-yellow-500 text-blue-950 hover:bg-yellow-400 border-none`}
        >
          Create Account
        </Button>

        {/* Visual Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-zinc-200" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-4 text-zinc-400 font-semibold tracking-widest">Or sign up with</span>
          </div>
        </div>

        {/* Social Logins */}
        <div className="grid gap-3 sm:grid-cols-2">
          <Button type="button" variant="secondary" className={`${actionButtonClassName} border-zinc-200 hover:bg-zinc-50`}>
            <span className="mr-2">G</span> Google
          </Button>
          <Button type="button" variant="secondary" className={`${actionButtonClassName} border-zinc-200 hover:bg-zinc-50`}>
            <span className="mr-2"></span> Apple
          </Button>
        </div>
      </form>

      {/* Footer Link */}
      <div className="mt-10 border-t border-zinc-100 pt-8 text-center text-sm text-zinc-600">
        Already a Bulldog?{' '}
        <Link 
          to="/auth/signin" 
          className="font-bold text-blue-900 transition hover:text-yellow-600"
        >
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;