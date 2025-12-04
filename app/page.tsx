// app/page.tsx
"use client";

import { useEffect, useState, startTransition } from "react";
import { STEPS, FINAL_PRIZE } from "./steps";
import Image from "next/image";

const STORAGE_KEY = "nisse-hunt-progress-v1";

type Progress = {
  currentIndex: number;
  finished: boolean;
};

type Mode = "landing" | "playing" | "finished";

export default function Page() {
  const totalSteps = STEPS.length;

  const [progress, setProgress] = useState<Progress>({
    currentIndex: 0,
    finished: false,
  });

  const [mode, setMode] = useState<Mode>("landing");
  const [hasExisting, setHasExisting] = useState(false);

  const [codeInput, setCodeInput] = useState("");
  const [quizMode, setQuizMode] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [error, setError] = useState("");

  const currentStep =
    !progress.finished && progress.currentIndex < totalSteps
      ? STEPS[progress.currentIndex]
      : null;

  const percent = progress.finished
    ? 100
    : Math.round((progress.currentIndex / totalSteps) * 100);

  // Hent gemt fremgang
  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    try {
      const saved = JSON.parse(raw) as Progress;
      startTransition(() => {
        setProgress(saved);
        setHasExisting(true);
        setMode(saved.finished ? "finished" : "landing");
      });
    } catch {
      // ignorer
    }
  }, []);

  // Gem fremgang
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // ignorer
    }
  }, [progress]);

  function resetInputs() {
    setCodeInput("");
    setQuizMode(false);
    setSelectedChoice(null);
    setError("");
  }

  function startNew() {
    setProgress({ currentIndex: 0, finished: false });
    resetInputs();
    setMode("playing");
    setHasExisting(true);
  }

  function continueGame() {
    resetInputs();
    if (progress.finished) setMode("finished");
    else setMode("playing");
  }

  function goNext() {
    resetInputs();
    if (progress.currentIndex + 1 >= totalSteps) {
      setProgress({ currentIndex: totalSteps, finished: true });
      setMode("finished");
      return;
    }

    setProgress((prev) => ({
      currentIndex: prev.currentIndex + 1,
      finished: false,
    }));
  }

  function submitCode(e: React.FormEvent) {
    e.preventDefault();
    if (!currentStep) return;

    const input = codeInput.trim().toLowerCase();
    if (!input) {
      setError("Skriv koden fra sedlen 🎄");
      return;
    }

    if (input === currentStep.code.toLowerCase()) {
      goNext();
    } else {
      setError("Den kode ser forkert ud. Prøv igen ✨");
    }
  }

  function paperGone() {
    const ok = confirm(
      "Er du sikker på, at sedlen er væk? Så får du et spørgsmål i stedet."
    );
    if (!ok) return;
    setQuizMode(true);
    setError("");
    setSelectedChoice(null);
  }

  function submitQuiz(e: React.FormEvent) {
    e.preventDefault();
    if (!currentStep) return;

    if (!selectedChoice) {
      setError("Vælg et svar for at komme videre 🧠");
      return;
    }

    if (selectedChoice === currentStep.fallbackCorrect) {
      goNext();
    } else {
      setError(
        "Det var ikke helt rigtigt. Kig dig lidt mere omkring og prøv igen 👀"
      );
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-700 via-red-800 to-black flex items-center justify-center p-4 relative">
      {/* Sne-overlay – byt / fjern hvis du har en anden fil */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('/snow.gif')] bg-cover" />

      <div className="relative z-10 w-full max-w-xl bg-white/95 rounded-2xl shadow-2xl p-6 backdrop-blur-lg border border-red-200">
        {/* Header */}
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-extrabold text-red-700 drop-shadow-sm">
            Hemmeligt Juleløb på Kontoret
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            En lille nisse har gemt en præmie – følg sporene, kode for kode,
            gennem kontorets julemode.
          </p>
        </header>

        {/* Progress bar */}
        <div className="mb-6">
          <p className="text-xs text-gray-600 mb-1">
            Fremgang:{" "}
            {progress.finished
              ? "Færdig 🎁"
              : `${progress.currentIndex}/${totalSteps} steder`}
          </p>
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-300"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>

        {/* LANDING */}
        {mode === "landing" && (
          <section className="space-y-4">
            <p className="text-gray-800 text-sm">
              Du får vist et billede af et sted på kontoret. Gå derhen, find
              sedlen med koden og skriv koden ind her i app’en. Til sidst venter
              der en kold, lækker præmie. 🎁
            </p>

            <button
              onClick={startNew}
              className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 rounded-xl shadow-sm border border-red-700"
            >
              🎄 Start juleløbet
            </button>

            {hasExisting && (
              <button
                onClick={continueGame}
                className="w-full bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 rounded-xl border border-green-500"
              >
                ➡️ Fortsæt hvor du slap
              </button>
            )}
          </section>
        )}

        {/* PLAYING */}
        {mode === "playing" && currentStep && (
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-green-800">
                Trin {progress.currentIndex + 1} af {totalSteps}
              </h2>
              <p className="text-sm text-gray-700">{currentStep.title}</p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md border border-red-100">
              {currentStep.image ? (
                <Image
                  src={currentStep.image}
                  alt={currentStep.title}
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                  Det var umuligt for nissen at tage et billede her!
                </div>
              )}
            </div>

            <p className="whitespace-pre-line text-sm text-gray-800 border-l-4 border-green-500 pl-3">
              {currentStep.hint}
            </p>

            {/* KODE-FORM, hvis ikke i quiz-mode */}
            {!quizMode && (
              <form onSubmit={submitCode} className="space-y-3">
                <label className="block text-sm font-medium text-gray-800">
                  Kode fra sedlen:
                  <input
                    value={codeInput}
                    onChange={(e) => setCodeInput(e.target.value)}
                    placeholder="Skriv koden her…"
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-xl shadow-sm border border-green-700 text-sm"
                >
                  Lås næste sted op
                </button>

                <button
                  type="button"
                  onClick={paperGone}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2.5 rounded-xl text-sm border border-gray-300"
                >
                  🧻 Sedlen er væk?
                </button>
              </form>
            )}

            {/* QUIZ – multiple choice */}
            {quizMode && (
              <form onSubmit={submitQuiz} className="space-y-3">
                <p className="text-sm font-semibold text-gray-800">
                  Sedlen er væk – nissen giver dig i stedet et spørgsmål:
                </p>
                <p className="text-sm text-gray-700 italic">
                  {currentStep.fallbackQuestion}
                </p>

                <div className="space-y-2">
                  {currentStep.fallbackChoices.map((choice) => (
                    <label
                      key={choice}
                      className={`flex items-center gap-2 text-sm rounded-lg border px-3 py-2 cursor-pointer ${
                        selectedChoice === choice
                          ? "border-green-600 bg-green-50"
                          : "border-gray-300 bg-white hover:bg-gray-50"
                      }`}
                    >
                      <input
                        type="radio"
                        className="h-4 w-4 text-green-600"
                        checked={selectedChoice === choice}
                        onChange={() => setSelectedChoice(choice)}
                      />
                      <span>{choice}</span>
                    </label>
                  ))}
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-xl shadow-sm border border-green-700 text-sm"
                >
                  Svar og fortsæt
                </button>
              </form>
            )}

            {error && (
              <p className="text-sm text-red-700 font-semibold text-center">
                {error}
              </p>
            )}
          </section>
        )}

        {/* FINISHED */}
        {mode === "finished" && (
          <section className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-green-700">
              Du klarede det! 🎁
            </h2>
            <p className="text-sm text-gray-800 whitespace-pre-line">
              {FINAL_PRIZE.locationHint}
            </p>

            <div className="rounded-xl overflow-hidden shadow-md border border-green-200">
              <Image
                src={FINAL_PRIZE.image}
                alt={FINAL_PRIZE.title}
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>

            <button
              onClick={startNew}
              className="w-full bg-white hover:bg-gray-50 text-gray-900 py-2.5 rounded-xl border border-red-400 text-sm font-semibold"
            >
              Start juleløbet forfra
            </button>
          </section>
        )}

        {/* Fake WordPress-footer */}
        <footer className="mt-8 pt-4 border-t border-gray-200 text-center text-[11px] text-gray-500">
          <div>© {new Date().getFullYear()} Hemmeligt Juleløb på Kontoret</div>
          <div className="mt-1">
            Tema: Snowy Office by NissePress — Proudly powered by WordPress
          </div>
        </footer>
      </div>
    </div>
  );
}
