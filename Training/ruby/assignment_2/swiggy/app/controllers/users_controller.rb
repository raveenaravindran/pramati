class UsersController < ApplicationController

	def index
	  @user = User.all
	end

	def new
		@user = User.new
	end

	def show
	  @user = User.find(params[:id])
	end

	def create
    @user = User.new(user_params)
    if @user.save
      redirect_to user_path(@user.id), alert: "User created successfully."
    else
      redirect_to new_user_path, alert: "Error creating user."
	  end
	end

	def user_params
	 params.require(:user).permit(:phone, :name, :email, :password)
	end

end
