function drawMap(tilemap)
{
	for (y=-1;y<20;y++)
	{
		for (x=-1;x<26;x++)
		{
			{	
				if (posX+x >= 0 && posY+y >= 0 && posX+x < maxMapSize && posY+y < maxMapSize)
					{
						image(tile[tilemap[floor(posY+y)][floor(posX+x)]],x*32,y*32);
					}
			}
		}
	}
}

function mousePressed()
{
	//tilemap[posY+10][posX+13] = 0
	tilemap[posY+floor((mouseY-offY)/32)][posX+floor((mouseX-offX)/32)] = 2
	//Miners.push(new Miner(posY+10,posX+13,"lol"))
}