import { BoxGeometry, MeshLambertMaterial, Mesh, TextureLoader } from 'three'
import OrangePrototype from '../images/orange-prototype.png'
import BluePrototype from '../images/blue-prototype.png'

const texture = new TextureLoader().load(BluePrototype)
const geometry = new BoxGeometry(1, 1, 1)
const material = new MeshLambertMaterial({
  map: texture
})

const Cube = new Mesh(geometry, material)

export default Cube
