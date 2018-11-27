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
      @cart_item = @cart.cart_items
      add_item
    else
      @cart = User.build_cart
      @cart.save
      add_item
    end
  end

  def create
    
  end


  def add_item
    @cart = current_user.cart
    @dish = Dish.find(params[:dish_id])
    @restaurant = Restaurant.find(params[:restaurant_id])

    respond_to do |format|
      format.js
      format.html
    end
    if @cart
      if @cart.restaurant_id.nil?
        @cart.update_restaurant(@restaurant)
      else
        if @cart.restaurant_id == @restaurant.id
          cart_item = @cart.cart_items.create(dish_id: @dish.id)
          cart_item.save
          redirect_to restaurant_path(@restaurant)
        else
          flash.alert = 'Items already in cart !!! Your cart contains items from other restaurant. Would you like to reset your cart for adding items from this restaurant?'
          # redirect_to carts_path(@dish)
        end
      end
    else
      redirect_to carts_path
    end  
  end


  def reset_cart
    @cart = current_user.cart
    @restaurant = Restaurant.find(params[:restaurant_id])
    if @cart.restaurant_id
        cart_restaurant = @cart.update_attributes(restaurant_id: nil)
        redirect_to root_path
    else
      redirect_to root_path
    end
  end


end

