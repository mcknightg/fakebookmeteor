Template.home.rendered = function(){
	Deps.autorun(function(){
		Meteor.subscribe("posts",Meteor.userId());
		Meteor.subscribe("likes");
		Meteor.subscribe("appusers");
	})
	
}
Template.home.posts = function(){
	return Posts.find({parent:null},{sort:{date:-1}});
}
Template.home.events({
	'keyup .posttext':function(evt,tmpl){
		if(evt.which === 13){
			var posttext = tmpl.find('.posttext').value;
			var options = {text:posttext,parent:null};
			Meteor.call('addPost',options);
			$('.posttext').val("").select().focus();
		}
	}
})