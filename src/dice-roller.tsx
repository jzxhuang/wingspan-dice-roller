import { For, createSignal } from "solid-js"
import { Dice, DiceFace, DiceState } from "./dice"

const NUM_DICE = 5
const faces: DiceFace[] = ["worm", "wheat", "cherry", "fish", "mouse", "worm-wheat"]

const rollDice = (dice: DiceState[], opts?: { matcher?: (dice: DiceState) => boolean; resetIsAvailable?: boolean }) => {
  const { matcher, resetIsAvailable } = opts || {}
  return dice.map((d) => {
    if (matcher && !matcher(d)) return d
    return {
      face: faces[Math.floor(Math.random() * faces.length)],
      isAvailable: resetIsAvailable ? true : d.isAvailable,
    }
  })
}

export function DiceRoller() {
  const [tab, setTab] = createSignal<"in" | "out">("in")
  const [dice, setDice] = createSignal(rollDice(new Array(NUM_DICE).fill({ face: "worm", isAvailable: true })))

  return (
    <div class="max-w-[800px] grid gap-4 rounded bg-black/20 shadow-sm shadow-black/30 backdrop-blur-lg px-3 xs:px-4 sm:px-6 py-3 sm:py-5 mx-8 w-full">
      <div
        role="tablist"
        aria-orientation="horizontal"
        class="grid grid-cols-2 bg-gray-200 p-1.5 rounded justify-center mb-2"
      >
        <button
          class="bg-transparent py-2 rounded text-neutral-800 font-semibold transition-colors aria-[selected=true]:bg-emerald-300  aria-[selected=true]:text-black"
          type="button"
          role="tab"
          aria-selected={tab() === "in"}
          onClick={() => setTab("in")}
        >
          Dice in feeder
        </button>
        <button
          class="bg-transparent py-2 rounded text-neutral-800 font-semibold transition-colors aria-[selected=true]:bg-emerald-300  aria-[selected=true]:text-black"
          type="button"
          role="tab"
          aria-selected={tab() === "out"}
          onClick={() => setTab("out")}
        >
          Dice outside feeder
        </button>
      </div>

      <div class="grid grid-cols-5 gap-2 xs:gap-4 sm:gap-8">
        <For each={dice()}>
          {(dice, index) => {
            return (
              <Dice
                diceState={{ ...dice, isAvailable: tab() === "in" ? dice.isAvailable : !dice.isAvailable }}
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

      <button
        class="bg-yellow-400 font-bold text-black text-xl rounded-md px-4 py-3"
        onClick={() =>
          setDice((prev) =>
            rollDice(prev, {
              matcher: tab() === "out" ? (d) => !d.isAvailable : undefined,
              resetIsAvailable: tab() === "in" ? true : undefined,
            })
          )
        }
      >
        Roll {tab() === "in" ? "All Dice" : "Dice Outside Feeder"}
      </button>
    </div>
  )
}
