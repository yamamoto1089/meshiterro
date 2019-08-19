class PostImagesController < ApplicationController
	def new
		@post_image = PostImage.new
	end

	def create
		@post_image = PostImage.new(post_image_params)
		@post_image.user_id = current_user.id
		if  @post_image.save
			redirect_to post_images_path
		else
			render :new
		end
	end

	def index
		@post_images = PostImage.page(params[:page]).reverse_order
	end

	def show
		@post_image = PostImage.find(params[:id])
		@post_comment = PostComment.new
	end

	def destroy
		@post_image = PostImage.find(params[:id])
		@post_image.destroy
		redirect_to post_images_path
	end

	private
	def post_image_params
		params.require(:post_image).permit(:shop_name, :image, :caption)
	end
end

	Refile.secret_key = 'c959d58d0137318491a9c94a903fc89eb5d6ffd78ad2be7b21552c0d8dc58ef5c8d030d16c78b67083a14106367a2b7e4856ca3cb95f92211cba87f33463b7ea'


