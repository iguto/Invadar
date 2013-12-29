#pragma strict

var speed : float;

function Start () {

}

function Update () {
	if (Input.GetAxis("Horizontal")) {
		rigidbody.velocity = Vector3(0,0,Input.GetAxisRaw("Horizontal") * speed);
	}
}