import { For, type Component } from "solid-js"
import { DiceRoller } from "./dice-roller"

const App: Component = () => {
  return (
    <main class="min-h-screen min-w-screen from-mantis-300 to-mantis-500 bg-gradient-to-b flex justify-center items-center">
      <DiceRoller />
    </main>
  )
}

export default App
