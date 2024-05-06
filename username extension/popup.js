document.addEventListener("DOMContentLoaded", function () {
  const checkButton = document.getElementById("checkButton");
  const result = document.getElementById("result");

  checkButton.addEventListener("click", async () => {
    const account = document.getElementById("accountInput").value.trim();
    result.textContent = "Checking...";

    try {
      const response = await fetch(`https://haveibeenpwned.com/api/v3/{breachedaccount}/${account}`, {
        mode: 'no-cors',
        method: "GET",
        headers: {
          "User-Agent": "Breach-Checker",
        },
      });

      if (response.status === 200) {
        result.textContent = `The account '${account}' has been breached.`;
      } else if (response.status === 400) {
        result.textContent = `The account '${account}' has not been breached.`;
      } else {
        result.textContent = `Error checking account. Status: ${response.status}`;
      }
    } catch (error) {
      result.textContent = `Error: ${error.message}`;
    }
  });
});
