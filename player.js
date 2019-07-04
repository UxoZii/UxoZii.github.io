function movement()
{
	if (keyIsDown(87))
	{
		if (SolidTile.includes(tilemap[floor((pixelPositionY - movementSpeed) / 32)+10][posX+13]) == false)
		{
			pixelPositionY -= movementSpeed;
		}
	}
	if (keyIsDown(83))
	{
		if (SolidTile.includes(tilemap[floor((pixelPositionY + movementSpeed) / 32)+10][posX+13]) == false)
		{
			pixelPositionY += movementSpeed;
		}
	}
	if (keyIsDown(65))
	{
		if (SolidTile.includes(tilemap[posY+10][floor((pixelPositionX - movementSpeed) / 32)+13]) == false) 
		{
			pixelPositionX -= movementSpeed;
		}
	}
	if (keyIsDown(68))
	{
		if (SolidTile.includes(tilemap[posY+10][floor((pixelPositionX + movementSpeed) / 32)+13]) == false)
		{
			pixelPositionX += movementSpeed;
		}
	}


	posX = floor(pixelPositionX / 32);
	posY = floor(pixelPositionY / 32);

	if (tilemap[posY+10][posX+13] == 7)
	{
		pixelPositionX += 1
	}
	if (tilemap[posY+10][posX+13] == 8)
	{
		pixelPositionY -= 1
	}
	if (tilemap[posY+10][posX+13] == 9)
	{
		pixelPositionX -= 1
	}
	if (tilemap[posY+10][posX+13] == 10)
	{
		pixelPositionY += 1
	}

	posX = floor(pixelPositionX / 32);
	posY = floor(pixelPositionY / 32);

	offX = -(pixelPositionX % 32)
	offY = -(pixelPositionY % 32)


	translate (offX,offY);
}



function showInventory()
{
	for (i=0;i<10;i++)
	{
		if (inventory[i] > -1)
			{
				image(item[inventory[i]],271+i*26-offX,581-offY)
			}
	}
}

function mouseWheel(event)
{
	if (event.delta < 0)
	{
		inventorySelect += 1
	} else
	{
		inventorySelect -= 1
	}

	if (inventorySelect > 9)
	{
		inventorySelect = 0
	}
	if (inventorySelect < 0)
	{
		inventorySelect = 9
	}
	rotate = 0;
}


function mousePressed()
{
	tilemap[posY+floor((mouseY-offY)/32)][posX+floor((mouseX-offX)/32)]
	if (inventory[inventorySelect] == 2)
	{
		tilemap[posY+floor((mouseY-offY)/32)][posX+floor((mouseX-offX)/32)] = 7 + rotate
	}
	if (inventory[inventorySelect] == 1)
	{
		tilemap[posY+floor((mouseY-offY)/32)][posX+floor((mouseX-offX)/32)] = 100
		tilemap[posY+floor((mouseY-offY)/32)][posX+floor((mouseX-offX)/32)+1] = 101
		tilemap[posY+floor((mouseY-offY)/32)+1][posX+floor((mouseX-offX)/32)] = 120
		tilemap[posY+floor((mouseY-offY)/32)+1][posX+floor((mouseX-offX)/32)+1] = 121
		Miners.push(new Miner(posX+floor((mouseX-offX)/32),posY+floor((mouseY-offY)/32),"lol"))

	}
}

function keyPressed()
{
	if (keyCode == 82)
	{
		if (acceptedRotateValues.includes(inventory[inventorySelect]))
		{
			rotate += 1;
			if (rotate > 3)
			{
				rotate = 0
			}
		}
	}
}
