Template.post.likeCount = function(){
	return Likes.find(this._id).count();
}
Template.post.postComments = function(){
	return Posts.find({parent:this._id});
}
Template.post.events({
	'keyup .comment':function(evt,tmpl){
		if(evt.which === 13){
			var commenttext = tmpl.find('.comment').value;
			var options = {text:commenttext,parent:this._id};
			Meteor.call('addPost',options);
			$('.comment').val('').select().focus();
		}
	}
})