document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("wallet-check-form");
    const result = document.getElementById("result");

    // Load the list of whitelisted addresses from a text file
    fetch("whitelist.txt")
        .then((response) => response.text())
        .then((data) => {
            const whitelistedAddresses = data.split("\n").map((address) => address.trim());

            form.addEventListener("submit", function (event) {
                event.preventDefault();
                const walletAddress = document.getElementById("wallet-address").value;

                if (whitelistedAddresses.includes(walletAddress)) {
                    result.textContent = "You are whitelisted.";
                } else {
                    result.textContent = "Sorry, you are not whitelisted.";
                }
            });
        })
        .catch((error) => {
            console.error("Error loading the whitelist:", error);
        });
});
