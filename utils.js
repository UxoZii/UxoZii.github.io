function isOnScreen(x,y)
{
	return (x > pixelPositionX && x < (pixelPositionX + 1800) && y > pixelPositionY && y < (pixelPositionY + 1800))
}