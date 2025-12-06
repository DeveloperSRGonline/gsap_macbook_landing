import { Environment, Lightformer, SpotLight } from '@react-three/drei'

const StudioLights = () => {
  return (
    <group>
        <Environment resolution={256}>
            <group position={[0,0,0]}>
                <Lightformer 
                form='rect' 
                intensity={10} 
                position={[-10,5,-5]}
                scale={10}
                rotateY={Math.PI / 2}
                />
                <Lightformer 
                form='rect' 
                intensity={10} 
                position={[10,0,1]}
                scale={10}
                rotateY={Math.PI / 2}
                />
            </group>
        </Environment>
        <spotLight 
        position={[-2,10,5]}
        angle={0.15}
        decay={0}
        intensity={Math.PI * 0.2}
        />
        <spotLight 
        position={[0,-25,10]}
        angle={0.15}
        decay={0}
        intensity={Math.PI * 0.2}
        />
        <spotLight 
        position={[0,15,5]}
        angle={0.15}
        decay={0.1}
        intensity={Math.PI * 0.3}
        />
    </group>
  )
}

export default StudioLights