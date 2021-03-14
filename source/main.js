var texloader = new THREE.TextureLoader();
var canvas = document.getElementsByTagName("canvas");
const gltfLoader = new THREE.GLTFLoader();
const loader = new THREE.ObjectLoader();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1600 );
//scene.background = new THREE.Color(0xfffffff);
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; 

const controls = new THREE.OrbitControls(camera, renderer.domElement );
controls.update();
camera.position.set( 0, 0, 0 );
controls.update()
controls.maxDistance = 5
controls.rotateSpeed =2


scene.background = new THREE.TextureLoader().load( "/img/yuan_cang-BhXYRW0-9KA-unsplash (1).jpg" );





const oneLight = new THREE.AmbientLight( 0xf0f2f7 ); // soft white light



	const lightShadow = new THREE.DirectionalLight( 0xfffffff, 1.2, 10 );
	lightShadow.position.set( -20, 12, 10 ); //default; light shining from top
	
    scene.add( lightShadow );
	 

	const helper = new THREE.CameraHelper( lightShadow.shadow.camera );
	scene.add( helper );

	scene.add( lightShadow );
	scene.add( oneLight );

	lightShadow.castShadow = true; // default false
	
    lightShadow.shadowCameraVisible = true;
	
	lightShadow.shadow.camera.near = 0.1; // default
	lightShadow.shadow.camera.far = 25; // default

	



gltfLoader.load( './models/scene.gltf', function ( gltf ) {

	scene.add( gltf.scene );
	

	
	
		var odject = scene.getObjectByName('gltf.scene');
		document.onkeydown = function(e ) {
		  switch (e.keyCode) {
			case 87:
				gltf.scene.translateZ(0.004)
			break;
			case 83:
				gltf.scene.translateZ(-0.2)
			break;
			case 65:
				gltf.scene.rotation.y -= 0.1;
			break;
			case 40:
				gltf.scene.rotation.z += 0.1;
			break;
		  }
		};
	  
		gltf.scene.castShadow = true; //default is false
		gltf.scene.receiveShadow = false; //default
	
	
})
	



var geometry = new THREE.PlaneGeometry(500, 500,);
    var material = new THREE.MeshPhongMaterial( { color: 0x20232a ,side: THREE.DoubleSide} );
    var plane = new THREE.Mesh( geometry, material );
    plane.receiveShadow = true;
	plane.rotation.x = Math.PI / 2   ;
	plane.translateZ(0.59)
	
    scene.add(plane);

	
camera.position.z = 5;
renderer.outputEncoding = THREE.sRGBEncoding;









function animate(e) {
	requestAnimationFrame( animate );
	renderer.render(scene, camera);

    
    
    
    
    


}
animate();