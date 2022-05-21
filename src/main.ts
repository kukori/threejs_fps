import * as THREE from 'three'
import FPSScene from './FPSScene'

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height =  window.innerHeight

    // Update camera
    mainCamera.aspect = sizes.width / sizes.height
    mainCamera.updateProjectionMatrix()

    //Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}) 

const renderer = new THREE.WebGL1Renderer({
  canvas: document.getElementById('app') as HTMLCanvasElement
})

renderer.setSize(sizes.width, sizes.height)

const mainCamera = new THREE.PerspectiveCamera(60, sizes.width/sizes.height, 0.1, 100)

const scene = new FPSScene()
scene.initialze()

function tick() 
{
  scene.update()
  renderer.render(scene, mainCamera)
  requestAnimationFrame(tick)
}

tick()