import {
  TextureLoader,
  PlaneBufferGeometry,
  MeshBasicMaterial,
  Mesh,
  DoubleSide,
  RepeatWrapping
} from 'three'
import OrangePrototype from '../images/orange-prototype.png'

const texture = new TextureLoader().load(OrangePrototype)
texture.wrapS = texture.wrapT = RepeatWrapping
texture.repeat.set(50, 50)

const geometry = new PlaneBufferGeometry(50, 50, 5)
const material = new MeshBasicMaterial({
  map: texture,
  side: DoubleSide
})
const plane = new Mesh(geometry, material)

plane.position.z = 1
plane.position.y = 0
plane.rotateX(-90 * (Math.PI / 180))

export default plane
