// this is the flow.js which i have imported as blobscene in my index.js

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HackOverflowScene() {
    const containerRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const scrollRef = useRef(0);

    useEffect(() => {
        if (!containerRef.current) return;

        // === Scene Setup ===
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x020611, 0.015);
        
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 15;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0x020611, 1);
        containerRef.current.appendChild(renderer.domElement);

        // === Dynamic Lighting ===
        const ambient = new THREE.AmbientLight(0x77aaff, 0.3);
        scene.add(ambient);

        const neonBlue = new THREE.PointLight(0x00ffff, 2, 80);
        neonBlue.position.set(15, 10, 10);
        scene.add(neonBlue);

        const neonMagenta = new THREE.PointLight(0xff00ff, 1.8, 70);
        neonMagenta.position.set(-15, -10, -10);
        scene.add(neonMagenta);

        const neonGreen = new THREE.PointLight(0x00ff88, 1.5, 60);
        neonGreen.position.set(0, 15, -10);
        scene.add(neonGreen);

        // === Data Stream Particles (Overflow Effect) ===
        const streamCount = 1500;
        const streamGeometry = new THREE.BufferGeometry();
        const streamPositions = new Float32Array(streamCount * 3);
        const streamColors = new Float32Array(streamCount * 3);
        const streamSizes = new Float32Array(streamCount);

        for (let i = 0; i < streamCount; i++) {
            streamPositions[i * 3] = (Math.random() - 0.5) * 100;
            streamPositions[i * 3 + 1] = Math.random() * 100 - 50;
            streamPositions[i * 3 + 2] = Math.random() * 100 - 50;

            const colorChoice = Math.random();
            let color;
            if (colorChoice < 0.33) {
                color = new THREE.Color(0x00ffff);
            } else if (colorChoice < 0.66) {
                color = new THREE.Color(0xff00ff);
            } else {
                color = new THREE.Color(0x00ff88);
            }
            streamColors.set([color.r, color.g, color.b], i * 3);
            streamSizes[i] = Math.random() * 0.3 + 0.1;
        }

        streamGeometry.setAttribute("position", new THREE.BufferAttribute(streamPositions, 3));
        streamGeometry.setAttribute("color", new THREE.BufferAttribute(streamColors, 3));
        streamGeometry.setAttribute("size", new THREE.BufferAttribute(streamSizes, 1));

        const streamMaterial = new THREE.PointsMaterial({
            size: 0.2,
            vertexColors: true,
            blending: THREE.AdditiveBlending,
            transparent: true,
            opacity: 0.8,
            depthWrite: false,
        });

        const dataStream = new THREE.Points(streamGeometry, streamMaterial);
        scene.add(dataStream);

        // === Binary Rain (Matrix-style flow) ===
        const binaryCount = 500;
        const binaryGeometry = new THREE.BufferGeometry();
        const binaryPositions = new Float32Array(binaryCount * 3);
        const binaryColors = new Float32Array(binaryCount * 3);

        for (let i = 0; i < binaryCount; i++) {
            binaryPositions[i * 3] = (Math.random() - 0.5) * 80;
            binaryPositions[i * 3 + 1] = Math.random() * 80 + 20;
            binaryPositions[i * 3 + 2] = (Math.random() - 0.5) * 80;

            const greenShade = new THREE.Color(`hsl(${140 + Math.random() * 40}, 100%, ${50 + Math.random() * 30}%)`);
            binaryColors.set([greenShade.r, greenShade.g, greenShade.b], i * 3);
        }

        binaryGeometry.setAttribute("position", new THREE.BufferAttribute(binaryPositions, 3));
        binaryGeometry.setAttribute("color", new THREE.BufferAttribute(binaryColors, 3));

        const binaryMaterial = new THREE.PointsMaterial({
            size: 0.15,
            vertexColors: true,
            blending: THREE.AdditiveBlending,
            transparent: true,
            opacity: 0.6,
            depthWrite: false,
        });

        const binaryRain = new THREE.Points(binaryGeometry, binaryMaterial);
        scene.add(binaryRain);

        // === Glowing Grid Layers (Overflow visualization) ===
        const grids = [];
        for (let layer = 0; layer < 3; layer++) {
            const gridGeometry = new THREE.PlaneGeometry(150, 150, 30, 30);
            const gridMaterial = new THREE.MeshBasicMaterial({
                color: layer === 0 ? 0x00ffff : layer === 1 ? 0xff00ff : 0x00ff88,
                wireframe: true,
                transparent: true,
                opacity: 0.05 + layer * 0.02,
            });
            const grid = new THREE.Mesh(gridGeometry, gridMaterial);
            grid.rotation.x = -Math.PI / 2;
            grid.position.y = -20 - layer * 8;
            scene.add(grid);
            grids.push(grid);
        }

        // === Energy Rings (Overflow pulse effect) ===
        const rings = [];
        for (let i = 0; i < 5; i++) {
            const ringGeometry = new THREE.TorusGeometry(5 + i * 3, 0.1, 16, 100);
            const ringMaterial = new THREE.MeshBasicMaterial({
                color: i % 2 === 0 ? 0x00ffff : 0xff00ff,
                transparent: true,
                opacity: 0.3,
            });
            const ring = new THREE.Mesh(ringGeometry, ringMaterial);
            ring.rotation.x = Math.PI / 2;
            ring.position.y = -15;
            ring.userData = { speed: 0.01 + i * 0.005, scale: 1 };
            scene.add(ring);
            rings.push(ring);
        }

        // === 3D Image Cards with Enhanced Effects ===
        const cards = [];
        const hackathonTopics = [
            "AI & ML",
            "HealthTech",
            "Agriculture",
            "IoT",
            "DevOps",
            "Blockchain",
            "Cloud",
            "Cybersecurity"
        ];

        const createCard = (topic, index) => {
            const cardGroup = new THREE.Group();

            // Responsive card size - larger for mobile
            const isMobile = window.innerWidth < 768;
            const cardWidth = isMobile ? 5 : 3;
            const cardHeight = isMobile ? 3 : 1.8;
            const cardDepth = 0.5;
            const imageWidth = isMobile ? 4.6 : 2.6;
            const imageHeight = isMobile ? 2.7 : 1.5;

            // Card base with metallic tech look - THICKER for more 3D depth
            const cardGeometry = new THREE.BoxGeometry(cardWidth, cardHeight, cardDepth);
            const cardMaterial = new THREE.MeshStandardMaterial({
                color: 0x000000,
                metalness: 0.9,
                roughness: 0.3,
                emissive: index % 3 === 0 ? 0x00ffff : index % 3 === 1 ? 0xff00ff : 0x00ff88,
                emissiveIntensity: 0.6,
                transparent: true,
                opacity: 0.95,
            });
            const card = new THREE.Mesh(cardGeometry, cardMaterial);
            cardGroup.add(card);

            // Neon border with glow - Updated for responsive card
            const borderGeometry = new THREE.EdgesGeometry(cardGeometry);
            const borderMaterial = new THREE.LineBasicMaterial({
                color: index % 3 === 0 ? 0x00ffff : index % 3 === 1 ? 0xff00ff : 0x00ff88,
                transparent: true,
                opacity: 0.9,
                linewidth: 2,
            });
            const border = new THREE.LineSegments(borderGeometry, borderMaterial);
            cardGroup.add(border);

            // Inner glow border - Updated for responsive card
            const innerBorderGeom = new THREE.BoxGeometry(cardWidth - 0.1, cardHeight - 0.1, 0.48);
            const innerBorderEdges = new THREE.EdgesGeometry(innerBorderGeom);
            const innerBorderMat = new THREE.LineBasicMaterial({
                color: index % 3 === 0 ? 0x00ffff : index % 3 === 1 ? 0xff00ff : 0x00ff88,
                transparent: true,
                opacity: 0.5,
            });
            const innerBorder = new THREE.LineSegments(innerBorderEdges, innerBorderMat);
            cardGroup.add(innerBorder);

            // Outer glow halo (larger and more intense) - Responsive
            const haloGeometry = new THREE.PlaneGeometry(cardWidth + 1, cardHeight + 0.7);
            const haloMaterial = new THREE.MeshBasicMaterial({
                color: index % 3 === 0 ? 0x00ffff : index % 3 === 1 ? 0xff00ff : 0x00ff88,
                transparent: true,
                opacity: 0.15,
                side: THREE.DoubleSide,
                blending: THREE.AdditiveBlending,
            });
            const halo = new THREE.Mesh(haloGeometry, haloMaterial);
            halo.position.z = -0.2;
            cardGroup.add(halo);

            // Secondary outer glow (pulsing effect) - Responsive
            const halo2Geometry = new THREE.PlaneGeometry(cardWidth + 1.5, cardHeight + 1.2);
            const halo2Material = new THREE.MeshBasicMaterial({
                color: index % 3 === 0 ? 0x00ffff : index % 3 === 1 ? 0xff00ff : 0x00ff88,
                transparent: true,
                opacity: 0.08,
                side: THREE.DoubleSide,
                blending: THREE.AdditiveBlending,
            });
            const halo2 = new THREE.Mesh(halo2Geometry, halo2Material);
            halo2.position.z = -0.25;
            cardGroup.add(halo2);

            // Corner accent lights - Responsive
            const cornerGeometry = new THREE.SphereGeometry(isMobile ? 0.12 : 0.08, 16, 16);
            const cornerMaterial = new THREE.MeshBasicMaterial({
                color: index % 3 === 0 ? 0x00ffff : index % 3 === 1 ? 0xff00ff : 0x00ff88,
                transparent: true,
                opacity: 0.8,
            });
            
            const cornerPadding = isMobile ? 0.15 : 0.1;
            const corners = [
                [-(cardWidth / 2) + cornerPadding, (cardHeight / 2) - cornerPadding, 0.26],
                [(cardWidth / 2) - cornerPadding, (cardHeight / 2) - cornerPadding, 0.26],
                [-(cardWidth / 2) + cornerPadding, -(cardHeight / 2) + cornerPadding, 0.26],
                [(cardWidth / 2) - cornerPadding, -(cardHeight / 2) + cornerPadding, 0.26],
            ];
            
            corners.forEach(pos => {
                const corner = new THREE.Mesh(cornerGeometry, cornerMaterial.clone());
                corner.position.set(...pos);
                cardGroup.add(corner);
            });

            // Tech scan lines on FRONT side - Responsive
            const scanLineCount = 8;
            const scanLineWidth = isMobile ? 4.6 : 2.8;
            for (let i = 0; i < scanLineCount; i++) {
                const scanGeom = new THREE.PlaneGeometry(scanLineWidth, 0.02);
                const scanMat = new THREE.MeshBasicMaterial({
                    color: index % 3 === 0 ? 0x00ffff : index % 3 === 1 ? 0xff00ff : 0x00ff88,
                    transparent: true,
                    opacity: 0.25,
                    blending: THREE.AdditiveBlending,
                });
                const scanLine = new THREE.Mesh(scanGeom, scanMat);
                const scanSpacing = cardHeight / (scanLineCount + 1);
                scanLine.position.set(0, (cardHeight / 2) - scanSpacing * (i + 1), 0.26);
                cardGroup.add(scanLine);
            }

            // FRONT Image element with tech frame - Responsive
            const textureLoader = new THREE.TextureLoader();
            const frontImageTexture = textureLoader.load(`/card_images/card${index + 1}.jpeg`);
            frontImageTexture.minFilter = THREE.LinearFilter;
            frontImageTexture.magFilter = THREE.LinearFilter;
            
            const frontImageMaterial = new THREE.MeshBasicMaterial({
                map: frontImageTexture,
                transparent: true,
                opacity: 1,
            });
            
            const frontImagePlane = new THREE.PlaneGeometry(imageWidth, imageHeight);
            const frontImageMesh = new THREE.Mesh(frontImagePlane, frontImageMaterial);
            frontImageMesh.position.z = 0.26;
            cardGroup.add(frontImageMesh);

            // BACK side tech scan lines - Responsive
            for (let i = 0; i < scanLineCount; i++) {
                const scanGeom = new THREE.PlaneGeometry(scanLineWidth, 0.02);
                const scanMat = new THREE.MeshBasicMaterial({
                    color: index % 3 === 0 ? 0x00ffff : index % 3 === 1 ? 0xff00ff : 0x00ff88,
                    transparent: true,
                    opacity: 0.25,
                    blending: THREE.AdditiveBlending,
                });
                const scanLine = new THREE.Mesh(scanGeom, scanMat);
                const scanSpacing = cardHeight / (scanLineCount + 1);
                scanLine.position.set(0, (cardHeight / 2) - scanSpacing * (i + 1), -0.26);
                scanLine.rotation.y = Math.PI;
                cardGroup.add(scanLine);
            }

            // BACK Image element - Fixed rotation and side - Responsive
            const backImageTexture = textureLoader.load(`/card_images/card${index + 1}.jpeg`);
            backImageTexture.minFilter = THREE.LinearFilter;
            backImageTexture.magFilter = THREE.LinearFilter;
            
            const backImageMaterial = new THREE.MeshBasicMaterial({
                map: backImageTexture,
                transparent: true,
                opacity: 1,
            });
            
            const backImagePlane = new THREE.PlaneGeometry(imageWidth, imageHeight);
            const backImageMesh = new THREE.Mesh(backImagePlane, backImageMaterial);
            backImageMesh.position.z = -0.26;
            backImageMesh.rotation.y = Math.PI;
            cardGroup.add(backImageMesh);

            // Position in circular flow pattern
            const angle = (index / hackathonTopics.length) * Math.PI * 2;
            const radius = 12;
            cardGroup.position.set(
                Math.cos(angle) * radius,
                (Math.random() - 0.5) * 10,
                Math.sin(angle) * radius
            );

            cardGroup.userData = {
                angle: angle,
                radius: radius,
                floatOffset: Math.random() * Math.PI * 2,
                floatSpeed: 0.5 + Math.random() * 0.5,
                glowPhase: Math.random() * Math.PI * 2,
                spinSpeed: 0.008 + Math.random() * 0.004,
                targetScale: 1,
            };

            scene.add(cardGroup);
            return cardGroup;
        };

        for (let i = 0; i < hackathonTopics.length; i++) {
            cards.push(createCard(hackathonTopics[i], i));
        }

        // === Mouse + Scroll Interactivity ===
        const onMouseMove = (e) => {
            mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        const onScroll = () => {
            scrollRef.current = window.scrollY / window.innerHeight;
        };
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("scroll", onScroll);

        // === Animation Loop ===
        let time = 0;
        const animate = () => {
            requestAnimationFrame(animate);
            time += 0.016;

            // Dynamic camera with smooth parallax
            const targetX = mouseRef.current.x * 5;
            const targetY = mouseRef.current.y * 3;
            camera.position.x += (targetX - camera.position.x) * 0.03;
            camera.position.y += (targetY - camera.position.y) * 0.03;
            camera.position.z = 15 + Math.sin(time * 0.2) * 2 + scrollRef.current * 5;
            camera.lookAt(0, 0, 0);

            // Data stream overflow effect with scroll boost
            const streamPos = streamGeometry.attributes.position.array;
            for (let i = 0; i < streamCount; i++) {
                const i3 = i * 3;
                streamPos[i3] -= 0.3 + scrollRef.current * 0.5;
                streamPos[i3 + 1] += Math.sin(time + i * 0.1) * 0.05;
                
                if (streamPos[i3] < -50) {
                    streamPos[i3] = 50;
                    streamPos[i3 + 1] = Math.random() * 100 - 50;
                    streamPos[i3 + 2] = Math.random() * 100 - 50;
                }
            }
            streamGeometry.attributes.position.needsUpdate = true;

            // Binary rain falling with scroll acceleration
            const binaryPos = binaryGeometry.attributes.position.array;
            for (let i = 0; i < binaryCount; i++) {
                const i3 = i * 3;
                binaryPos[i3 + 1] -= (0.2 + Math.random() * 0.3) * (1 + scrollRef.current * 2);
                
                if (binaryPos[i3 + 1] < -40) {
                    binaryPos[i3 + 1] = 60;
                    binaryPos[i3] = (Math.random() - 0.5) * 80;
                    binaryPos[i3 + 2] = (Math.random() - 0.5) * 80;
                }
            }
            binaryGeometry.attributes.position.needsUpdate = true;

            // Grid waves with scroll intensity
            grids.forEach((grid, index) => {
                const positions = grid.geometry.attributes.position.array;
                for (let i = 0; i < positions.length; i += 3) {
                    const x = positions[i];
                    const z = positions[i + 2];
                    positions[i + 1] = Math.sin(x * 0.1 + time + index) * Math.cos(z * 0.1 + time) * (2 + scrollRef.current * 3);
                }
                grid.geometry.attributes.position.needsUpdate = true;
                grid.material.opacity = Math.min(0.05 + Math.sin(time * 0.5 + index) * 0.03 + scrollRef.current * 0.05, 0.15);
            });

            // Energy rings expansion with scroll boost
            rings.forEach((ring, index) => {
                ring.userData.scale += ring.userData.speed * (1 + scrollRef.current);
                ring.scale.set(ring.userData.scale, ring.userData.scale, ring.userData.scale);
                ring.material.opacity = (0.3 + scrollRef.current * 0.2) * (1 - ring.userData.scale / 3);
                
                if (ring.userData.scale > 3) {
                    ring.userData.scale = 0.5;
                }
            });

            // Cards in circular overflow motion with scroll interaction
            cards.forEach((card, index) => {
                // Circular orbit with overflow spiral + scroll influence
                card.userData.angle += 0.005 + scrollRef.current * 0.01;
                card.userData.radius = 12 + Math.sin(time * 0.5 + card.userData.floatOffset) * 3 + scrollRef.current * 2;
                
                card.position.x = Math.cos(card.userData.angle) * card.userData.radius;
                card.position.z = Math.sin(card.userData.angle) * card.userData.radius;
                card.position.y = Math.sin(time * card.userData.floatSpeed + card.userData.floatOffset) * 5 - scrollRef.current * 8;
                
                // Dynamic rotation with scroll
                card.rotation.y += card.userData.spinSpeed + scrollRef.current * 0.005;
                card.rotation.x = Math.sin(time * 0.5 + card.userData.floatOffset) * 0.2 + scrollRef.current * 0.3;
                card.rotation.z = Math.cos(time * 0.3 + card.userData.floatOffset) * 0.1;
                
                // Pulsing glow and scale with scroll boost
                const glow = 0.8 + Math.sin(time * 2 + card.userData.glowPhase) * 0.4 + scrollRef.current * 0.3;
                const scale = 1 + Math.sin(time * 1.5 + card.userData.glowPhase) * 0.1 + scrollRef.current * 0.15;
                card.scale.set(scale, scale, scale);
                
                // Update all card elements with reduced glow blur
                card.children[0].material.emissiveIntensity = Math.min(glow * 0.7, 1);
                card.children[1].material.opacity = Math.min(0.8 + glow * 0.15, 0.95);
                card.children[2].material.opacity = Math.min(0.4 + glow * 0.15, 0.6);
                card.children[3].material.opacity = Math.min(0.15 + glow * 0.1, 0.3);
                card.children[4].material.opacity = Math.min(0.08 + glow * 0.08, 0.2);
                
                // Animate corner lights
                for (let i = 5; i < 9; i++) {
                    if (card.children[i]) {
                        card.children[i].material.opacity = 0.6 + Math.sin(time * 3 + i) * 0.25;
                        const cornerScale = 1 + Math.sin(time * 2 + i) * 0.25;
                        card.children[i].scale.set(cornerScale, cornerScale, cornerScale);
                    }
                }
                
                // Animate FRONT scan lines (indices 9-16)
                for (let i = 9; i < 17; i++) {
                    if (card.children[i]) {
                        card.children[i].material.opacity = 0.15 + Math.sin(time * 4 + i * 0.5) * 0.15;
                    }
                }

                // Animate BACK scan lines (indices 18-25)
                for (let i = 18; i < 26; i++) {
                    if (card.children[i]) {
                        card.children[i].material.opacity = 0.15 + Math.sin(time * 4 + i * 0.5) * 0.15;
                    }
                }
            });

            // Dynamic lights movement with scroll influence
            neonBlue.position.x = Math.sin(time * 0.4 + scrollRef.current) * 20;
            neonBlue.position.z = Math.cos(time * 0.3 + scrollRef.current) * 20;
            neonBlue.intensity = 2 + Math.sin(time * 2) * 0.5 + scrollRef.current * 0.5;
            
            neonMagenta.position.x = Math.cos(time * 0.5 + scrollRef.current) * 18;
            neonMagenta.position.y = Math.sin(time * 0.6 + scrollRef.current) * 15;
            neonMagenta.intensity = 1.8 + Math.cos(time * 1.8) * 0.4 + scrollRef.current * 0.4;
            
            neonGreen.position.x = Math.sin(time * 0.35 + scrollRef.current) * 16;
            neonGreen.position.z = Math.cos(time * 0.45 + scrollRef.current) * 16;
            neonGreen.intensity = 1.5 + Math.sin(time * 2.2) * 0.3 + scrollRef.current * 0.3;

            renderer.render(scene, camera);
        };

        animate();

        // === Resize ===
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        // === Cleanup ===
        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", handleResize);
            containerRef.current?.removeChild(renderer.domElement);
            renderer.dispose();
            streamGeometry.dispose();
            streamMaterial.dispose();
            binaryGeometry.dispose();
            binaryMaterial.dispose();
            cards.forEach((card) => {
                card.children.forEach((child) => {
                    if (child.geometry) child.geometry.dispose();
                    if (child.material) {
                        if (child.material.map) child.material.map.dispose();
                        child.material.dispose();
                    }
                });
            });
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                pointerEvents: "none",
                overflow: "hidden",
            }}
        />
    );
}