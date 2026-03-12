import Image from 'next/image';

(function() {
  if (typeof window !== "undefined") {
    const authToken = localStorage.getItem("authToken");
    const onboardingToken = localStorage.getItem("onboardingToken");
    const userRole = localStorage.getItem("userRole");

    if (authToken && userRole) {
      // Fully onboarded -> homepage
      switch(userRole) {
        case "Patient":
          window.location.href = "/patient-homepage";
          break;
        case "Doctor":
          window.location.href = "/doctor-homepage";
          break;
        case "Family Member":
          window.location.href = "/family-homepage";
          break;
        default:
          window.location.href = "/login";
      }
    } else if (onboardingToken && userRole) {
      // Still onboarding -> onboarding page
      switch(userRole) {
        case "Patient":
          window.location.href = "/patient-onboarding";
          break;
        case "Doctor":
          window.location.href = "/doctor-onboarding";
          break;
        case "Family Member":
          window.location.href = "/family-onboarding";
          break;
        default:
          window.location.href = "/login";
      }
    }
  }
})();

export default function Page() {
  return (
    <main className="flex flex-col items-center px-5 bg-[var(--color-background)] gap-6 pt-8 min-h-screen">
      {/* Logo */}
      <Image
        src="/logos/DMA-logo-green.png"
        alt="Diabetes Management Logo"
        width={250}
        height={250}
        priority
        className="block"
      />

      {/* Login and register navigators*/}
      <div className="flex flex-col gap-4 w-full max-w-[250px]">
        <a
          href="/login"
          className="w-full py-3 bg-[var(--color-secondary)] text-[var(--color-textWhite)] text-xl rounded-md text-center font-semibold hover:opacity-90 transition"
          data-i18n="login"
        >
          Log In
        </a>

        <a
          href="/register"
          className="w-full py-3 bg-[var(--color-tertiary)] text-[var(--color-textWhite)] text-xl rounded-md text-center font-semibold hover:opacity-90 transition"
          data-i18n="register"
        >
          Register
        </a>
      </div>
    </main>
  );
}
