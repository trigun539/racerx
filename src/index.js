import {
  Scene,
  Color,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshLambertMaterial,
  Mesh,
  AmbientLight,
  PointLight
} from 'three'
import Cube from './models/cube'
import Floor from './models/floor'
import Car, { Move } from './models/car'
import Blocks, { MoveBlocks } from './models/obstacle'

/**
 * Config
 */

const FOV = 75
const CLIPPING_NEAR = 0.1
const CLIPPING_FAR = 1000
const ASPECT_RATIO = window.innerWidth / window.innerHeight

// SCENE

const scene = new Scene()
scene.background = new Color(0xdddddd)

// CAMERA
const camera = new PerspectiveCamera(
  FOV,
  ASPECT_RATIO,
  CLIPPING_NEAR,
  CLIPPING_FAR
)

camera.position.z = 7
camera.position.y = 2
// camera.position.y = -1

// RENDERER
const renderer = new WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)

// GEOMETRY

// scene.add(Cube)
scene.add(Floor)
scene.add(Car)
Blocks.forEach(block => scene.add(block))

// Lights

const light = new AmbientLight(0xffffff, 1)

scene.add(light)

/**
 * Movement
 */

Move(Car)

/**
 * Animation
 */

function animate() {
  requestAnimationFrame(animate)

  Cube.rotation.x += 0.01
  Cube.rotation.y += 0.01

  MoveBlocks(Blocks)

  renderer.render(scene, camera)
}

animate()
