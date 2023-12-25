import Cherry from "./assets/dice-faces/cherry.png"
import Fish from "./assets/dice-faces/fish.png"
import Worm from "./assets/dice-faces/worm.png"
import Wheat from "./assets/dice-faces/wheat.png"
import Mouse from "./assets/dice-faces/mouse.png"
import WormWheat from "./assets/dice-faces/worm-wheat.png"

export type DiceFace = "worm" | "wheat" | "cherry" | "fish" | "mouse" | "worm-wheat"
export type DiceState = {
  face: DiceFace
  isAvailable: boolean
}

const facesToImg = {
  worm: Worm,
  wheat: Wheat,
  cherry: Cherry,
  fish: Fish,
  mouse: Mouse,
  "worm-wheat": WormWheat,
}

type DiceProps = {
  diceState: DiceState
  onClick: () => void
}

export function Dice(props: DiceProps) {
  return (
    <button
      class="group relative rounded-lg overflow-hidden"
      onClick={props.onClick}
      data-available={props.diceState.isAvailable}
    >
      <img src={facesToImg[props.diceState.face]} alt={props.diceState.face} />
      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors group-data-[available=false]:bg-black/60" />
    </button>
  )
}
