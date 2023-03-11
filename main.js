import * as THREE from "three";
import { Color, MeshStandardMaterial } from "three";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

camera.position.setZ(30);

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(window.innerWidth, window.innerHeight);

const earthTexture = new THREE.TextureLoader().load("./assets/moon.jpg")
const bg = new THREE.TextureLoader().load("./assets/bg.jpg")
scene.background = bg;

const geometry = new THREE.SphereGeometry(8,64, 32);
const material = new THREE.MeshBasicMaterial({
  map : earthTexture
});
const myShape = new THREE.Mesh(geometry, material);
scene.add(myShape);

const abientLight = new THREE.AmbientLight(0xFFFFFF)
scene.add(abientLight)

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  myShape.rotation.y += 0.004;
  
}

animate();
