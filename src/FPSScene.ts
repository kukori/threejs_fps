import * as THREE from 'three'

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'


export default class FPSScene extends THREE.Scene
{
    private readonly mtlLoader = new MTLLoader()
    private readonly objLoader = new OBJLoader()


    async initialze()
    {
        const tartgetMtl = await this.mtlLoader.loadAsync('assets/targetA.mtl')
        tartgetMtl.preload()

        const target1 = await this.createTarget(tartgetMtl)
        target1.position.x = -1
        target1.position.z = -3

        const target2 = await this.createTarget(tartgetMtl)
        target2.position.x = 1
        target2.position.z = -3

        const target3 = await this.createTarget(tartgetMtl)
        target3.position.x = 2
        target3.position.z = -3

        const target4 = await this.createTarget(tartgetMtl)
        target4.position.x = -2
        target4.position.z = -3

        this.add(target1, target2, target3, target4)

        const blaster = await this.createBlaster()
        blaster.position.z = -1
        this.add(blaster)

        const light = new THREE.DirectionalLight(0xFFFFFF, 1)
        light.position.set(0, 4, 2)

        this.add(light)
    }

    private async createTarget(mtl: MTLLoader.MaterialCreator)
    {
        this.objLoader.setMaterials(mtl)

        const modelRoot = await this.objLoader.loadAsync('assets/targetA.obj')
        modelRoot.rotateY(Math.PI * 0.5)

        return modelRoot
    }

    private async createBlaster()
    {
        const tartgetMtl = await this.mtlLoader.loadAsync('assets/blasterG.mtl')
        tartgetMtl.preload()

        this.objLoader.setMaterials(tartgetMtl)

        const modelRoot = await this.objLoader.loadAsync('assets/blasterG.obj')

        return modelRoot
    }

    update()
    {

    }

}