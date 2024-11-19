import { useGLTF } from '@react-three/drei'
import { watchLoadedAtom } from '../GlobalState'
import { useAtom } from 'jotai'
import { forwardRef, useEffect } from 'react'

const GreekStyleDressModel = forwardRef(({ position, rotation, ...props }, ref) => {
  const [, setWatchLoadedAtom] = useAtom(watchLoadedAtom)

  useEffect(() => {
    setWatchLoadedAtom(true)
    return () => {
      setWatchLoadedAtom(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const { nodes, materials } = useGLTF(import.meta.env.BASE_URL + '/greek_style_dress.glb')
  materials.material_0.depthWrite = true
  materials.material_0.metalness = 0
  materials.material_0.roughness = 1
  materials.material_0.transparent = true

  console.debug('GreekStyleDressModel', materials.material_0)

  return (
    <group {...props} position={position} dispose={null} rotation={[0, 0, rotation]}>
      <mesh
        scale={0.035}
        castShadow
        receiveShadow
        ref={ref}
        geometry={nodes.greek_style_dress.geometry}
        material={materials.material_0}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
})

useGLTF.preload(import.meta.env.BASE_URL + '/greek_style_dress.glb')

export default GreekStyleDressModel
