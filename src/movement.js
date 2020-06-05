import { ARROW_LEFT, ARROW_RIGHT } from './keys'

const M = { x: 0, y: -1, z: 3.1 }
const L = { x: -0.75, y: -1, z: 3.1 }
const R = { x: 0.75, y: -1, z: 3.1 }

export default function Movement(car) {
  window.addEventListener('keydown', ({ keyCode }) => {
    if (keyCode === ARROW_LEFT) {
      camera.position.x -= 0.05
    }

    if (keyCode === ARROW_RIGHT) {
      camera.position.x += 0.05
    }
  })
}
