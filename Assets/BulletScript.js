#pragma strict

var speed : float;

function Start() {
}

function Update () {
	if ( !Physics.Raycast(transform.position, Vector3.down, 1) ) {
		Destroy(this.gameObject);
	}
	transform.Translate(0,speed,0);
}

function OnTriggerEnter(obj : Collider) {
	Destroy(obj.gameObject);
}