import React, {useRef, useState, useCallback, forwardRef, useImperativeHandle, useEffect} from "react";
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
    addBasePlugins,
    mobileAndTabletCheck, AssetManagerBasicPopupPlugin, CanvasSnipperPlugin, TweakpaneUiPlugin
} from "webgi";
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger";



const WebgiViewer = () =>{
        let canvasRef = useRef();
    const  setupViewer = useCallback(async ()=> {
        {

            // Initialize the viewer
            const viewer = new ViewerApp({
                canvas: canvasRef.current
            })

            // Add some plugins
            const manager = await viewer.addPlugin(AssetManagerPlugin)


            const  camera = viewer.scene.activeCamera;
            const  position = camera.position;
            const  target = camera.target

            // Add plugins individually.
            await viewer.addPlugin(GBufferPlugin)
            await viewer.addPlugin(new ProgressivePlugin(32))
            await viewer.addPlugin(new TonemapPlugin(true))
            await viewer.addPlugin(GammaCorrectionPlugin)
            await viewer.addPlugin(SSRPlugin)
            await viewer.addPlugin(BloomPlugin)
            await viewer.addPlugin(SSAOPlugin)
            // await viewer.addPlugin(DiamondPlugin)
            // await viewer.addPlugin(FrameFadePlugin)
            // await viewer.addPlugin(GLTFAnimationPlugin)
            // await viewer.addPlugin(GroundPlugin)
            // await viewer.addPlugin(TemporalAAPlugin)
            // await viewer.addPlugin(AnisotropyPlugin)
            // and many more...

            await addBasePlugins(viewer)

            await viewer.addPlugin(CanvasSnipperPlugin)

            viewer.renderer.refreshPipeline()


            await manager.addFromPath( "scene-black.glb")
            viewer.getPlugin(TonemapPlugin).config.clipBackground = true;
            viewer.scene.activeCamera.setCameraOptions({controlsEnabled: false})
            // Load an environment map if not set in the glb file
            // await viewer.setEnvironmentMap((await manager.importer!.importSinglePath<ITexture>("./assets/environment.hdr"))!);
            window.scrollTo(0,0);

            let needsUpdate = true;
            window.addEventListener("preFrame" , ()=>{
                if (needsUpdate){
                    camera.positionTargetUpdated(true);
                    needsUpdate = false
                }
            })

        }

    },[])
    useEffect(()=>{
        setupViewer()
    },[])
    return(
        <>
        <div id="webgi-canvas-container">
            <canvas id="webgi-canvas" ref={canvasRef}/>
        </div>
        </>
    )
}


export  default  WebgiViewer