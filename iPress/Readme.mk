Detect keypress from keyboard, returns as keycodes (//r = 114, l = 108, q = 113, w = 119, e = 101, a = 97, s = 115, d = 100, z = 122, x = 120) and so on.
*iPress2.js displays them in the broswer console log (if you wanna use this, del iPress.js and rename this iPress.js).
*iPress.js  displays them as text in magicmirror(most compatible with other modules).
by jostein


Put this in config.js

		{
			module: "iPress",
			position: "bottom_right",
			config: {}
		},

