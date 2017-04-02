var a = {
	num : 0,

	myfunc : function() {
		return this.num;
	}
};
document.write(a.myfunc());
