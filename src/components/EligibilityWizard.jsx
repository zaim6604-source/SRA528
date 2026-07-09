import { useState } from 'react';
import FadeUp from './FadeUp';

const questions = [
  { id: 'age', label: 'What is your age?', options: ['18-25', '26-35', '36-45', '46-55'] },
  { id: 'skill', label: 'What is your skill level?', options: ['Unskilled', 'Semi-skilled', 'Skilled', 'Professional'] },
  { id: 'edu', label: 'What is your education level?', options: ['Below Matric', 'Matric', 'Intermediate', 'Graduate / Above'] },
  { id: 'exp', label: 'Do you have work experience?', options: ['No experience', '1-3 years', '3-5 years', '5+ years'] },
  { id: 'lang', label: 'Can you speak basic English?', options: ['No', 'Basic', 'Intermediate', 'Fluent'] },
];

const results = {
  '18-25': 'Great! You are in the prime age bracket for Gulf and European opportunities. Many employers seek young, energetic workers.',
  '26-35': 'Excellent! This age range is ideal for most overseas positions. Employers value your experience and energy.',
  '36-45': 'Good! You are eligible for many skilled and supervisory roles. Your experience is an asset.',
  '46-55': 'You are eligible for select roles, especially in supervisory and specialized positions. Contact us for specific opportunities.',
  'Unskilled': 'Many Gulf countries offer entry-level positions. We can help you find suitable roles with on-the-job training.',
  'Semi-skilled': 'You are eligible for a wide range of positions. Many employers value semi-skilled workers for various industries.',
  'Skilled': 'Highly sought after! Skilled workers are in high demand across all our destination countries.',
  'Professional': 'Excellent! Professional roles are available in Gulf and European countries with competitive salaries.',
  'Below Matric': 'You are eligible for many entry-level positions in Gulf countries and some European roles.',
  'Matric': 'Good foundation! Matric is sufficient for many skilled and semi-skilled positions abroad.',
  'Intermediate': 'Great! Intermediate education opens up more opportunities, especially in Gulf countries.',
  'Graduate / Above': 'Excellent! Higher education qualifies you for professional and supervisory roles abroad.',
  'No experience': 'No problem! Many employers provide training. Entry-level positions are available.',
  '1-3 years': 'Good! Entry-level experience is valued by employers. Many opportunities available.',
  '3-5 years': 'Excellent! Mid-level experience is highly sought after across all destinations.',
  '5+ years': 'Outstanding! Extensive experience opens doors to senior and supervisory roles.',
  'No': 'No problem! Basic Arabic or local language phrases can be learned. Many roles don\'t require English.',
  'Basic': 'Good! Basic English is sufficient for many positions. We can help with language training.',
  'Intermediate': 'Great! Intermediate English opens up more opportunities, especially in Europe.',
  'Fluent': 'Excellent! Fluent English qualifies you for the widest range of international positions.',
};

export default function EligibilityWizard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    const newAnswers = { ...answers, [questions[step].id]: answer };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setAnswers(newAnswers);
      setShowResult(true);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const progress = ((step + 1) / questions.length) * 100;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className='flex flex-col justify-center items-center'>
          <div className="pill-badge bg-primary text-white mb-4 mx-auto" style={{ width: 'fit-content' }}>
            <i className="fas fa-clipboard-check" />
            Eligibility Check
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink text-center leading-tight">
            Are You Eligible?
          </h2>
          <p className="text-ink/60 text-center mt-3 max-w-xl mx-auto">
            Answer 5 quick questions and find out if you qualify for overseas employment
          </p>
        </FadeUp>

        <div className="mt-10">
          {!showResult ? (
            <FadeUp key={step}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100">
                {/* Progress bar */}
                <div className="w-full bg-gray-100 rounded-full h-2 mb-6">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="text-xs text-ink/40 font-semibold mb-2">
                  Question {step + 1} of {questions.length}
                </div>

                <h3 className="text-lg font-extrabold text-ink mb-5">{questions[step].label}</h3>

                <div className="space-y-2.5">
                  {questions[step].options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(opt)}
                      className="w-full text-left px-5 py-3.5 rounded-xl border border-gray-200 text-sm font-semibold text-ink hover:border-primary hover:bg-primary/5 transition-all"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </FadeUp>
          ) : (
            <FadeUp>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 text-center">
                <div className="w-16 h-16 rounded-full bg-cta/20 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-check-circle text-3xl text-cta" />
                </div>
                <h3 className="text-xl font-extrabold text-ink mb-2">Your Eligibility Summary</h3>
                <p className="text-sm text-ink/60 mb-6">Based on your answers, here's what we recommend:</p>

                <div className="space-y-3 text-left">
                  {questions.map((q) => (
                    <div key={q.id} className="bg-background rounded-xl p-3.5">
                      <div className="text-xs text-ink/40 font-semibold">{q.label}</div>
                      <div className="text-sm font-extrabold text-ink mt-0.5">{answers[q.id]}</div>
                      <div className="text-xs text-ink/60 mt-1">{results[answers[q.id]]}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://wa.me/923008638517"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-cta text-ink font-extrabold px-6 py-3 rounded-full text-sm hover:brightness-110 transition-all"
                  >
                    <i className="fab fa-whatsapp" />
                    Apply Now
                  </a>
                  <button
                    onClick={reset}
                    className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-bold px-6 py-3 rounded-full text-sm hover:bg-primary hover:text-white transition-all"
                  >
                    <i className="fas fa-redo" />
                    Start Over
                  </button>
                </div>
              </div>
            </FadeUp>
          )}
        </div>
      </div>
    </section>
  );
}