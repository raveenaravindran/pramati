class AddressController < ApplicationController
  def new
  	@address = Address.new
  end

  def index
	  @address = Address.all
	end

	def show
    @address = current_user.addresses
  end

	def create
    @address = current_user.addresses.create(address_params)
    
    if @address.save
      redirect_to user_path(current_user.id)
    else
      render 'new'
    end
  end

  private
  def address_params
		params.require(:address).permit(:street, :landmark, :city, :zipcode, :state, :country)
	end
end

