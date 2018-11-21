class RestaurantsController < ApplicationController
  def new
  	@restaurant = Restaurant.new
  end

  def index
	  @restaurant = Restaurant.all
	end

	def show
    @restaurant = Restaurant.find(params[:id])
  end

	def create
    @restaurant = Restaurant.new(restaurant_params)
    if @restaurant.save
      redirect_to restaurant_path(@restaurant.id)
    else
      render 'new'
    end
  end

  private
  def restaurant_params
		params.require(:restaurant).permit(:name, :avatar)
	end

end
