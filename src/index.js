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
import Floor from './models/floor'
import Car, { Move } from './models/car'
import Blocks, { MoveBlocks } from './models/obstacle'
import DetectCollisions from './collision'

/**
 * Config
 */

const FOV = 75
const CLIPPING_NEAR = 0.1
const CLIPPING_FAR = 1000
const ASPECT_RATIO = window.innerWidth / window.innerHeight
let paused = false
let gameOver = false

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

// RENDERER
const renderer = new WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)

// GEOMETRY

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

  if (!gameOver && !paused) {
    MoveBlocks(Blocks)
    gameOver = DetectCollisions(Car, Blocks)
  }

  renderer.render(scene, camera)
}

animate()

/**
 * UI
 */

addEventListener('click', () => {
  console.log('pausing....')
  paused = !paused
})
