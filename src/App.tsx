import { type Component } from "solid-js"
import { DiceRoller } from "./dice-roller"

const App: Component = () => {
  return (
    <main class="min-h-screen min-w-screen from-mantis-300 to-mantis-500 bg-gradient-to-b flex flex-col justify-center items-center px-2">
      <div class="mb-6 xs:mb-8 sm:mb-12 text-white text-center">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold">Wingspan Dice Roller</h1>
        <p class="text-base mt-4">A wingspan dice roller in case you forget your dice.</p>
      </div>
      <DiceRoller />
      <a
        class="mt-4 sm:mt-8 text-white underline"
        href="https://github.com/jzxhuang/wingspan-dice-roller"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    </main>
  )
}

export default App
