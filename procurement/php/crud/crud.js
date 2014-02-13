var grid_demo_id = "myGrid1";

var dsOption= {

	fields :[
		{name : 'order_no'  },
		{name : 'name'  },
		{name : 'quantity'  },
		{name : 'in_stock'  },
		{name : 'misc'},
		{name : 'delivery_date' ,type:'date'  }
		
	],
	recordType : 'object'
}

var colsOption = [
     {id: 'order_no' , header: "Order No" , width :60 },
     {id: 'name' , header: "Name" , width :80 , editor:{type:'text'}},
	   {id: 'quantity' , header: "Quantity" , width :60, editor:{type:'text'}},
	   {id: 'in_stock' , header: "In Stock" , width :80, editor:{type:'text'}},
	   {id: 'misc' , header: "Misc" , width :180 , editor:{type:'text'}},
	   {id: 'delivery_date' , header: "Delivery Date" , width :100, editor: { type :"date" }}
       
];


var gridOption={
	id : grid_demo_id,
	loadURL : 'Controller.php',
	saveURL : 'Controller.php',
	width: "100%",  //"100%", // 700,
	height: "500",  //"100%", // 330,
	container : 'gridbox', 
	replaceContainer : true,
	encoding : 'UTF-8', // Sigma.$encoding(), 
	dataset : dsOption ,
	columns : colsOption ,
	clickStartEdit : true ,
	defaultRecord : {'order_no':"00",'employee':"",'country':"",'customer':"",'order2005':0,'order2006':0,'order2007':0,'order2008':0,'delivery_date':"2008-01-01"},
	pageSize:100,
	toolbarContent : 'reload | add del save | print'
};


var mygrid=new Sigma.Grid( gridOption );
Sigma.Util.onLoad(function(){mygrid.render()});


//////////////////////////////////////////////////////////