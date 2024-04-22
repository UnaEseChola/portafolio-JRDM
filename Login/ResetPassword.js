import { ManageAccount } from "./FirebaseConfi.js";

document.getElementById("form-Recuperar").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;

    const account = new ManageAccount();

    account.resetPassword(email);

});