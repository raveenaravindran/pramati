class DishesController < ApplicationController
  def new
  	@dish = Dish.new
  end

  def index
	  @dish = Dish.all
	end

	def show
		restaurant = Restaurant.find(params[:restaurant_id])
		@dish = restaurant.dishes
  end

	def create
		@restaurant = Restaurant.find(params[:restaurant_id])
    @dish = @restaurant.dishes.new(dish_params)
    if @dish.save
      redirect_to restaurant_dish_path(@restaurant,@dish)
    else
      render 'new'
    end
  end

  private
  def dish_params
		params.require(:dish).permit(:name, :price)
	end

  def calculate_count

  end

end
