import { Link } from 'react-router-dom';

const variantClasses = {
  primary:
    'bg-amber-400 text-blue-950 border-2 border-amber-400 hover:bg-amber-300 hover:border-amber-300',
  secondary:
    'bg-transparent text-blue-950 border-2 border-blue-950 hover:bg-blue-950 hover:text-white',
  ghost:
    'bg-white/10 text-white border-2 border-white/20 hover:bg-white/20 hover:border-white/40',
  outline:
    'bg-white text-blue-950 border-2 border-blue-950/20 hover:border-blue-950 hover:bg-blue-50',
};

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'secondary',
  className = '',
  onClick,
  ...rest
}) => {
  const classes = [
    'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.22em] transition-all duration-200 active:scale-[0.98]',
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(' ')
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
