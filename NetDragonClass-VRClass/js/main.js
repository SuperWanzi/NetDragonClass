	/*
	 * 组件名称:WorkItem
	 * 说明:展示单项课程
	 */
	var WorkItem = React.createClass({
		/* 从数组中拼接作者信息 */
		getAuthorInfo:function(){
			var str="";
			for(var i in this.props.content.author){
				str=str+this.props.content.author[i]+"、"
			}
			return str.substring(0,str.length-1);
			
		},
		getItemContent: function() {
			return(
				<div className="work-item">
					<div className="item-view">
						<img src={this.props.content.img} title={this.props.content.about} />
						<div className="author-info">
							<span className="fa fa-user-circle-o"></span>
							<span className="author-name">{this.getAuthorInfo()}</span>
							<span className="create-time">2016/08/04 10:55</span>
						</div>
					</div>
					<div className="item-menu">
						<a className="menu-btn edit" href="#">
							<span className="fa fa-edit"></span>
							<p>编辑</p>
						</a>
						<a className="menu-btn play active" href="#">
							<span className="fa fa-play-circle-o"></span>
							<p>播放</p>
						</a>
						<a className="menu-btn trash" href="#">
							<span className="fa fa-trash"></span>
							<p>删除</p>
						</a>
					</div>
					<div className="works-title">
						{this.props.content.title}
					</div>
				</div>
			)
		},
		render: function() {
			return this.getItemContent();
		}
	});
	/*
	 * 组件名称:Header
	 * 说明:页面头部:LOGO和用户信息
	 */
	var Header=React.createClass({
		render:function(){
			return (
				<header>
					<Logo />
					<HeaderRight />
				</header>
			);
		}
	});
	/*
	 * 组件名称:Logo
	 * 说明:展示网站Logo
	 */
	var Logo=React.createClass({
		render:function(){
			return (
				<div className="logo">
					<img src="img/101 logo.png"/>
					<p>VR创客教室</p>
				</div>
			)
		}
	});
	/*
	 * 组件名称:HeaderRight
	 * 说明:展示头部右方的用户信息等信息
	 */
	var HeaderRight=React.createClass({
		render:function(){
			var spanStyle = {
			   'user-select': 'none',
			   'position': 'absolute',
			   'right': 0
			};
			return (
				<div className="header-r">
					<div className="user-info">
						<div className="user-info-detail">
							<span className="fa fa-user-o"></span>
							用户:<span id="user-name">王小明</span>
							<span style={spanStyle}>
							|
							</span>
						</div>
						<div className="user-info-detail">
							<span className="fa fa-id-card-o"></span>
							身份:<span id="user-station">学生</span>
						</div>						
					</div>
					<button type="button" className="btn-set">
						设备选择
						<span className="fa fa-caret-down"></span>
					</button>
				</div>
			);
		}
	});
	/*
	 * 组件名称:Page
	 * 说明:展示页面主体内容
	 */
	var Page=React.createClass({
		render:function(){
			return(
				<div className="page-contents-wrap">
					<SiderBar />
					<PageContanior />
				</div>
			)
		}
	});
	/*
	 * 组件名称:SiderBar
	 * 说明:页面侧边导航栏
	 */
	var SiderBar=React.createClass({
		getInitialState:function(){
			return ({
				items: [{"全部课程":false},
				{"课程一：静夜思":false},
				{"课程二：红军长征":false},
				{"课程三：活字印刷术":false},
				{"课程四：郑和下西洋":false},
				{"课程五：梦想之家":false}]
			})
		},
		changeState:function(i){
			var arr=this.state.items;
			for(var item in arr){
				for(var val in arr[item]){
					arr[item][val]=false;
				}
			}
			for(var val in arr[i]){
				arr[i][val]=true;
			}
			this.setState({items:arr});
		},
		eachItem:function(title,i){
			var text="";
			var state=false;
			for(var val in title){
				text=val;
				state=title[val];
			};
			return (
				<SiderBarItem key={i} index={i} isActive={state}
					changeState={this.changeState}
				>{text}</SiderBarItem>
			)
		},
		render:function(){
			return (
				<div className="left-sidebar">
					<div id="left-sidebar-title">
						课程列表
					</div>
					<ul id="left-sidebar-list">
					{
							this.state.items.map(this.eachItem)
					}
					</ul>
				</div>
			)
		}
	});
	/*
	 * 组件名称:SiderBarItem
	 * 说明:页面侧边导航栏-导航按钮
	 */
	var SiderBarItem=React.createClass({
		getInitialState:function(){
			return ({isActive:false})
		},
		active:function(){
			this.props.changeState(this.props.index);
		},
		render:function(){
			return (
				<li className={this.props.isActive?"left-sidebar-item active":"left-sidebar-item"} onClick={this.active}>
					<span className="fa fa-book"></span>
					{this.props.children}
				</li>
			)
		}
	});
	/*
	 * 组件名称:PageContanior
	 * 说明:页面主要内容区
	 */
	var PageContanior=React.createClass({
		getInitialState:function(){
			var obj={
				title:"郑和下西洋",
				author:["李冉","涂佳佳","李婷","张婷","张三","李四","王小明"],
				img:"img/u=3827902191,936378654&fm=206&gp=0.jpg",
				about:"李冉、涂佳佳、李婷、张婷、张三、李四、王小明、张三丰黎明"
			};
			return {
				mainState:false,
				workItem:[obj]
			}
		},
		initShow:function(){
			var wi=this.state.workItem;
			
			this.setState(
				{workItem:wi}
			)
		},
		getModalStateMain:function(){
			if(this.state.mainState){
				return "flex"
			}else{
				return "none"
			}
		},
		getFexState:function(){
			if(this.state.mainState){
				return "block"
			}else{
				return "none"
			}
		},
		showForm:function(){
			this.setState({
				mainState:true
			})
		},
		closeMain:function(){
			this.setState({
				mainState:false
			})
		},
		getItems:function(value,i){
			return (
				<WorkItem key={i} index={i} content={value}/>
			)
		},
		addItem:function(obj){
			var wi=this.state.workItem;
			wi.push(obj);
			this.setState(
				{workItem:wi}
			)
		},
		render:function(){
			return (
				<div id="detail-contents">
					{/*详细信息顶部*/}
					<div id="detail-contents-top">
						<DetailNav showForm={this.showForm}/>
						<SearchItem />
					</div>
					
					<div id="work-list">
						{this.state.workItem.map(this.getItems)}
					</div>
					<ul className="page-list">
						<li className="page-item">
							<a href="#" className="page-select">&lt;</a>
						</li>
						<li className="page-item">
							<a href="#" className="page-select">1</a>
						</li>
						<li className="page-item">
							<a href="#" className="page-select">2</a>
						</li>
						<li className="page-item">
							<a href="#" className="page-select active">3</a>
						</li>
						<li className="page-item">
							<a href="#" className="page-select">4</a>
						</li>
						<li className="page-item">
							<a href="#" className="page-select">5</a>
						</li>
						<li className="page-item">
							<a href="#" className="page-select">...</a>
						</li>
						<li className="page-item">
							<a href="#" className="page-select">100</a>
						</li>
						<li className="page-item">
							<a href="#" className="page-select">&gt;</a>
						</li>
					</ul>	
					<Fex state={this.getFexState()} zindex="0" />
					<FormWork closeMain={this.closeMain} state={this.getModalStateMain()} addItem={this.addItem}/>
				</div>
			)
		}
	});
	/*
	 * 组件名称:DetailNav
	 * 说明:页面主要内容区的导航栏
	 */
	var DetailNav=React.createClass({
		showForm:function(){
			this.props.showForm();
		},
		render:function(){
			return (
				<div id="detail-nav">
					<ul id="nav-list">
						<li className="nav-item active">
							<a href="#">我的作品</a>
						</li>
						<li className="nav-item">
							<a href="#">班级作品</a>
						</li>
					</ul>
					<div id="btn-group">
						<button type="button" className="btn-works" id="submit-works">
							<span className="fa fa-upload"></span>
							提交作品
						</button>
						<button type="button" className="btn-works" id="create-works" onClick={this.showForm}>
							<span className="fa fa-plus-circle"></span>
							新建作品
						</button>
					</div>
				</div>
			)
		}
	});
	/*
	 * 组件名称:SearchItem
	 * 说明:搜索框
	 */
	var SearchItem=React.createClass({
		render:function(){
			return (
				<div className="user-search-box">
					<div id="user-search">
						<input type="text" name="search-text" id="search-text" placeholder="搜索资源" />
						<span className="fa fa-search"></span>
						<button type="button" id="btn-search">搜索</button>
					</div>
				</div>
			)
		}
	});
	/*
	 * 组件名称:Fex
	 * 说明:页面静态遮罩
	 */
	var Fex=React.createClass({
		getInitialState:function(){
			return (
				{zindex:0}
			)
		},
		getStyle:function(){
			var fexStyle={
				'z-index':'99',
				'display':this.props.state
			};
			return fexStyle;
		},
		render:function(){
			return (
				<div id="background-fex" style={this.getStyle()}></div>
			)
		}
	});
	/*
	 * 组件名称:FormWork
	 * 说明:增加文章表单
	 */
	var FormWork=React.createClass({
		getInitialState:function(){
			return {
				author:[],
				authorState:false,
				content:{},
				isImg:false
			}
		},
		removeAuthor:function(key,value){
			this.refs.removeBtn.removeTo(key);
			this.refs.removeBtn.save();
		},
		showAuthor:function(text,i){
			return (
				<div className="author-item" key={i} index={i}>
					<span className="author-name">{text}</span>
					<span className="fa fa-times remove-authot" onClick={this.removeAuthor.bind(this,i)}></span>
				</div>
			)
		},
		selectFile:function(){
			document.getElementById("ipf-image").click();
		},
		checkFile:function(){
			var format=["png","jpg","bmp"];
			var fileName=this.refs.imgFile.value.split("\\");
			fileName=fileName[fileName.length-1];
			var fileNameFormat=fileName.split(".");
			fileNameFormat=fileNameFormat[fileNameFormat.length-1];
			for(var i in format){
				if(fileNameFormat.indexOf(format[i])>=0){
					this.setState(
						{isImg:true}
					);
					this.refs.ipImg.value=fileName;
				}
			}
			
		},
		closeModal:function(){
			this.props.closeMain()
		},
		getFexState:function(){
			if(this.state.authorState){
				return "block"
			}else{
				return "none"
			}
		},
		getStateAuthor:function(){
			if(this.state.authorState){
				return "flex"
			}else{
				return "none"
			}
		},
		showAuthorForm:function(){
			this.setState(
				{authorState:true}
			)
		},
		saveAuthor:function(data){
			this.setState(
				{author:data}
			)
		},
		hideAuthorForm:function(){
			this.setState(
				{authorState:false}
			)
		},
		getObjectURL:function(file) {
			var url = null ;
			if (window.createObjectURL!=undefined) { // basic
				url = window.createObjectURL(file) ;
			} else if (window.URL!=undefined) { // mozilla(firefox)
				url = window.URL.createObjectURL(file) ;
			} else if (window.webkitURL!=undefined) { // webkit or chrome
				url = window.webkitURL.createObjectURL(file) ;
			}
			return url ;
		},
		submit:function(){
			var content=this.state.content;
			if(this.refs.ipName.value){
				content.title=this.refs.ipName.value;
				if(this.state.author.length>0){
					content.author=this.state.author;
					if(this.state.isImg){
						content.img=this.getObjectURL(this.refs.imgFile.files[0]);
						content.about=this.refs.taAbout.value;
						this.setState(
							{content:content}
						);
						alert("添加成功");
						this.props.addItem(this.state.content);
						this.refs.ipName.value="";
						this.refs.imgFile.value="";
						this.refs.ipImg.value="";
						this.refs.taAbout="";
						this.state.content={};
						this.props.closeMain();
					}
					else{
						alert("图片格式不支持,请重新上传");
					}
				}
				else{
					alert("没有选择作者");
				}
			}
			else{
				alert("未填写标题");
			}
		},
		render:function(){
			var mainStyle={
				'display':this.props.state
			}
			return (
				<div className="modal-submit" id="modal-main" style={mainStyle}>
					<div className="modal-submit-box">
						<div id="modal-submit-main">
							<div className="modal-main-title">
								新建作品
								<span className="closeModal fa fa-times" onClick={this.closeModal}></span>
							</div>
							<form className="modal-main-content" action="#" method="post">
								<div className="sub-main-input">
									<span className="input-title">资源名称</span>
									<span className="input-text">
										<input type="text" name="name" id="ip-name" placeholder="请输入资源名称" ref="ipName"/>
									</span>
								</div>
								<div className="sub-main-input" id="input-a">
									<span className="input-title">作者</span>
									<span className="input-text">
										<div className="input-author">
											{this.state.author.map(this.showAuthor)}
										</div>
										<div id="add-author">
											<span className="fa fa-plus-circle" onClick={this.showAuthorForm}></span>
										</div>
									</span>
								</div>
								<div className="sub-main-input">
									<span className="input-title">配图</span>
									<span className="input-text">
										<input type="text" name="image" id="ip-image" placeholder="点击上传图片" readOnly onClick={this.selectFile}
											ref="ipImg" /></span>
									<input style={{ "display": "none"}} type="file" name="image-file" id="ipf-image" onChange={this.checkFile}
										ref="imgFile"/>
								</div>
								<div className="sub-main-input">
									<span className="input-title">简介</span>
									<span className="input-text">
										<textarea name="about" id="ta-about" ref="taAbout"></textarea>
									</span>
								</div>
								<div className="sub-main-submit">
									{/*<input type="submit" name="fm-submit" id="fm-submit" defaultValue="确定提交" />*/}
									<button type="button" id="fm-submit" onClick={this.submit}>确定提交</button>
									<p>提交后显示在班级作品区</p>
								</div>
							</form>
							<Fex state={this.getFexState()}/>
							<FormAuthor state={this.getStateAuthor()} hideAuthorForm={this.hideAuthorForm} saveAuthor={this.saveAuthor}
								ref="removeBtn" />
						</div>
					</div>
				</div>
			)
		}
	});
	/*
	 * 组件名称:FormAuthor
	 * 说明:修改作者信息
	 */
	var FormAuthor=React.createClass({
		getInitialState:function(){
			return (
				{
					authorData:["李明","张三丰","吴老二","李四","周杰伦","斯琴","王小二"],
					authorList:[]
				}
			)
		},
		showData:function(value,i){
			return (
				<option key={i} value={i}>
					{value}
				</option>
			)
		},
		add:function(){
			var i=this.refs.authorDataVal.value;
			if(i){
				var data=this.state.authorData;
				var list=this.state.authorList;
				list.push(data[i]);
				data.splice(i,1);
				this.setState(
					{
						authorData:data,
						authorList:list
					}
				)
			}else{
				alert("没有选中对象或对象不存在");
			}
		},
		removeTo:function(index){
			if(index!==null&&index!==undefined){
				var i=index;
			}
			if(i!==null&&i!==undefined){
				var data=this.state.authorData;
				var list=this.state.authorList;
				data.push(list[i]);
				list.splice(i,1);
				this.setState(
					{
						authorData:data,
						authorList:list
					}
				)
			}else{
				alert("没有选中对象或对象不存在");
			}
		},
		remove:function(){
			var i=this.refs.authorListVal.value;
			if(i){
				var data=this.state.authorData;
				var list=this.state.authorList;
				data.push(list[i]);
				list.splice(i,1);
				this.setState(
					{
						authorData:data,
						authorList:list
					}
				)
			}else{
				alert("没有选中对象或对象不存在");
			}
		},
		save:function(){
			this.props.saveAuthor(this.state.authorList);
			this.props.hideAuthorForm();
		},
		hideAuthorForm:function(){
			this.props.hideAuthorForm()
		},
		render:function(){
			var mainStyle={
				'display':this.props.state
			}
			return (	
				<div className="modal-submit" id="modal-author" style={mainStyle}>
					<div className="modal-submit-box">
						<div id="modal-submit-author">
							<div className="modal-main-title">
								班级成员
								<span className="closeModal fa fa-times" onClick={this.hideAuthorForm}></span>
							</div>
							<div className="modal-main-content">
								<div className="left-select">
									<div className="serch-student">
										<input type="text" id="in-search-stu" placeholder="搜索人名" />
										<span className="fa fa-search"></span>
									</div>
									<select id="dataAuthor" className="select-stu" multiple="multiple" ref="authorDataVal">
										{this.state.authorData.map(this.showData)}
									</select>
								</div>
								<div className="menu-ctrl">
									<button type="button" className="btn-crtl active" id="btn-add" onClick={this.add}>添加</button>
									<button type="button" className="btn-crtl" id="btn-remove" onClick={this.remove}>删除</button>
								</div>
								<div className="right-select">
									<select id="selectAuthor" className="select-stu" multiple="multiple" ref="authorListVal">
										{this.state.authorList.map(this.showData)}
									</select>
								</div>
								<div className="sub-main-submit author">
									<button type="button" className="btn-crtl active" id="add-confirm" onClick={this.save}>确定</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			)
		}
	});
	/*
	 * 将组件添加至页面中
	 */
	ReactDOM.render(
		<div id="body">
			<Header />
			<Page />
		</div>,
		document.getElementsByTagName("body")[0]
	);
	
	

