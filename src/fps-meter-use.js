	 var root = null;
     window.application = {}
     window.application.fpsmetersarray = [];                    /* some way to store fpsmeters components declared in HTML container :  */
     FPSMeter = window.FPSMeter;                                /* uggly hack to retrieve FPSMeter from instantiation in fps-meter.js*/
     window.application.FPSMeterPosition = 200;                 /* some way to store FPSMeterPosition */
     var fpsbox = document.querySelector("#fpsbox");

     FPSMeter.defaults.top = 0;
     FPSMeter.defaults.left = 'auto';
     FPSMeter.defaults.heat = 1;
     FPSMeter.defaults.graph = 1;

	 Polymer('fps-meter', {

		 ready: function () {
			 root = this.shadowRoot || this.webkitShadowRoot;
			 this.theme = this.getAttribute("theme");           // "this.theme" may be considered as FPSMeter (Polymer) instance property, not FPSMeter (Polymer) class property.
		 },                                                     // Meaning last them passed from <fps-meter theme="xxx"> declaration will become global to every FPSMeter instances

         created: function () {
             application.FPSMeterPosition += 200;
             this.theme = this.getAttribute("theme");
             var fpsm;
             var marginValue = '0 ' + application.FPSMeterPosition + 'px' + ' 0 0';
             if (this.theme != undefined) {
                fpsm =  new FPSMeter(fpsbox, {
                     right:     '0%',
                     margin:    marginValue,
                     theme:     this.theme
                 });
             }
             else  {       /* this.theme == undefined */
                 fpsm =  new FPSMeter(fpsbox, {
                     right:     '0%',
                     margin:    marginValue
                 });
             }
             window.application.fpsmetersarray.push(fpsm);

             function tick() {
                 var meters = application.fpsmetersarray;
                 setTimeout(tick, Math.max(Math.sin(+new Date() * 0.0015) * 50 + 50, 16));
                 var i=0;
                 for (;i<=(meters.length - 1); i++) {
                     meters[i].tick();
                 }
             };

             if (application.fpsmetersarray.length == 4) {      // assuming there are 4 <fps-meter...> tags declared in HTML page container
                 tick();                                        // shall be fixed/improved later on
             }                                                  // by detecting how many components are embedded in HTML container

         },

		 attributeChanged: function (attrName, oldVal, newVal) {
			 this.theme = newVal;
		 }

	 });