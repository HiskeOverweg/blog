---
title: Rabobank en Microsoft - carbon banking
date: 2021-01-29
tags: post
layout: dutch.md
---

Eergisteren verscheen er in het NRC [een artikel](https://www.nrc.nl/nieuws/2021/01/28/elke-bank-moet-een-carbon-bank-worden-en-rabo-wil-de-eerste-zijn-a4029689) over de "carbon banking" plannen van Rabobank en Microsoft. De volgende figuur vat de plannen samen: het doel is om bomen te planten op een gebied van 15 miljoen hectare en daarmee in 2025 de uitstoot van 150 Mton CO2 (volgens het artikel gelijk aan 0.5% van de jaarlijkse wereldwijde uitstoot) te compenseren.

![](https://hiskeoverweg.files.wordpress.com/2021/01/image952.png?w=1024)

Het plan van Rabobank en Microsoft

Laten we eens kijken of we die getallen kunnen reproduceren. Ik gebruik hiervoor de En-ROADS climate simulator (ontwikkeld door MIT Sloan School of Management en de denktank Climate Interactive). Het model is [gecalibreerd](https://youtu.be/M2zUFuXmhDs) aan de hand van 6 "integrated assessment models", dit zijn de meest accurate klimaatmodellen ter wereld.[^1]

##### Wereldwijde CO2 uitstoot

Als we in En-ROADs kijken naar de wereldwijde CO2 uitstoot, zitten we vandaag de dag op 60 Gton per jaar. 0.5% daarvan is dus 300 Mton en niet 150 Mton. Maar goed, ik heb ook een jaartje sterrenkunde gestudeerd, dus een verschil van een factor twee, [daar lig ik nou niet echt van wakker](https://www.explainxkcd.com/wiki/index.php/2205:_Types_of_Approximation).

![](https://hiskeoverweg.files.wordpress.com/2021/01/business_as_usual.png?w=969)

##### Bebossing in En-ROADS

De maximale hoeveelheid land die wereldwijd beschikbaar zou kunnen zijn om bomen te planten is ongeveer [700 miljoen hectare](https://science.sciencemag.org/content/365/6448/76). Dan hebben we het over twee keer het oppervlak van India. De 15 miljoen hectare waar Rabobank en Microsoft over praten, is 2% daarvan. Laten we optimistisch zijn en aannemen dat het lukt om al de benodigde bomen dit jaar nog te planten. In de onderstaande grafiek, die netto CO2 verwijdering weergeeft, zien we een héél klein groen lijntje ontstaan (bovenop de horizontale as, het is lastig te zien). De hoeveelheid CO2 die in 2025 op deze manier wordt verwijdert is 4 Mton.

![](https://hiskeoverweg.files.wordpress.com/2021/01/bos.png?w=684)

CO2 verwijdering wanneer 15 miljoen hectare in 2021 wordt bebost

##### 2 x India

Laten we een onrealistisch gedachte-experiment doen. Stel, we zouden in 2021 bomen planten op een oppervlak ter grootte van twee keer India, dan zouden we de 150 Mton die Microsoft en Rabobank noemen nét halen.[^2]

![](https://hiskeoverweg.files.wordpress.com/2021/01/bos2.png?w=691)

CO2 verwijdering wanneer we in 2021 een oppervlak ter grootte van twee keer India bebossen.

##### Koolstofvastlegging in landbouwgrond

In de plannen van Microsoft en Rabobank wordt gesproken over agroforestry. Deze teeltwijze, waarbij bomen worden gecombineerd met landbouw op hetzelfde perceel, heeft nog een belangrijk mechanisme om CO2 uit de lucht te verwijderen: het verbetert de bodemkwaliteit, wat er toe leidt dat de bodem meer koolstof kan vastleggen.[^3] Komen we op die manier dichter bij de 150 Mton die Microsoft en Rabobank zich ten doel stellen? Het wereldwijde landbouwoppervlak bedraagt [5 miljard ha](http://www.fao.org/sustainability/news/detail/en/c/1274219/). In dit project hebben we het dus over 3% van dat oppervlak. Laten we eens kijken waar koolstofvastlegging op die schaal toe leidt in En-ROADS. De extra koolstofvastlegging bedraagt 20 Mton (helaas kan ik de schaal van de verticale as niet aanpassen):

![](https://hiskeoverweg.files.wordpress.com/2021/01/soil-2.png?w=679)

CO2 verwijdering door koolstofvastlegging in de bodem

##### Wat mist er nog?

We hebben 24 Mton CO2 verwijdering aannemelijk gemaakt met ons model. We missen dus nog een significant deel van 150 Mton waar Rabobank en Microsoft van spreken. Zijn onze aannames wel correct? Met de standaard instelling in En-ROADS, duurt het 80 jaar totdat een _gemiddelde_ boom _in een bos_ volgroeid is. De bomen waar we het hier over hebben staan op akkers ten zuiden van de Sahara. Ze vangen daarom meer zonlicht dan de gemiddelde boom, en groeien wellicht sneller. Aan de andere kant, ze groeien vaak in droge gebieden met slechte bodemkwaliteit, dus ze zouden ook lángzamer kunnen groeien (wie kan het me vertellen?). Laten we kijken wat er gebeurt als bomen sneller zouden groeien. We passen de instelling in En-ROADS aan zodat het 20 jaar duurt voor bomen volgroeid zijn, in plaats van 80 jaar. Met deze instelling behalen we het gewenste doel.[^4]

![](https://hiskeoverweg.files.wordpress.com/2021/01/fast_trees-2.png?w=673)

CO2 verwijdering indien bomen in 20 jaar volgroeid zijn

##### Conclusie

**Volgens de En-ROADS climate simulator zou met het plan van Microsoft en Rabobank in 2025 24 Mton aan CO2 uit de atmosfeer worden verwijderd.** Indien tropische bomen op akkers in Afrika in 20 jaar volgroeid zijn, in plaats van de 80 jaar die een gemiddelde boom daar over doet, dán halen we het doel van Microsoft en Rabobank wel (mocht je verstand hebben van tropische bomen, laat het me weten!). Het zou interessant zijn als Rabobank en Microsoft inzage geven in welke aannames zij hebben gemaakt. Bomen planten lijkt me een nobel streven, maar ik zou graag een betere onderbouwing van de cijfers zien. _Microsoft runs on trust ([aldus Microsoft](https://www.microsoft.com/en-us/legal/compliance/integrity)). Well, I trust transparency._

##### Feedback

Laat me weten welke aannames volgens jou niet kloppen! Je kunt me bereiken via _enroads \[at\] his.ke_ of via LinkedIn.

##### Meer informatie over En-ROADS

Ben je benieuwd naar de En-ROADS climate workshop? Volg de workshop [op de En-ROADS website](https://www.climateinteractive.org/get-involved/webinars/) (in het Engels), bekijk een [lange](https://www.youtube.com/watch?v=R9W_KEXNzm4&t=0s) of een [korte](https://www.youtube.com/watch?v=u5mrnkOJdso) opname ervan op YouTube of contacteer één van de Nederlandse [En-ROADS climate ambassadors](https://www.climateinteractive.org/tools/en-roads/climate-ambassadors/) voor een interactieve sessie in het Nederlands.

[^1]: Meer informatie over de aannames van het model kun je vinden in de [En-ROADS reference guide](https://img.climateinteractive.org/wp-content/uploads/2021/01/En-ROADS_Reference_Guide_012221.pdf). Mocht je het er niet mee eens zijn, dan kun je de aannames ook naar eigen inzicht aanpassen in de simulator.

[^2]: Lees [hier](https://docs.climateinteractive.org/projects/en-roads/en/latest/guide/afforestation.html) meer over de positieve en negatieve neveneffecten van grootschalige bebossing.

[^3]: De documentaire [Kiss the Ground](https://kisstheground.com/) gaat hier nader op in.

[^4]: Een ander aspect dat niet aan bod komt in het persbericht over dit plan is de vraag hoe boeren gemotiveerd worden om mee te doen. Ik ben enthousiast over de [PIP approach](https://www.wur.nl/en/Research-Results/Research-Institutes/Environmental-Research/Programmes/Sustainable-Land-Use/Sustainable-production-systems/The-PIP-approach-proud-farmers-better-soils-more-food.htm)
