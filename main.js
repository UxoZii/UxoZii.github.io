function preload()
{
	tile = [];
	item = [];
	player = loadImage("tiles/player.png");
	tiledata = loadImage("tiles/tilemap.png");
	itemdata = loadImage("tiles/itemmap.png");
	hud = loadImage("tiles/hud.png");
	cursorimg = loadImage("tiles/cursor.png");
	marker = loadImage("tiles/marker.png")
	inventory = [0,0,0,0,0,0,0,0,0,0]

	// for (i=0;i<=4;i++)
	// {
	// 	tile.push(loadImage("tiles/tile"+i+".png"));	
	// }


}


function setup()
{

	createCanvas(800, 608);

	image(tiledata,0,0);

	for (i=0;i<400;i++)
	{
		tile.push(get((i % 20) * 32,floor(i / 20) * 32, 32, 32));
	}

	image(itemdata,0,0);

	for (i=0;i<40;i++)
	{
		item.push(get((i % 20) * 24,floor(i / 20) * 24, 24, 24));
	}

   	  ///////////////
	 // VARIABLES //
	///////////////


	pixelPositionX = 64;
	pixelPositionY = 60*32;
	movementSpeed = 3;
	maxMapSize = 120;
	offX = 0;
	offY = 0;
	lakeCount = 20;
	lakeRepetition = 10;
	minimap = createImage(maxMapSize,maxMapSize);
	SolidTile = [0,5,6,100,101,120,121];
	ironOreRepetition = 5;
	ironOreCount = 10;
	copperOreRepetition = 5;
	copperOreCount = 5;
	Miners = [];
	Items= [];

	// setting up the map //

	tilemap = new Array();
	for (i=0;i<maxMapSize;i++)
	{
		tilemap[i] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
	}

   	  ////////////////////
	 // MAP GENERATION //
	////////////////////

	// putting random lakes

	for (i=0;i<lakeCount;i++)
	{
		tilemap[floor(random(maxMapSize))][floor(random(maxMapSize))] = 0
	}

	// create the lakes
	for (i=0;i<lakeRepetition;i++)
	{
		for (y=0;y<maxMapSize;y++)
		{
			for (x=0;x<maxMapSize;x++)
			{
				if (tilemap[y][x] == 0)
				{
					r = floor(random(4))
					if (r == 0 && y-1 >= 0)
					{
						tilemap[y-1][x] = 0
					} else if (r == 1 && y+1 < maxMapSize)
					{
						tilemap[y+1][x] = 0
					} else if (r == 2 && x+1 < maxMapSize) 
					{
						tilemap[y][x+1] = 0
					} else if (r == 3 && x-1 >= 0)
					{
						tilemap[y][x-1] = 0
					}
				}
			}
		}
	}

	// place down iron ores

		for (i=0;i<ironOreCount;i++)
	{
		tilemap[floor(random(maxMapSize))][floor(random(maxMapSize))] = 2
	}

	for (i=0;i<ironOreRepetition;i++)
	{
		for (y=0;y<maxMapSize;y++)
		{
			for (x=0;x<maxMapSize;x++)
			{
				if (tilemap[y][x] == 2)
				{
					r = floor(random(4))
					if (r == 0 && y-1 >= 0)
					{
						tilemap[y-1][x] = 2
					} else if (r == 1 && y+1 < maxMapSize)
					{
						tilemap[y+1][x] = 2
					} else if (r == 2 && x+1 < maxMapSize) 
					{
						tilemap[y][x+1] = 2
					} else if (r == 3 && x-1 >= 0)
					{
						tilemap[y][x-1] = 2
					}
				}
			}
		}
	}

	// place down copper ore

		for (i=0;i<copperOreCount;i++)
	{
		tilemap[floor(random(maxMapSize))][floor(random(maxMapSize))] = 3
	}

	for (i=0;i<copperOreRepetition;i++)
	{
		for (y=0;y<maxMapSize;y++)
		{
			for (x=0;x<maxMapSize;x++)
			{
				if (tilemap[y][x] == 3)
				{
					r = floor(random(4))
					if (r == 0 && y-1 >= 0)
					{
						tilemap[y-1][x] = 3
					} else if (r == 1 && y+1 < maxMapSize)
					{
						tilemap[y+1][x] = 3
					} else if (r == 2 && x+1 < maxMapSize) 
					{
						tilemap[y][x+1] = 3
					} else if (r == 3 && x-1 >= 0)
					{
						tilemap[y][x-1] = 3
					}
				}
			}
		}
	}

	// create special tiles

	for (y=0;y<maxMapSize-1;y++)
		{
			for (x=0;x<maxMapSize;x++)
			{
				if (tilemap[y][x] == 1 && tilemap[y+1][x] == 0)
				{
					tilemap[y][x] = 4
				} 
			}
		}



	// big wall


	for (y=0;y<10;y++)
	{
		for (x=0;x<maxMapSize;x++)
		{
			tilemap[y][x] = 6
		}
	}

	for (y=0;y<maxMapSize;y++)
	{
		for (x=0;x<13;x++)
		{
			tilemap[y][x] = 6
		}
	}

	for (x=13;x<maxMapSize;x++)
	{
		tilemap[10][x] = 5
	}

	// create the minimap

	for (y=0;y<maxMapSize;y++)
		{
			for (x=0;x<maxMapSize;x++)
			{
				minimap.set(y, x, color(tilemap[y][x]*30,0,0))
			}
		}
		minimap.updatePixels();

	while (tilemap[pixelPositionY / 32 + 10][pixelPositionX / 32 + 13] != 1)
	{
		pixelPositionX += 32
	}
} 


function draw()
{
    background(0);
    movement();  
    drawMap(tilemap);
	image(player,width/2-offX,height/2-24-offY);
	image(minimap,0-offX,0-offY);
	fill(200);
	circle(posX-offX,posY-offY,2);


	for (i=0;i<Miners.length;i++)
	{
		Miners[i].update()
	}
	for (i=0;i<Items.length;i++)
	{
		Items[i].draw()	
	}

	image(hud,269-offX,579-offY)
	image(item[2],mouseX-offX,mouseY-offY)
	//image(cursor,mouseX-offX,mouseY-offY)
	image(marker,floor((mouseX-offX)/32)*32,floor((mouseY-offY)/32)*32)


	// debug
	text("posX"+posX,32-offX,32-offY);
	text("posY"+posY,32-offX,48-offY);
	text("offX"+offX,32-offX,64-offY);
	text("offY"+offY,32-offX,76-offY);
	text("pixelX"+pixelPositionX,32-offX,84-offY);
	text("pixelY"+pixelPositionY,32-offX,92-offY);
}	
