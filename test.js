var a = {
	num : 0,
	num2 : 3,

	myfunc : function() {
		return  this.num + this.num2;
	}
};
document.write(a.myfunc());
