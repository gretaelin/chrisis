// app/steps.ts

export type Step = {
  id: number;
  title: string;
  image: string;
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
    fallbackQuestion: "Hvad farve er de fleste julehjerter på træet i køkkenet?",
    fallbackChoices: ["Røde", "Gule", "Blå"],
    fallbackCorrect: "Røde",
  },
  {
    id: 2,
    title: "Under sofaen",
    image: "/steps/step2.jpg",
    code: "GLOEGG202",
    hint:
      "Hvor man hviler fødder og finder ro,\n" +
      "gemmer nissen endnu et lille ‘go’.",
    fallbackQuestion: "Hvad står der på skiltet på væggen ved sofaområdet?",
    fallbackChoices: ["Relax", "Take a break", "Chill zone"],
    fallbackCorrect: "Take a break",
  },
  {
    id: 3,
    title: "Bordfodbolden",
    image: "/steps/step3.jpg",
    code: "TOGETHERPLAY",
    hint:
      "Her spilles der kampe med grin og gevind,\n" +
      "en bold og lidt held – og du er på vej i vind.",
    fallbackQuestion: "Hvor mange spillere er der i alt på et bordfodboldhold?",
    fallbackChoices: ["11", "4", "8"],
    fallbackCorrect: "4",
  },
  {
    id: 4,
    title: "Planten ved Christinas plads",
    image: "/steps/step4.jpg",
    code: "GAVEREGN808",
    hint:
      "Nu skal du tæt på kolleger – måske, måske ej,\n" +
      "blot kig ved planten, så finder du vej.",
    fallbackQuestion: "Hvilken type plante står ved Christinas bord?",
    fallbackChoices: ["Monstera", "Fredslilje", "ZZ-plante"],
    fallbackCorrect: "Monstera",
  },
  {
    id: 5,
    title: "Lidias blå hue",
    image: "/steps/step5.jpg",
    code: "PANDA77",
    hint:
      "Når vinterens kulde gør kinderne røde,\n" +
      "kan Lidia varme sig med en blå, blød hue.",
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
    title: "København / Amager-hintet",
    image: "/steps/step7.jpg",
    code: "AMAGER645",
    hint:
      "En rejse i tanken – til byen så kær,\n" +
      "en bro, en ø, du ved sikkert hvor det er.",
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
    image: "/steps/step9.jpg",
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
    image: "/steps/step10.jpg",
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
