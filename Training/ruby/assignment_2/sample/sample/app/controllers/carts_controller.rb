class CartsController < ApplicationController
  
  def new
    @cart = Cart.new
  end

  # def index
  #   @dish = Dish.all
  # end

  def show
    @cart = current_user.cart
    if @cart 
      add_item
    else
      @cart = User.build_cart
      @cart.save
      add_item
    end
  end

  def add_item
    @dish = Dish.find(params[:dish_id])
    @restaurant = Restaurant.find(params[:restaurant_id])
    redirect_to restaurant_path(@restaurant)
  end

end

  # def create
    
  #     # @cart.save
  #     if @cart.save
  #       @cart_item = CartItem.create()
  #       redirect_to carts_show_path(@cart)
  #     else
  #       render 'new'
  #     end
  #   end
  # end

  # private
  # def cart_params
  #   params.require(:cart).permit(:id)
  # end

