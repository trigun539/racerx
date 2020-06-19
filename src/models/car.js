import {
  BoxGeometry,
  MeshLambertMaterial,
  TextureLoader,
  Mesh,
  Vector3
} from 'three'
import { ARROW_LEFT, ARROW_RIGHT } from '../keys'
import RedPrototype from '../images/red-prototype.png'

const positions = {
  middle: { x: 0, y: 1 / 2, z: 3.1 },
  left: { x: -1.5, y: 1 / 2, z: 3.1 },
  right: { x: 1.5, y: 1 / 2, z: 3.1 }
}
const geometry = new BoxGeometry(1, 1, 1)
const texture = new TextureLoader().load(RedPrototype)
const material = new MeshLambertMaterial({
  map: texture
  // color: 0x056d97
})

const Car = new Mesh(geometry, material)

// Initial Position
Car.position.x = positions.middle.x
Car.position.y = positions.middle.y
Car.position.z = positions.middle.z

let currentPos = 'middle'

export function Move(car) {
  window.addEventListener('keydown', ({ keyCode }) => {
    if (keyCode === ARROW_LEFT) {
      if (currentPos === 'middle') {
        Car.position.x = positions.left.x
        Car.position.y = positions.left.y
        Car.position.z = positions.left.z
        currentPos = 'left'
      }

      if (currentPos === 'right') {
        Car.position.x = positions.middle.x
        Car.position.y = positions.middle.y
        Car.position.z = positions.middle.z
        currentPos = 'middle'
      }
    }

    if (keyCode === ARROW_RIGHT) {
      if (currentPos === 'middle') {
        Car.position.x = positions.right.x
        Car.position.y = positions.right.y
        Car.position.z = positions.right.z
        currentPos = 'right'
      }

      if (currentPos === 'left') {
        Car.position.x = positions.middle.x
        Car.position.y = positions.middle.y
        Car.position.z = positions.middle.z
        currentPos = 'middle'
      }
    }
  })
}

export default Car
