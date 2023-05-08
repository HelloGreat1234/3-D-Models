import {Canvas} from '@react-three/fiber'
import { Suspense,useEffect,useState } from 'react';
import { OrbitControls,Preload,SpotLight,useGLTF,useProgress,Html } from '@react-three/drei';
import {Mesh, PointLight} from "three";

const CanvasLoader=()=>{
    const {progress}=useProgress();
    return(
        <Html>
                <p className='text-[16px] text-[#f1f1f1] font-bold mt-[70px]'>
                    {progress.toFixed(0)}%
                </p>
        </Html>
    )
}


const Hover=()=>{
    const Hover=useGLTF('/hover/scene.gltf')
    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor={'#fff'}/>

            <pointLight intensity={1} position={[100,100,100]} castShadow></pointLight>

            <spotLight position={[]} angle={1} penumbra={1} intensity={1} castShadow shadow-mapSize={1024}/>

            

            <primitive object={Hover.scene} scale={1.2}
            position={[1,-1,0]}>

            </primitive>
        </mesh>
    )
}

const HoverCanvas=()=>{
    return (
        <div className='h-[500px] w-full bg-blue-900'>
            <Canvas frameloop='demand' shadows camera={{position:[0,0,10],fov:45}}
            gl={{preserveDrawingBuffer:true}}
            className='h-[400px]'>
            
            <Suspense fallback={<CanvasLoader/>}><Hover/></Suspense>

            <OrbitControls enableZoom={false} autoRotate>
            </OrbitControls>
              

            </Canvas>
        </div>
    )
}

export default HoverCanvas;