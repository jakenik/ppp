(function(window){
				var App = function(element,num){
					this.num = num;	
					this.element = element;
					this.lines = [];
					this.circles = [];
					this.init();
				};

				App.prototype.randint = function(n,m){
					var c = m-n+1;
					var num = Math.random() * c + n;
					return	Math.floor(num);
				};

				App.prototype.createLine = function(){
					var line_range = document.createElement("div");
					var line = document.createElement("line");
					line_range.style.left = this.randint(-50, 100) + "%";
					line_range.style.marginTop = "-" + this.randint(0, 70) + "%";
					line_range.style.opacity = this.randint(2, 10) / 10;
					line_range.className = "line-range";
					line.className = "line";
					line_range.appendChild(line);
					return line_range;
				};

				App.prototype.createCircle = function(){
					var circle_range = document.createElement("div");
					var circle = document.createElement("line");
					circle_range.style.left = this.randint(-20, 99) + "%";
					circle_range.style.top = this.randint(50, 100) + "%";
					circle_range.style.opacity = this.randint(2, 10) / 10;
					circle_range.className = "circle-range";
					circle.className = "circle";
					circle_range.appendChild(circle);
					return circle_range;
				};

				App.prototype.build = function(){
					var i, k;
					for(i=0; i<this.num; i++){
						this.lines.push(this.createLine());
					}
					
					k = Math.ceil(this.num/3);
					for(i=0; i<k; i++){
						this.circles.push(this.createCircle());
					}
				};

				App.prototype.run = function(){
					var _this=this, i, k;

					k =  _this.lines.length;
					for(i=0; i<k; i++){
						(function(element, app){
						 	window.setTimeout(function(){
								app.element.appendChild(element); 
							}, app.randint(100, 3000));	 
						})(_this.lines[i], _this);
					}

					k = _this.circles.length;
					for(i=0; i<k; i++){
						(function(element, app){
						 	window.setTimeout(function(){
								app.element.appendChild(element); 
							}, app.randint(2000, 5000)); 
						})(_this.circles[i], _this);
					}
				};
			
				App.prototype.init = function(){
					this.build();
					this.run();
				};			 

				window.App = App;
					 
			})(window);	

			window.onload = function(){
				new App(document.body, Math.floor(document.body.clientWidth / 7));
			};