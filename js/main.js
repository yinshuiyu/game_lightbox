var load = {
	target: $('.game_list'),
	loading: true,
	init: function(){
		this.bind()
	},
	bind: function(){
		var self = this
		$(window).scroll(function(){
			var scrollTop = $(this).scrollTop();
			var scrollHeight = $(document).height();
			var windowHeight = $(this).height();
			if(scrollTop + windowHeight == scrollHeight){
				self.loadShow(true)
				self.ajax()
			}
		});
	},
	loadShow: function(bool){
		var self = this,
			dom = $('#loading')
		if(bool){
			dom.removeClass('hidden')
		}else{
			dom.addClass('hidden')
		}
	},
	ajax: function(){
		var self = this

		if(!self.loading){
			return false
		}else{
			self.loading = false
		}

		/*
		$.ajax({
			url: 'http://www.baidu.com',
			type: 'get',
			data: {},
			success: function(data){
				self.target.append(data.dom)
				self.loading = true
			},
			error: function(data) {
				console.log('error: ', data)
			}
		})
		*/

		var testDom = '<li><a class="list_btn" href="#">进入</a><span>6</span><img src="./img/game_icon.png" alt=""><strong>西行者联盟aaaaaaaaa</strong><p>乾创之《西行者联盟》是一款以中原武侠为背游戏突破传统页游局最大限...</p></li>'
		setTimeout(function(){
			self.target.append(testDom)
			self.loading = true
		}, 1000)
	}
}
load.init()

function banner_close(target){
	var wrapper = $('.wrapper'),
		zTarget = $(target).parent(),
		sId = zTarget.attr('id'),
		zIframe = $('iframe'),
		zIframeSrc = zIframe.attr('src')

	wrapper.removeClass(sId)
	zTarget.remove()

	// zIframe.attr('src', zIframeSrc)
}

var lightbox = lity();
// lightbox('#lity_3');