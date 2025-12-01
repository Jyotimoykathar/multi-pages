import { Link } from "react-router-dom";
export default function ThankYou() {
  return (
    <div className="max-w-md mx-auto card tex-center">
      <h1 className="text-3xl font-bold mb-3">Thank You</h1>
      <p className="mb-4">
        Your message has been sent successfully. We will get back to you soon
      </p>
      <Link to="/" className="btn-primary inline-flex items-center gap-2">
        <span className="text-xl font-bold leading-none relative -top-[2px]">
          &larr;
        </span>
        <span>Homepage</span>
      </Link>
    </div>
  );
}
