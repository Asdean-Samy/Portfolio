jQuery(':button').click(function(){
    var formulaire = new FormData($('form')[0]);
    $.ajax({
    url: 'upload.php', //script qui traitera l'envoi du fichier
    type: 'POST',
    xhr: function() { // xhr qui traite la barre de progression
    myXhr = $.ajaxSettings.xhr();
    if(myXhr.upload){ // vérifie si l'upload existe
    myXhr.upload.addEventListener('progress',afficherAvancement, false); // Pour ajouter l'évènement progress sur l'upload de fichier
    }
    return myXhr;
    },
    //Traitements AJAX
    beforeSend: traitementAvantEnvois,
    success: traitementSiReussite,
    error: taitementSiEchec,
    //Données du formulaire envoyé
    data: formData,
    //Options signifiant à jQuery de ne pas s'occuper du type de données
    cache: false,
    contentType: false,
    processData: false
    });
    });
    function afficherAvancement(e){
    if(e.lengthComputable){
    $('progress').attr({value:e.loaded,max:e.total});
    }
    }

    document.querySelector("#form").addEventListener("submit",function(e){
        var cp = document.querySelector("#mentions")
        if (mentions.checked === false){
            alert("Vous n'avez pas acceptés les CGU")
            e.preventDefault()
        } 
    })

