import { type FormEvent, type ReactElement, useState } from 'react';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function InviteForm(): ReactElement {
  const [email, setEmail] = useState('');
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const isValid = EMAIL_PATTERN.test(email.trim());
    setHasError(!isValid);

    if (isValid) {
      setEmail('');
      setHasError(false);
    }
  };

  const handleEmailChange = (value: string): void => {
    setEmail(value);
    if (hasError) {
      setHasError(false);
    }
  };

  return (
    <article className="card">
      <h2 className="text-lg font-semibold">Quick Invite</h2>
      <p className="mt-1 text-sm text-muted">Send a team member an invitation.</p>
      <form className="mt-4 stack-sm" noValidate onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={hasError ? 'input-error' : 'input'}
            placeholder="name@company.com"
            value={email}
            onChange={(event) => handleEmailChange(event.target.value)}
          />
          {hasError && (
            <p className="mt-1 text-sm text-danger">
              Please enter a valid email address.
            </p>
          )}
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <button type="submit" className="btn-primary">
            Send Invite
          </button>
          <button type="button" className="btn-secondary" disabled>
            Save Draft
          </button>
        </div>
      </form>
    </article>
  );
}
