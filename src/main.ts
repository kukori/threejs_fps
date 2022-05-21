import * as THREE from 'three'

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

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshPhongMaterial({ color: 0xFFAD00 })

const cube = new THREE.Mesh(geometry, material)
cube.position.z = -5
cube.position.y = 1

scene.add(cube)

const light = new THREE.DirectionalLight(0xFFFFFF, 1)
light.position.set(0, 4, 2)

scene.add(light)


renderer.render(scene, mainCamera)