class CartItemsController < ApplicationController
  def new
  end

  def create
    
  end

  def show
    @cart_item = current_user.cart.cart_items
    # if @cart_item
    #   for item in @cart_item
    #     @dish = Dish.find(item.dish_id)
    #     binding.pry
    #   end
    # end
  end
end
