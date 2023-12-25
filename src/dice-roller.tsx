import { For, createSignal } from "solid-js"
import { Dice, DiceFace, DiceState } from "./dice"

const NUM_DICE = 5
const faces: DiceFace[] = ["worm", "wheat", "cherry", "fish", "mouse", "worm-wheat"]

const rollDice = (dice: DiceState[]) => {
  return dice.map(() => {
    return { face: faces[Math.floor(Math.random() * faces.length)], isAvailable: true }
  })
}

export function DiceRoller() {
  const [dice, setDice] = createSignal(rollDice(new Array(NUM_DICE).fill({ face: "worm", isAvailable: true })))

  return (
    <div class="max-w-[800px] grid gap-4 mx-8">
      <div class="grid grid-cols-5 gap-8">
        <For each={dice()}>
          {(dice, index) => {
            return (
              <Dice
                diceState={dice}
                onClick={() => {
                  setDice((dice) => {
                    const newDice = [...dice]
                    const i = index()
                    newDice[i] = { ...dice[i], isAvailable: !dice[i].isAvailable }
                    return newDice
                  })
                }}
              />
            )
          }}
        </For>
      </div>

      <button class="bg-yellow-400 font-bold text-black text-xl rounded-md px-4 py-3" onClick={() => setDice(rollDice)}>
        Roll
      </button>
    </div>
  )
}
