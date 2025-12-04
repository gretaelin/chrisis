// app/steps.ts

export type Step = {
  id: number;
  title: string;
  image?: string;
  code: string;
  hint: string;
  fallbackQuestion: string;
  fallbackChoices: string[];
  fallbackCorrect: string;
};

export const STEPS: Step[] = [
  {
    id: 1,
    title: "Julehjertet i køkkenets træ",
    image: "/steps/step1.jpg",
    code: "JULEHYGGE551",
    hint:
      "Hvor duften af kaffe og småkager gror,\n" +
      "ved træets hjerter eventyret bor.",
    fallbackQuestion:
      "Hvilken farve har flest af julehjerterne på træet i køkkenet?",
    fallbackChoices: ["Brune / naturfarvede", "Røde", "Guld"],
    fallbackCorrect: "Brune / naturfarvede",
  },
  {
    id: 2,
    title: "Under sofaen",
    image: "/steps/step2.jpg",
    code: "GLOEGG202",
    hint:
      "På trappen mod første, hvor du løfter dit blik,\n" +
      "ser du sofaens underside i ét, klart øjeblik.\n" +
      "Her hvor man hviler og finder lidt ro,\n" +
      "har nissen gemt endnu et lille ‘go’.",
    fallbackQuestion:
      "Hvilken krydret drik er en klassisk favorit i juletiden?",
    fallbackChoices: ["Gløgg", "Kakao med skumfiduser", "Cola"],
    fallbackCorrect: "Gløgg",
  },
  {
    id: 3,
    title: "Fußball",
    image: "/steps/step3.jpeg",
    code: "TOGETHERPLAY",
    hint:
      "Ved bordfußballen gemmer nissen sig klogt —\n" +
      "kig helt ned, helt under, hvor kun gulvet har udsigt.",
    fallbackQuestion: "Hvor mange spillere er der i alt på et bordfodboldhold?",
    fallbackChoices: ["6", "4", "8"],
    fallbackCorrect: "4",
  },
  {
    id: 4,
    title: "Planten ved Christinas plads",
    image: "/steps/step4.jpeg",
    code: "GAVEREGN808",
    hint: "Ved Christinas plads står en plante. Hintet ligger ikke i den — men under den.",
    fallbackQuestion: "Hvilken type plante står ved Christinas bord?",
    fallbackChoices: ["Monstera", "Fredslilje", "ZZ-plante"],
    fallbackCorrect: "ZZ-plante",
  },
  {
    id: 5,
    title: "Lidias blå hat",
    image: "/steps/step5.jpg",
    code: "PANDA77",
    hint:
      "På skrivebordet ligger en blå hat lidt på skrå —\n" +
      "nisser elsker gemmesteder, og her er der noget at nå.",
    fallbackQuestion: "Hvilken farve har Lidias hue?",
    fallbackChoices: ["Sort", "Blå", "Rød"],
    fallbackCorrect: "Blå",
  },
  {
    id: 6,
    title: "Køkkenet – under småkagedåsen",
    image: "/steps/step6.jpg",
    code: "PEBBERNODDER234",
    hint:
      "Tilbage i køkkenet hvor nisserne bor,\n" +
      "under kagedåsen et lille spor.",
    fallbackQuestion: "Hvilken slags småkager ligger oftest i dåsen?",
    fallbackChoices: ["Pebernødder", "Vaniljekranse", "Brunkager"],
    fallbackCorrect: "Pebernødder",
  },
  {
    id: 7,
    title: "Copenhagen",
    image: "/steps/step7.jpeg",
    code: "AMAGER645",
    hint:
      "I mødelokalet skal du se dig omkring —\n" +
      "kig helt op på hylden, der ligger næste ting.",
    fallbackQuestion: "Hvilken ø del af København ligger Lufthavnen på?",
    fallbackChoices: ["Refshaleøen", "Amager", "Slotsholmen"],
    fallbackCorrect: "Amager",
  },
  {
    id: 8,
    title: "Julehuen ved Iterator-logoet",
    image: "/steps/step8.jpg",
    code: "JULEMAND949",
    hint:
      "Se mod logoet hvor nisserne ler,\n" +
      "en hue der hænger – hvad mon der sker?",
    fallbackQuestion: "Hvilken farve er julehuen ved logoet?",
    fallbackChoices: ["Rød", "Grøn", "Hvid"],
    fallbackCorrect: "Rød",
  },
  {
    id: 9,
    title: "Sunes bord",
    code: "RYDOPSUNE1234",
    hint:
      "Nu går turen til et bord med lidt af hvert,\n" +
      "kig under tingene – ingen spor er gemt for tæt.",
    fallbackQuestion: "Hvilket dyr står i miniform på Sunes bord?",
    fallbackChoices: ["En panda", "En elefant", "En pingvin"],
    fallbackCorrect: "En elefant",
  },
  {
    id: 10,
    title: "Henriettes stol – under sædet",
    image: "/steps/step10.jpeg",
    code: "RISENGROED909",
    hint:
      "Sidst finder du spor hvor man hviler sin ryg,\n" +
      "under Henriettes stol – endnu et nisse-ryg.",
    fallbackQuestion: "Hvilken farve er Henriettes stol?",
    fallbackChoices: ["Sort", "Orange", "Grå"],
    fallbackCorrect: "Sort",
  },
];

export const FINAL_PRIZE = {
  title: "Den sidste skat",
  image: "/steps/prize.jpg",
  locationHint:
    "Den kølige hule hvor julegodter bor,\n" +
    "åbn døren forsigtigt – for her ender dit spor.\n" +
    "🎁 Præmien ligger i køleskabet!",
};
