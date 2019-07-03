class Miner
{
	constructor(x,y,type)
	{
		this.x = x;
		this.y = y;
		this.type = type;
		this.speed = 120;
	}

	draw()
	{
		image(tile[100],this.x,this.y)
		image(tile[101],this.x,this.y)
		image(tile[120],this.x,this.y)
		image(tile[121],this.x,this.y)
	}

	update()
	{
		if (frameCount % this.speed == 0)
		{
			Items.push(new itemOnGround(this.y * 32 + 18, this.x * 32 - 24, "lol"))
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
}