import React, { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function Particles({ count = 5000 }) {
  const mesh = useRef()
  const light = useRef()

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.01 + Math.random() / 200
      const x = Math.random() * 2000 - 1000
      const y = Math.random() * 2000 - 1000
      const z = Math.random() * 2000 - 1000

      temp.push({ time, factor, speed, x, y, z })
    }
    return temp
  }, [count])

  useFrame(() => {
    particles.forEach((particle, i) => {
      let { factor, speed, x, y, z } = particle

      const t = (particle.time += speed)

      mesh.current.setMatrixAt(
        i,
        new THREE.Matrix4().setPosition(
          Math.cos(t) + Math.sin(t * 1) / 10 + x / factor,
          Math.sin(t) + Math.cos(t * 2) / 10 + y / factor,
          (Math.sin(t) + Math.cos(t * 2)) / 10 + z / factor
        )
      )
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <>
      <pointLight ref={light} distance={40} intensity={8} color="lightblue" />
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <dodecahedronGeometry args={[0.2, 0]} />
        <meshPhongMaterial color="#88ccff" />
      </instancedMesh>
    </>
  )
}

export default function Background3D() {
  return (
    <Canvas camera={{ position: [0, 0, 1], fov: 75, near: 0.1, far: 1000 }}>
      <color attach="background" args={["#000000"]} />
      <Particles />
      <Environment preset="night" />
      <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} enablePan={false} />
    </Canvas>
  )
}

