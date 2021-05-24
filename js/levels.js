//array of levels so they can be loaded based on index
/*
Key:
0 - white tile
2 - green tile (goal)
3 - red tile (lava)
10-19 - switch (corresponds with wall n+10 where n is its numbe.r)
20-29 - switched wall

-1 - normal player
-2 - moves to the right
-3 - moves to the right and bounces off the left
-4 - moves with keyboard no matter what
*/

var levels = [ 
	{
		sizeX: 10,
		sizeY: 10,
		startX: 1,
		startY: 8,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 2, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1,-1, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "Use arrows or WASD to move.",
	},
	{
		sizeX: 10,
		sizeY: 10,
		startX: 1,
		startY: 8,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 2, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 3, 3, 3, 3, 3, 3, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1,-1, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "Be careful...",
	},
	{
		sizeX: 10,
		sizeY: 10,
		startX: 1,
		startY: 8,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 2, 1],
		[1,-1, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1,-1, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "Try hitting space.",
	},
	{
		sizeX: 10,
		sizeY: 10,
		startX: 1,
		startY: 8,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 2, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1,-2, 0, 0, 0, 0, 0, 0, 3, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1,-1, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "Sometimes they have a mind of their own...",
	},
	{
		sizeX: 10,
		sizeY: 10,
		startX: 1,
		startY: 8,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 2, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1,-1, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 3, 0, 0, 0, 0, 0, 0, 0, 1],
		[1,-3, 0, 0, 0, 0, 0, 0, 3, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "You have to be either fast or clever.",
	},
	{
		sizeX: 10,
		sizeY: 10,
		startX: 2,
		startY: 6,
		tiles: [
		[1, 1, 1, 1, 1, 3, 3, 3, 3, 3],
		[1, 2, 2, 2, 1, 3, 3, 3, 3, 3],
		[1, 2, 2, 2, 1, 3, 3, 3, 3, 3],
		[1, 2, 2, 2, 1, 3, 3, 3, 3, 3],
		[1, 0, 0, 0, 1, 3, 3, 3, 3, 3],
		[1, 0, 0, 0, 1, 3, 0, 0, 0, 3],
		[1, 0,-1, 0, 1, 3, 0,-4, 0, 3],
		[1, 0, 0, 0, 1, 3, 0, 0, 0, 3],
		[1, 0, 0, 0, 1, 3, 0, 0, 0, 3],
		[1, 1, 1, 1, 1, 3, 3, 3, 3, 3],
		],
		tip: "What's going on here?",
	},
	{
		sizeX: 10,
		sizeY: 10,
		startX: 1,
		startY: 8,
		tiles: [
		[1, 1, 1, 1, 1, 3, 3, 3, 3, 3],
		[1, 1, 1, 1, 1, 3, 0, 0, 0, 3],
		[1, 1, 1, 1, 1, 3, 0, 0, 0, 3],
		[1, 2, 0, 0, 0, 3, 0, 0, 0, 3],
		[1, 0, 0, 0, 0, 3, 0, 0, 0, 3],
		[1, 0, 0, 0, 0, 3, 0, 0, 0, 3],
		[1, 0, 0, 0, 0, 3, 0, 0, 0, 3],
		[1, 3, 3, 0, 0, 3, 0, 3, 3, 3],
		[1,-1, 0, 0, 0, 3,-4, 0, 0, 3],
		[1, 1, 1, 1, 1, 3, 3, 3, 3, 3],
		],
		tip: "Let's have some fun with that.",
	},
	{
		sizeX: 10,
		sizeY: 10,
		startX: 1,
		startY: 6,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 2, 2, 2, 2, 3, 3, 3, 3, 1],
		[1, 2, 2, 2, 2, 3, 3, 3, 3, 1],
		[1, 2, 2, 2, 2, 3, 3, 3, 3, 1],
		[1, 2, 2, 2, 2, 3, 3, 0, 3, 1],
		[1, 0, 0, 0, 0, 3, 3, 0, 3, 1],
		[1,-1, 0, 0, 0, 3,-4, 0, 3, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1,-2, 0, 0, 0, 0, 0, 0, 3, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "Hit space twice.",
	},
	{
		sizeX: 10,
		sizeY: 10,
		startX: 1,
		startY: 8,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 2, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1,20, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1,-1, 0,-1,10, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "Impossible? Move over the yellow square.",
	},
	{
		sizeX: 14,
		sizeY: 10,
		startX: 1,
		startY: 8,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 2, 0, 0, 1, 0, 0, 0,-1, 1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1, 0, 0, 0, 0,21, 0, 0, 0, 1],
		[1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1,14, 0, 0,11, 1, 0, 0, 0, 1],
		[1,20, 1, 1, 1, 1,24, 1, 1, 1, 1,23, 1, 1],
		[1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
		[1,-1, 0,13, 1, 0, 0, 0,10, 1, 0,-1, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "There's nothing like teamwork!",
	},
	{
		sizeX: 10,
		sizeY: 10,
		startX: 1,
		startY: 8,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1,22, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
		[1, 0, 0,12,12, 0, 3, 1,21, 1],
		[1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
		[1,-2, 0,11,11, 0, 3, 1,-1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "It's all about the timing.",
	},
	{
		sizeX: 10,
		sizeY: 10,
		startX: 2,
		startY: 8,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1,10, 0, 1, 3, 1, 0, 0, 2, 1],
		[1, 0, 0, 3, 3, 1, 0, 0, 0, 1],
		[1, 0, 0, 0, 3, 1, 0, 0, 0, 1],
		[1, 0, 0, 0, 3, 1, 0, 0, 0, 1],
		[1, 3, 0, 0, 3, 1, 0, 0, 0, 1],
		[1,-1, 0, 0, 3, 1, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1,20, 1, 1, 1],
		[1, 3,-3, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "Just a little obstacle avoidance.",
	},
	{
		sizeX: 14,
		sizeY: 10,
		startX: 4,
		startY: 6,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1,11, 0, 0,13, 0,15, 0, 0, 1, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1,12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1,14, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0,-1, 0, 0, 0,24,-3, 0,25, 3, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 3,21,-3, 0, 0, 0, 0, 0,22,23, 0, 2, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "Guess-and-check!",
	},
	{
		sizeX: 11,
		sizeY: 11,
		startX: 3,
		startY: 9,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1,13, 0, 0, 1, 0, 0,-3,21, 3, 1],
		[1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
		[1,14, 0, 0, 1, 0, 0,-3,22, 3, 1],
		[1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
		[1,15, 0, 0, 1, 0, 0,-3,23, 3, 1],
		[1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
		[1,11, 0, 0, 1, 0, 0,-3,24, 2, 1],
		[1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
		[1,12, 0,-1, 1, 0, 0,-3,25, 3, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "You don't have to die if you're careful...",
	},
	{
		sizeX: 13,
		sizeY: 13,
		startX: 1,
		startY: 3,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1,14, 0,17, 0,15, 0,16, 0,18, 0,19, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1,-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1,11, 0,24, 0, 0,-3, 0, 0, 0,27, 3, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1,12, 0,25, 0, 0,-3, 0, 0, 0,28, 3, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1,13, 0,26, 0, 0,-3, 0, 0, 0,29, 3, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0,-3, 0, 0, 0,21,22,23, 0, 2, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "If you can't control them, capture them.",
	},
	{
		sizeX: 10,
		sizeY: 10,
		startX: 1,
		startY: 3,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0,11,-2, 0, 0, 0, 0, 3, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1,-1, 0,21, 0, 0, 0, 0, 0, 1],
		[1, 3, 3, 3, 3, 0, 0, 0, 0, 1],
		[1, 3, 3, 3, 3, 3, 3, 0, 0, 1],
		[1, 3, 3, 3, 3, 3, 3, 2, 2, 1],
		[1, 3, 3, 3, 3, 3, 3, 2, 2, 1],
		[1, 3, 3, 3, 3, 3, 3, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "Speed is the key.",
	},
	{
		sizeX: 13,
		sizeY: 13,
		startX: 5,
		startY: 11,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0,13, 0,22, 0,-3,21, 3, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1,15, 0, 0, 1, 0, 0, 0, 1, 0, 0,14, 1],
		[1, 0, 0, 0, 1, 0,-1, 0, 1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1, 1, 1,24, 1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1, 2, 1, 0, 1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1, 2,25, 0, 1, 1,23, 1, 1],
		[1, 0, 0, 0, 1, 2, 1, 0, 1, 0, 0, 0, 1],
		[1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1],
		[1, 0, 0, 0, 0,-3, 0,11, 1,12, 0,-1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "Let's synthesize.",
	},
	{
		sizeX: 13,
		sizeY: 13,
		startX: 11,
		startY: 11,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 3, 1, 0, 0, 0, 1,13, 0, 1],
		[1, 0, 0, 0, 3, 1, 0, 0, 0, 1, 0, 0, 1],
		[1, 0, 0, 0, 3, 1, 0, 0, 0, 1, 0, 0, 1],
		[1, 0, 0, 0, 3, 1, 0, 0, 0, 1, 0, 0, 1],
		[1, 0, 0, 0, 0,22, 0, 0, 0, 1, 0, 0, 1],
		[1, 1, 1,21, 1, 1, 0, 3, 3, 1,11, 0, 1],
		[1, 0, 0, 0, 1, 1,23, 1, 1, 1, 0, 0, 1],
		[1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
		[1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
		[1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
		[1,-5, 0, 0, 1, 0, 2, 0, 0, 1,12,-2, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "This one's different!",
	},
	{
		sizeX: 10,
		sizeY: 10,
		startX: 7,
		startY: 7,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 4, 0, 0, 2, 1],
		[1, 0, 0, 0, 0, 4, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 4, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 4, 4, 4, 4, 1],
		[1, 0, 0, 0, 0, 4, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 4, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 4, 0,-1, 0, 1],
		[1,-3, 0, 0, 0, 4, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "If you can't pass through the blue -- then who?",
	},
	{
		sizeX: 10,
		sizeY: 10,
		startX: 1,
		startY: 4,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1,-2, 0, 0,11, 0, 4, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1,12,21, 0, 0, 0, 0, 0, 0, 1],
		[1,-1, 1, 3, 1, 1, 1, 1, 0, 1],
		[1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
		[1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
		[1,22, 1,-5, 0, 0, 0, 0, 0, 1],
		[1, 2, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "Don't cross the blue divide.",
	},
	{
		sizeX: 10,
		sizeY: 10,
		startX: 1,
		startY: 8,
		tiles: [
		[1, 3, 3, 3, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 3, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 1, 1, 1, 2, 1, 1],
		[1, 3, 3, 0, 3, 4, 4, 4, 4, 1],
		[1, 3, 0, 0, 3, 4, 4, 4, 4, 1],
		[1, 3, 0, 3, 3, 4, 4, 4, 4, 1],
		[1,-1, 0, 3, 3, 4, 4, 4, 4, 1],
		[1, 3, 3, 3, 3,-4, 4, 4, 4, 1],
		[1,-1, 0, 0, 3, 4, 4, 4, 4, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "It can take another to lead.",
	},
	{
		sizeX: 10,
		sizeY: 10,
		startX: 8,
		startY: 1,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 3, 0, 0, 0, 0, 1,13,-1, 1],
		[1, 1, 1, 1, 1,21, 1, 0, 0, 1],
		[1, 0,24, 0,23, 0, 1, 0, 0, 1],
		[1, 0, 1, 1, 1, 0, 1,12,14, 1],
		[1, 0, 1, 2, 1, 0, 1, 1,22, 1],
		[1, 0, 0, 0, 1, 0, 1, 1,11, 1],
		[1, 1, 1, 1, 1, 0, 1, 1, 4, 1],
		[1,-5, 0, 0, 0, 0, 1, 1,-6, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "Too many switches!",
	},
	{
		sizeX: 13,
		sizeY: 13,
		startX: 3,
		startY: 3,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1,10, 0, 0, 0,12, 1,-3, 4, 4, 4, 4, 1],
		[1, 0, 0, 0, 0, 0, 1, 0, 4, 4, 4, 4, 1],
		[1, 0, 0,-5, 0, 0, 1, 0, 4,15, 4, 4, 1],
		[1, 0, 0, 0, 0, 0, 1, 0, 4, 4, 4, 4, 1],
		[1,11, 0, 0, 0,13, 1, 0, 4, 4, 4, 4, 1],
		[1,21, 1, 1, 1,20, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 1,24,25, 4, 4, 4, 1],
		[1, 0, 1, 1, 1, 0, 1, 2, 4, 4, 4, 4, 1],
		[1, 0, 1, 4, 1, 0, 1,-5, 4, 4, 4, 4, 1],
		[1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
		[1,-5, 0, 0, 0, 0, 1,14,22,23, 4,-3, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "When in doubt, switch it out!",
	},
	// {
	// 	sizeX: 9,
	// 	sizeY: 9,
	// 	startX: 1,
	// 	startY: 7,
	// 	tiles: [
	// 	[1, 1, 1, 1, 1, 1, 1, 1, 1],
	// 	[1, 4, 4, 4, 4, 4, 4, 2, 1],
	// 	[1, 4, 4, 4, 4, 4, 4, 4, 1],
	// 	[1, 4, 4, 1, 1, 1, 4, 4, 1],
	// 	[1, 4, 4, 1,-1, 1, 4, 4, 1],
	// 	[1, 4, 4, 1, 1, 1, 4, 4, 1],
	// 	[1, 4, 4, 4, 4, 4, 4, 4, 1],
	// 	[1,-2, 4, 4, 4, 4, 4, 4, 1],
	// 	[1, 1, 1, 1, 1, 1, 1, 1, 1],
	// 	],
	// 	tip: "This <del>bug</del> feature will come in handy next level.",
	// },
	{
		sizeX: 13,
		sizeY: 13,
		startX: 9,
		startY: 3,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 2, 3, 1, 0, 4, 4, 4,20, 0, 0,12, 3],
		[1,24, 3, 1, 0, 3, 3, 3, 1,10, 1, 0, 1],
		[1, 4, 3, 1, 0, 0, 0, 0, 1,-5,-5,11, 1],
		[1, 4, 3, 1, 1, 1, 1,21, 1, 1, 1, 1, 1],
		[1, 4,25, 4, 4, 4, 1, 0, 1, 1, 3, 1, 1],
		[1, 1, 4, 4, 4, 4, 1, 0, 1, 4, 4, 4, 1],
		[1, 3, 3, 3, 3, 4, 1, 0, 1, 4, 4, 4, 1],
		[1, 1, 1, 1, 1, 0, 1, 0, 4, 4, 4,22, 1],
		[1,14,10, 0, 1, 0, 1, 1, 1, 4, 1, 1, 1],
		[1,15, 1, 0,23,13, 4, 4, 4, 4, 4, 4, 1],
		[1,12, 0,11, 1, 0, 1, 4, 4, 4, 4, 4, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "Don't worry, this is the end of the ride.",
	},
	{
		sizeX: 21,
		sizeY: 10,
		startX: 1,
		startY: 8,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1],
		[1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
		[1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1],
		[1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
		[1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1,-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "Blop Switch, by Adi Yenuubarii. Thanks for playing!",
	},
]
