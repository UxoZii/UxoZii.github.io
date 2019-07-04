class Miner	
{
	constructor(x,y,type)
	{
		this.x = x;
		this.y = y;
		this.type = type;
		this.speed = 120;
	}

	update()
	{
		if (frameCount % this.speed == 0)
		{
			Items.push(new itemOnGround(this.x * 32 + 4, this.y * 32 - 30, "lol"))
		}
	}
}

class itemOnGround
{
	constructor(x,y,item)
	{
		this.x = x;
		this.y = y;
		this.item = item;
	}
	draw()
	{		
		if (isOnScreen(this.x,this.y))
		{
			image(item[0],this.x - pixelPositionX - offX,this.y - pixelPositionY - offY)
		}
	}
	update()
	{
		if (tilemap[floor((this.y) / 32)][floor((this.x) / 32)] == 7)
		{
			this.x += 1
		}
		if (tilemap[floor((this.y) / 32)][floor((this.x) / 32)] == 8)
		{
			this.y -= 1
		}
		if (tilemap[floor((this.y) / 32)][floor((this.x) / 32)] == 9)
		{
			this.x -= 1
		}
		if (tilemap[floor((this.y) / 32)][floor((this.x) / 32)] == 10)
		{
			this.y += 1
		}
	}
}