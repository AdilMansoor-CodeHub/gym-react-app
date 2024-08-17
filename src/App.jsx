import { useState } from 'react'
import Generator from './components/Generator'
import Hero from './components/Hero'
import Workout from './components/Workout'


function App() {
  const [count, setCount] = useState(0)
  const [poison, setPoison] = useState('indiviual');
  const [muscle, setMuscle] = useState([]);
  const [goals, setGoals] = useState('strength_power');
  
  return (
      <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Hero />
      <Generator
        poison={poison}
        setPoison={poison}
        muscle={muscle}
        setMuscle={setMuscle}
        goals={goals}
        setGoals={setGoals}
      />
      <Workout />

    </main>
  )
}

export default App
