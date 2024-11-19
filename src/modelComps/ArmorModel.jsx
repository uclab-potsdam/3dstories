import { useGLTF } from '@react-three/drei'
import { watchLoadedAtom } from '../GlobalState'
import { useAtom } from 'jotai'
import { forwardRef, useEffect } from 'react'

const ArmorModel = forwardRef(({ position, rotation, scale, ...props }, ref) => {
  const [, setWatchLoadedAtom] = useAtom(watchLoadedAtom)

  useEffect(() => {
    setWatchLoadedAtom(true)
    return () => {
      setWatchLoadedAtom(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const { nodes, materials } = useGLTF(import.meta.env.BASE_URL + '/armor.glb')
  materials.material_0.depthWrite = true
  // materials.material_0.metalness = 0
  materials.material_0.transparent = true

  return (
    <group {...props} position={position} scale={scale} dispose={null} rotation={[0, 0, rotation]}>
      <mesh castShadow receiveShadow geometry={nodes.armor.geometry} material={materials.material_0} />
    </group>
  )
})

useGLTF.preload(import.meta.env.BASE_URL + '/armor.glb')

export default ArmorModel
