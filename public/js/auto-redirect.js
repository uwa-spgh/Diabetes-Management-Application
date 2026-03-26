(function () {
  if (typeof window === "undefined") return;

  document.addEventListener("DOMContentLoaded", function () {
    // Get tokens & role
    const authToken = localStorage.getItem("authToken");
    const onboardingToken = localStorage.getItem("onboardingToken");
    const role = localStorage.getItem("userRole");

    // If neither token exists, do nothing
    if (!role) return;

    // Determine role
    let redirectRole = role;


    // Redirect based on role
    if (authToken) {
      if (role === "Patient") {
        window.location.replace("/patient-homepage");
      } else if (role === "Doctor") {
        window.location.replace("/doctor-homepage");
      } else if (role === "Family Member") {
        window.location.replace("/family-homepage");
      }
      return;
    }

    if (onboardingToken) {
      if (role === "Patient") {
        window.location.replace("/patient-onboarding");
      } else if (role === "Doctor") {
        window.location.replace("/doctor-onboarding");
      } else if (role === "Family Member") {
        window.location.replace("/family-onboarding");
      }
    }

  });
})();