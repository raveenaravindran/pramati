class UsersController < ApplicationController
  def index
	  @user = User.all
	end

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in @user
      redirect_to root_path#user_path(@user.id)

    else
      render 'new'
    end
  end

  def user_params
	params.require(:user).permit(:phone, :name, :email, :password)
end
end
