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

	offX = -(pixelPositionX % 32)
	offY = -(pixelPositionY % 32)

	posX = floor(pixelPositionX / 32);
	posY = floor(pixelPositionY / 32);

	translate (offX,offY);
}