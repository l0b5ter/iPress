
var iPress;


Module.register("iPress",{
	// Default module config.
	defaults: {
		ModuleName: "iPress",
	},

	// Override dom generator.
	getDom: function() {
		var element = document.createElement("div");
        try {      
		document.addEventListener('keypress', this.logKey);
		var test = iPress;
		element.className = this.config.ModuleName;
        element.style.width = this.config.frameWidth;
		
                var html = `
                        <div class="${this.config.ModuleName}">
							<p id="log">${test}</p>
                        </div>
                `;

        element.insertAdjacentHTML("afterbegin", html);
		} catch(err) { console.log(err); }
		return element

	},
	
	logKey: function(e) {
		iPress = e.keyCode;
	},

	notificationReceived: function(notification, payload, sender) {
		this.updateDom(1000)
	},

	socketNotificationReceived: function(notification, payload) {
		this.updateDom(1000)
	}
});