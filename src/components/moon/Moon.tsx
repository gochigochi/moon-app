import { useState, useEffect } from "react"
import { phaseToDegs } from "../../utils/phaseToDegs"

interface Props {
    phase: string,
    size: [number, number]
}

const Moon: React.FC<Props> = (props) => {

    const [rotation, setRotation] = useState(0)

    useEffect(() => {
        const degs = phaseToDegs(props.phase)
        setTimeout(() => setRotation(degs), 200)
    }, [])

    return (
        <div
            className={`
                flex-none w-[${props.size[0]}px] h-[${props.size[1]}px] border border-white rounded-[50%] overflow-hidden relative bg-white translateZ
                before:absolute before:bg-[#1C1917] before:block before:w-[50%] before:h-full before:top-0 before:left-0
            `}
        >
            <div className="disc" style={{"transform": `rotateY(${rotation}deg)`, "transition": "transform .5s"}}></div>
        </div>
    )
}

export default Moon