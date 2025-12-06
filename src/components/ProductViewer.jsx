import useMacBookStore from '../store'
import clsx from 'clsx';
import { Canvas } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';
import MacbookModel14 from '../components/models/Macbook-14';
import StudioLights from './StudioLights';

const ProductViewer = () => {

    // to manage the state with the global state management
    const { color, scale, setColor, setScale, reset } = useMacBookStore();

    return (
        <section id='product-viewer'>
            <h2>
                Take a closer look
            </h2>

            <div className="controls">
                <p className='info'>MackbookPro {scale === '0.06' ? '14"' : '16"'} in {color}</p>

                <div className='flex-center gap-5 mt-5'>
                    <div className="color-control">
                        {/* white */}
                        <div
                            onClick={() => setColor('#adb5bd')}
                            className={clsx('bg-neutral-300', color === '#adb5bd' && 'active')}
                        />
                        {/* space black */}
                        <div
                            onClick={() => setColor('#2e2c2e')}
                            className={clsx('bg-neutral-900', color === '#2e2c2e' && 'active')}
                        />
                    </div>
                    <div className="size-control">
                        {/* 14" */}
                        <div
                            onClick={() => setScale('0.06')}
                            className={clsx(scale === '0.06' ? 'bg-white text-black' : 'bg-transparent text-white')}
                        >
                            <p>14"</p>
                        </div>
                        {/* 16" */}
                        <div
                            onClick={() => setScale('0.08')}
                            className={clsx(scale === '0.08' ? 'bg-white text-black' : 'bg-transparent text-white')}
                        >
                            <p>16"</p>
                        </div>
                    </div>
                </div>
            </div>

            <Canvas id='canvas' camera={{position: [0,0,5]}}>
                <ambientLight intensity={2}/>
                <StudioLights/>
                <MacbookModel14 scale={0.06} position={[0,0,0]}/>
                <OrbitControls />
            </Canvas>
        </section>
    )
}

export default ProductViewer