



Module.register("iPress",{
	// Default module config.
	defaults: {
		ModuleName: "iPress"
	},

	// Override dom generator.
	getDom: function() {
		
        try {      
		document.addEventListener('keypress', this.logKey);
		} catch(err) { console.log(err); }
		return element

	},
	
	logKey: function(e) {
		console.log(e.keyCode); //r = 114, l = 108, q = 113, w = 119, e = 101, a = 97, s = 115, d = 100, z = 122, x = 120.
	},

	notificationReceived: function(notification, payload, sender) {
		this.updateDom(1000)
	},

	socketNotificationReceived: function(notification, payload) {
		this.updateDom(1000)
	}
});