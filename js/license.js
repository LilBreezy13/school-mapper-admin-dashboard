const TRIAL_DAYS = 7;
const VALID_LICENSE = "SCHOOLMAPPER-LIFETIME-ADMIN";

function activateLicense() {
  const key = document.getElementById("licenseKey").value.trim();
  if (key === VALID_LICENSE) {
    localStorage.setItem("license", key);
    document.getElementById("licenseLock").classList.add("hidden");
  } else {
    alert("Invalid license key");
  }
}

(function checkLicense() {
  const license = localStorage.getItem("license");
  if (license === VALID_LICENSE) return;

  let start = localStorage.getItem("trialStart");
  if (!start) {
    localStorage.setItem("trialStart", Date.now());
    return;
  }

  const daysUsed =
    (Date.now() - Number(start)) / (1000 * 60 * 60 * 24);

  if (daysUsed > TRIAL_DAYS) {
    document.getElementById("licenseLock").classList.remove("hidden");
  }
})();
