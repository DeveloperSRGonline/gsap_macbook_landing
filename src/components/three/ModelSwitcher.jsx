import { PresentationControls } from "@react-three/drei"
import { useRef } from "react"
import MacbookModel14 from "../models/Macbook-14"
import MacbookModel16 from "../models/Macbook-16"
import gsap from "gsap"

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group, opacity) => {
    if (!group) return;

    group.traverse((child) => {
        if (child.isMesh) {
            child.material.transparent = true;
            gsap.to(child.material, { opacity, duration: ANIMATION_DURATION })
        }
    })
}

const moveGroup = (group, x) => {
    if (!group) return;

    gsap.to(group.position, { x, duration: ANIMATION_DURATION })
}

const ModelSwitcher = ({ scale, isMobile }) => {

    const smallMacbookRef = useRef()
    const largeMacbookRef = useRef()

    // Determine which model to show based on scale
    const showLargeMacbook = scale === '0.05' || scale === '0.08'

    const controlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        azimuth: [-Infinity, Infinity],
        config: { mass: 1, tension: 0, friction: 26 }
    }

    return (
        <>
            {/* 14" MacBook */}
            <PresentationControls {...controlsConfig}>
                <group ref={smallMacbookRef}>
                    <MacbookModel14 scale={parseFloat(scale)} position={[0, 0, 0]} />
                </group>
            </PresentationControls>


            {/* 16" MacBook */}
            {showLargeMacbook && (
                <PresentationControls {...controlsConfig}>
                    <group ref={largeMacbookRef}>
                        <MacbookModel16 scale={isMobile ? 0.05 : 0.08} position={[0, 0, 0]} />
                    </group>
                </PresentationControls>
            )}
        </>
    )
}

export default ModelSwitcher