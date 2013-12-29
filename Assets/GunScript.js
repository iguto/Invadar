#pragma strict

var bullet : Transform;

function Start () {

}

function Update () {
	if (Input.GetKeyDown("space")) {
		var pos = transform.position;
		pos.x -= 1;
		Instantiate(bullet, pos, Quaternion.Euler(0,0,90));
	}
}