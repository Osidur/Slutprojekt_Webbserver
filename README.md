# Slutprojekt_Webbserver

Utvärdering (skrevs sist)
    Vi går igenom listan av saker som jag hade planerat.
    Hemsidan blev i slutändan ett forum där användare kan posta inlägg med ett konto. Detta var som planerat men det ända jag kunde ha ändrat på var hur man använda kontot. I nuvarande versionen signar man sitt inlägg samtidigt som man skriver det medans det jag hade i tanken var att man hade en log in session och att inlägget signas automatiskt, så som på vanliga sociala mediers hemsidor.

    Fonten spelar inte alls någon roll bror. Det blev någon bootstrap defualt.

    Färgen blev såklart väldigt vit med lite blå, på grund av bootstraps defualt knappar, men ingen röd färg användes till några error-medelanden. Dock finns det ett error-medelande när man försöker logga in i ett konto vars namn inte finns i databasen.

    Bootstrap användes galant. Det ända som visades behövas var en header och enkla content-rutor så planeringen för strukturen kunde följas utan att ändras på. Det visade sig också väldigt enkelt att lägga till helt nya kategorier och content-rutor, se praxel. Där finner du responsiva content-rutor generarade med bootstraps grid-funktioner och bilder hämtade från en mapp som finns på datorn servern körs på. Anledningen till de tomma rutorna är för att några av filerna som läses in inte är bildfiler och därför inte syns.

    Som sagt gick det att följa planeringen, det ända jag lade till var praxel sidan där jag visar kunskaper på ejs och annan bullshit.

    Databasen sparar allting som jag ville den skulle spara men också användarnas email. Detta är såklart för att kunna kontrollera människor mer ingående och för att kunna skicka in virus i deras datorer som sedan skickar in mikrochip i deras öron. Mail kan också skickas. Jag vet inte varför jag skrev att app.js skulle skicka ut css filer, jag planerade ju att bara använda bootstrap, men app.js skulle säkert kunna göra det om den kände för det på en bra dag.

    Eftersom personan var så otroligt själstom och deprimerad så fick ju såklart hemsidan också sådana vibes. Ok ärligt talat så glömde jag bort personan och programerade bara den mest basic hemsidan jag kunda utan hänsyn till en målgrupp. Men jag antar att en överdrivet minimalistisk hemsida är vad vissa personer vill ha så jag vann ändå?

    Hemsidan är ju så opopulär att inte ens jag har användt den seriöst. Därför har jag hållt mig till scenariot och det håller fortfarande.

    Generalla problem jag stötte på var för det mesta små problem som uppstod på grund av min begränsade kunskap. Dock tack vare den simpla planeringen så visste jag alltid vad det var jag skulle ha, jag behövde aldrig komma på något helt nytt för hemsidan. Till och med login funktionen som senare blev sign funktionen var rätt så mycket samma sak, bara det att login informationen skrevs samtidigt som forum posten. Jag behövde trixa lite med bootstrap för att på hemsidan så responsiv som möjligt, men som sagt så var det inga större problemas.

Hemsidan
    Hemsidan ska vara ett forum om böcker där man kan diskutera med andra användare. Därför heter hemsidan BokDiskus.
Font
    Timeolas new Roman för det är the roman text.
Färg
    Jag vill inte använda så mycket färg. De ända färgerna kanske blir röd för något potentiellt error medelande.
Struktur
    Jag ska använda Bootstrap för detta projekt. Det ska finnas en header-bar och all content visas i en ruta (se Homepage.png). För inlägg av användare kommer content-rutan att upprepas vertikalt. Med detta systemet kan jag enkelt lägga in mer content i form av rutor utan att ändra på den generella strukturen. Min header-bar kommer också vara enkel att utöka så helt nya kategorier kommer inte vara svåra att implementera.

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