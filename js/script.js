// ========================================
// 1. SÉLECTION DES ÉLÉMENTS HTML
// ========================================

const formulaire = document.getElementById("form-contact");
const zoneMessage = document.getElementById("form-message");


// ========================================
// 2. VÉRIFICATION DU FORMULAIRE
// ========================================

if (formulaire && zoneMessage) {

    // Écouter l'envoi du formulaire
    formulaire.addEventListener("submit", function (event) {

        // Empêcher le rechargement de la page
        event.preventDefault();

        // Vérifier que tous les champs sont correctement remplis
        if (!formulaire.checkValidity()) {

            // Afficher les erreurs de validation Bootstrap
            formulaire.classList.add("was-validated");

            // Afficher un message d'erreur
            zoneMessage.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Veuillez remplir correctement tous les champs obligatoires.
                </div>
            `;

            return;
        }


        // ========================================
        // 3. AFFICHER LE MESSAGE DE CONFIRMATION
        // ========================================

        zoneMessage.innerHTML = `
            <div class="alert alert-success" role="alert">
                <strong>Succès !</strong>
                Votre formulaire a bien été validé !
                <br>
                <small>
                    Démonstration : aucun envoi réel n'est configuré.
                </small>
            </div>
        `;


        // ========================================
        // 4. RÉINITIALISER LE FORMULAIRE
        // ========================================

        formulaire.reset();

        // Retirer les styles de validation
        formulaire.classList.remove("was-validated");

    });

} else {

    // Afficher une erreur dans la console si un élément manque
    console.error(
        "Erreur : le formulaire ou la zone de message est introuvable."
    );

}