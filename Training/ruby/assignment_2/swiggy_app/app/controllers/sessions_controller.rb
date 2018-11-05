class SessionsController < ApplicationController
  def new

  end

  def index

  end

  def create
  	user = User.find_by(phone: params[:session][:phone])
  	if user && user.authenticate(params[:session][:password])
    # if user 
  	  log_in user
      redirect_to users_path
  	else
    	flash.now[:alert] = 'Invalid phone number/password combination'	
      render 'new'
	 end
  end

  def destroy
    logout
    redirect_to users_path
  end
end
