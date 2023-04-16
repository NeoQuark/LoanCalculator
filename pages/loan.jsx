import { useState } from 'react';

export default function LoanCalculator() {
  const [salary, setSalary] = useState(0);
  const [duration, setDuration] = useState(20);
  const [interest, setInterest] = useState(2);
  const [result, setResult] = useState(null);

  const calculateLoan = () => {
    const r = interest / 12 / 100;
    const n = duration * 12;
    const maxMonthlyPayment = salary * 0.33;
    const loanAmount = maxMonthlyPayment * ((1 - Math.pow(1 + r, -n)) / r);
    setResult(Math.round(loanAmount));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black py-20">
      <div className="container mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg max-w-md mx-auto">
          <h1 className="text-3xl font-semibold mb-6 text-center text-gray-900 dark:text-gray-200">Calculateur de prêt immobilier</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              calculateLoan();
            }}
            className="space-y-6 flex flex-col items-center"
          >
            <div className='w-80'>
              <label htmlFor="salary" className="block text-sm font-medium text-gray-900 dark:text-gray-200">Salaire mensuel :</label>
              <input
                id="salary"
                type="number"
                value={salary}
                onChange={(e) => setSalary(parseFloat(e.target.value))}
                className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
            </div>
            <div className='w-80'>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-900 dark:text-gray-200">Durée du prêt (années) :</label>
              <input
                id="duration"
                type="number"
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value, 10))}
                className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
            </div>
            <div className='w-80'>
              <label htmlFor="interest" className="block text-sm font-medium text-gray-900 dark:text-gray-200">Taux d'intérêt annuel (%) :</label>
              <input
                id="interest"
                type="number"
                step="0.01"
                value={interest}
                onChange={(e) => setInterest(parseFloat(e.target.value))}
                className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
            </div>
            <button type="submit" className="w-52 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Calculer
            </button>
          </form>
          {result !== null && (
              <div className="mt-8 ">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">Montant empruntable :</h2>
                <p className="text-lg text-gray-800 dark:text-gray-100">{result.toLocaleString()} €</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
}
