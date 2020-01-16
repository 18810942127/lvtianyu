

export const dateFormat = (dateStr,time) => {
	var date = new Date(dateStr);
	// var date = new Date(dateStr*1000);
	var year = date.getFullYear();
	//ES6语法填充：var month = (date.getMonth()+1).toString().padStart(2, '0');
	var month = date.getMonth()+1<10 ? '0'+ (date.getMonth()+1) : date.getMonth()+1;
	var day = date.getDate()<10 ? '0' + date.getDate() : date.getDate();
	var hh = date.getHours()<10 ? '0' + date.getHours() : date.getHours();
	var mm = date.getMinutes()<10 ? '0' + date.getMinutes() : date.getMinutes();
	var ss = date.getSeconds()<10 ? '0' + date.getSeconds() : date.getSeconds();

	//return `${year}-${month}-${day}`;

	if(time&&time.toLowerCase() === 'yyyy-mm-dd'){
		return `${year}年${month}月${day}日`;
	}else if(time&&time.toLowerCase() === 'hh:mm:ss'){
		return `${hh}:${mm}`;
	}else if(time&&time.toLowerCase() === 'mm-dd hh:mm:ss'){
	  return `${month}月${day}日 ${hh}:${mm}`;
	}else{
		return `${year}年${month}月${day}日 ${hh}:${mm}:${ss}`;
	}
};

export let recursionRouter = (userRouter, allRouter, show) => {
	var realRoutes = [];
	allRouter.forEach((v, i) => {
	  userRouter.forEach((item, index) => {
		if (item.name === v.name && (show ? v.isShow : true)) {
		  if (item.children && item.children.length > 0) {
			v.children = recursionRouter(item.children, v.children, show);
		  }
		  realRoutes.push(v);
		}
	  });
	});
	return realRoutes;
}