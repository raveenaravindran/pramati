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
    @cart = current_user.cart
    @dish = Dish.find(params[:dish_id])
    @restaurant = Restaurant.find(params[:restaurant_id])
    redirect_to restaurant_path(@restaurant)
    if @dish
      cart_item = @cart.cart_items.create(dish_id: @dish.id)
      cart_item.save
    end
  end

end

