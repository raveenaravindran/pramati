class CartItemsController < ApplicationController
  def new
  end

  def create
    
  end

  def show
    # @cart = current_user.cart
    # @cart_item = current_user.cart.cart_items
    # last_item = @cart_item.last
    # dish_id = Dish.find_by_id(last_item.dish_id)
    # restaurant= dish_id.restaurant_id
    # if @cart.restaurant_id.nil?
    #   cart_restaurant = Cart.update(@cart.id,restaurant_id: restaurant)
    #   cart_restaurant.save
    # else
    #   if @cart.restaurant_id == restaurant

    # end
    # if @cart_item
    #   for item in @cart_item
    #     @dish = Dish.find(item.dish_id)
    #   end
    # end
  end

  def increase_quantity
    cart_restaurant = self.update_attributes(quantity: self.quantity+1)
    cart_restaurant.save
  end

  def decrease_quantity
    cart_restaurant = self.update_attributes(quantity: self.quantity-1)
    cart_restaurant.save
  end
end
