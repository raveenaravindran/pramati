class Cart < ApplicationRecord
  belongs_to :user
  has_many :cart_items

# def update_restaurant
#   # @cart = current_user.cart
#   if @cart.restuarant_id.nil?
#     cart_restaurant = Cart.update(id,restaurant_id)
#     cart_restaurant.save
#   end
# end

end
