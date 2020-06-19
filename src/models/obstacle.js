import { BoxGeometry, MeshLambertMaterial, Mesh, TextureLoader } from 'three'
import { Randomize } from '../utils/general'
import BluePrototype from '../images/blue-prototype.png'

const LANES = [-1.5, 0, 1.5]
const BLOCK_COUNT = 40
const COURSE_LENGTH = 30
const COURSE_SPEED = 0.1
const Blocks = []
const texture = new TextureLoader().load(BluePrototype)
const geometry = new BoxGeometry(1, 1, 1)
const material = new MeshLambertMaterial({
  map: texture
})

const Z_POSITIONS = []

for (let i = 0; i < COURSE_LENGTH; i++) {
  Z_POSITIONS.push(i * -5 - 20) - 20
}

for (let i = 0; i < BLOCK_COUNT; i++) {
  const cube = new Mesh(geometry, material)
  cube.position.x = Randomize(LANES)
  cube.position.y = 1 / 2
  cube.position.z = Randomize(Z_POSITIONS)

  Blocks.push(cube)
}

export function MoveBlocks(blocks) {
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].position.z += COURSE_SPEED
  }
}

export default Blocks
