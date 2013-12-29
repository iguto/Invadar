#pragma strict

static var speed : float;
var enemies;

function Start() {
	var enemies = gameObject.GetComponent("EnemyScript");
	Debug.Log(enemies);
	speed = 0.2;
}

function Update () {
	transform.Translate(0,0,speed);
	var next_pos = transform.position;
	next_pos.z += speed;
	next_pos.z += transform.localScale.z;
	if (!Physics.Raycast(next_pos, Vector3.down,1)) {
		Debug.Log("exist");
		speed *= -1;
	}
}

