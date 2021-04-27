# Slutprojekt_Webbserver

Hemsidan
    Hemsidan ska vara ett forum om böcker där man kan diskutera med andra användare. Därför heter hemsidan BokDiskus.

Font
    Timeolas new Roman för det är the roman text.
Färg
    Jag vill inte använda så mycket färg. De ända färgerna kanske blir röd för något potentiellt error medelande.
Struktur
    Jag ska använda Bootstrap för detta projekt. Det ska finnas en header-bar och all content visas i en ruta (se Homepage.png). För inlägg av användare kommer content-rutan att upprepas vertikalt. Med detta systemet kan jag enkelt lägga in mer content i form av rutor utan att ändra på den generella strukturen. Min header-bar kommer också vara enkelt att utöka så helt nya kategorier kommer inte vara svårt att implementera.

    Sidor
        Homepage
            Här ska det finnas en introduktion till hemsidan.
        Forum
            Här ska alla användarnas inlägg finnas.
        About
            Här ska det finnas mer ingående info om hemsidan.
        Login
            Här ska det finnas Login fält. Användarnamn, lösenord.

        About <-- Home --> Forum
                   I
                   V
              Login/Logout

Databas
    Användarnamn, koder och inlägg på forumet sparas i databasen.
    app.js tar emot alla get och post requests och skickar ut ejs och css filer.

Persona.
    Berteel.
    Persona läser böcker lite då o då. Hen är en hipster. Är så ensam att hen kommunicerar med vem som helst, till och med med främlingar på internet.
    20 åår.
    Kön är för mainstream och i dagens samhälle behöver man inte ha ett kön.
    Ögon? Check. Händer? Check.

Scenario.
    Det finns ingen hemsida som är tillräckligt opopulär för våran Berteel. Berteel är en jävla hipster som inte vill använda mainstream sociala medier och därför letar hen efter den värsta hemsidan som finns för bokdiskussion. Därför kommer denna hemsidan att användas av just denna person.