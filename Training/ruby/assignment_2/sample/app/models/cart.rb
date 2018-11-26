class Cart < ApplicationRecord
  belongs_to :user
  has_many :cart_items

  def update_restaurant
    cart_restaurant = Cart.update(id,restaurant_id)
    cart_restaurant.save

  end

  def increase_quantity
    cart_restaurant = Cart.update(id,restaurant_id,quantity+1)
    cart_restaurant.save
  end

  def decrease_quantity
    cart_restaurant = Cart.update(id,restaurant_id,quantity-1)
    cart_restaurant.save
  end

end
