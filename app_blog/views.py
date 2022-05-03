###############################################################################

# IMPORTED RESOURCES #

# EXTERNAL:
from django.shortcuts import render, HttpResponse, get_object_or_404
from django.shortcuts import redirect, reverse
from django.views import generic, View

# INTERNAL:
from .models import Post, Comment
from .forms import CommentForm

###############################################################################


# Code copied from Code Institute "I Think Therefore I Blog" project
# on December 20th, 2022 at 17:50; later modified on December23rd, 2021 at
# 15:20.


class PostList(generic.ListView):
    
    model = Post
    queryset = Post.objects.filter(status=1).order_by('-created_on')
    template_name = 'blog.html'
    paginate_by = 6


class PostDetail(View):

    def get(self, request, slug, *args, **kwargs):
        queryset = Post.objects.filter(status=1)
        post = get_object_or_404(queryset, slug=slug)
        comments = post.comments.filter(approved=True).order_by("-created_on")
        liked = False
        if post.likes.filter(id=self.request.user.id).exists():
            liked = True

        return render(
            request,
            "post_detail.html",
            {
                "post": post,
                "comments": comments,
                "commented": False,
                "liked": liked,
                "comment_form": CommentForm(),
            },
        )

    def post(self, request, slug, *args, **kwargs):
        queryset = Post.objects.filter(status=1)
        post = get_object_or_404(queryset, slug=slug)
        comments = post.comments.filter(approved=True).order_by("-created_on")
        liked = False
        if post.likes.filter(id=self.request.user.id).exists():
            liked = True

        comment_form = CommentForm(data=request.POST)

        if comment_form.is_valid():
            comment_form.instance.email = request.user.email
            comment_form.instance.name = request.user.username
            comment = comment_form.save(commit=False)
            comment.post = post
            comment.save()
        else:
            comment_form = CommentForm()

        return render(
            request,
            "post_detail.html",
            {
                "post": post,
                "comments": comments,
                "commented": True,
                "liked": liked,
                "comment_form": CommentForm(),
            },
        )





def delete_comment(request, comment_id):

    print("Trying to delete comment")
    print(comment_id)
    comment_id=int(comment_id)

    post_slug = request.POST['post_slug']
    print(post_slug)

    try:
        #Comment.objects.filter(id=comment_id)
        comment = get_object_or_404(Comment, id=comment_id)
        print(comment)
        comment.delete()
        print("Comment delted")

    except:
        print('The comment could not be deleted.')

    
    #id = request.POST['comment_id']
    #pk = request.POST['comment_name']
    #
    #if request.method == 'POST':
    #    comment = get_object_or_404(Comment, id=id, pk=pk)
    #    try:
    #        comment.delete()
    #        messages.success(request, 'You have successfully deleted the comment')
#
    #    except:
    #        messages.warning(request, 'The comment could not be deleted.')

    return redirect(reverse('post_detail', args=[post_slug]))

    #redirect(reverse('post_detail'))

    #redirect(reverse('post_detail'))

    return render(
            request,
            "post_detail.html",
            {

            },
        )

    #return reverse('post_detail', kwargs=dict(slug=self.kwargs['slug']))